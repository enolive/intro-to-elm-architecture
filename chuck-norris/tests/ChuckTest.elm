module ChuckTest exposing (..)

import Expect exposing (Expectation)
import Fuzz exposing (constant, oneOf, string)
import Html.Attributes exposing (attribute)
import Http
import Json.Decode as D
import Main as Sut
import Test exposing (..)
import Test.Html.Query as Query
import Test.Html.Selector as Selector exposing (class, tag, text)


suite : Test
suite =
    describe "Chuck Norris App"
        [ describe "HTTP"
            [ test "it decodes JSON correctly" <|
                \_ ->
                    """{
                         "icon_url" : "https://assets.chucknorris.host/img/avatar/chuck-norris.png",
                         "id" : "Y5da3-IRTBurGfuFZgKIRg",
                         "url" : "",
                         "value" : "My famous joke"
                         }"""
                        |> D.decodeString Sut.jokeDecoder
                        |> Expect.equal (Ok (Sut.JokeResponse "My famous joke"))
            , test "it fails at decoding" <|
                \_ ->
                    """{"value": 1}"""
                        |> D.decodeString Sut.jokeDecoder
                        |> Expect.err
            ]
        , describe "MODEL"
            [ test "Loads random joke on init" <|
                \_ ->
                    Sut.init ()
                        |> expectFst Sut.Loading
            ]
        , describe "UPDATE"
            [ fuzz modelFuzzer "Refreshes the joke" <|
                \model ->
                    Sut.update Sut.RefreshJoke model
                        |> expectFst Sut.Loading
            , describe "Receives a joke"
                [ fuzz2 modelFuzzer string "Success" <|
                    \model joke ->
                        Sut.update (Sut.ReceivedJoke (Ok { value = joke })) model
                            |> expectFst (Sut.Success (Sut.JokeResponse joke))
                , fuzz modelFuzzer "Error" <|
                    \model ->
                        Sut.update (Sut.ReceivedJoke (Err Http.NetworkError)) model
                            |> expectFst Sut.Failure
                ]
            ]
        , describe "VIEW"
            [ fuzz modelFuzzer "renders title" <|
                \model ->
                    Sut.view model
                        |> Query.fromHtml
                        |> Query.find [ tag "h1" ]
                        |> Query.has [ text "👊 Chuck Norris 👊" ]
            , fuzz modelFuzzer "renders image" <|
                \model ->
                    Sut.view model
                        |> Query.fromHtml
                        |> Query.find [ tag "figure" ]
                        |> Query.find [ tag "img" ]
                        |> Query.has [ Selector.attribute <| attribute "src" "assets/img/chuck-norris-logo.jpg" ]
            , fuzz modelFuzzer "renders refresh" <|
                \model ->
                    Sut.view model
                        |> Query.fromHtml
                        |> Query.find [ tag "button" ]
                        |> Query.has [ text "Refresh" ]
            , describe "renders contents of model"
                [ fuzz string "success" <|
                    \jokeText ->
                        let
                            model =
                                Sut.Success (Sut.JokeResponse jokeText)
                        in
                        Sut.view model
                            |> Query.fromHtml
                            |> findStatusBox
                            |> Query.has [ text ("Did you know? " ++ jokeText) ]
                , test "failure" <|
                    \_ ->
                        Sut.view Sut.Failure
                            |> Query.fromHtml
                            |> findStatusBox
                            |> Query.has [ text "Oops, something went wrong" ]
                , test "loading" <|
                    \_ ->
                        Sut.view Sut.Loading
                            |> Query.fromHtml
                            |> findStatusBox
                            |> Query.has [ text "Loading..." ]
                ]
            ]
        ]


expectFst : a -> ( a, b ) -> Expectation
expectFst expected tuple =
    case tuple of
        ( fst, _ ) ->
            Expect.equal fst expected


findStatusBox =
    Query.find [ class "status-box" ]


modelFuzzer =
    oneOf
        [ constant Sut.Loading
        , constant Sut.Failure
        , modelSuccessFuzzer
        ]


modelSuccessFuzzer =
    string |> Fuzz.map Sut.JokeResponse |> Fuzz.map Sut.Success
