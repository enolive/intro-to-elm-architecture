module Main exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes exposing (attribute, class, src)
import Html.Events exposing (onClick)
import Http
import Json.Decode as D


main : Program () Model Msg
main =
    Browser.element
        { init = init, update = update, subscriptions = always Sub.none, view = view }



-- MODEL


type Model
    = Failure
    | Loading
    | Success JokeResponse


type alias JokeResponse =
    { value : String }


init : () -> ( Model, Cmd Msg )
init =
    always ( Loading, getRandomJoke )



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text "👊 Chuck Norris 👊" ]
        , figure []
            [ img [ src "assets/img/chuck-norris-logo.jpg" ] []
            , figcaption [] [ text "Chuck Norris approves" ]
            ]
        , div []
            [ div [ class "status-box" ] [ viewJoke model ]
            , button [ class "btn btn-primary", onClick RefreshJoke ] [ text "Refresh" ]
            ]
        ]


viewJoke : Model -> Html Msg
viewJoke model =
    case model of
        Failure ->
            div [ class "alert alert-danger" ]
                [ text "Oops, something went wrong" ]

        Loading ->
            viewSpinner

        Success joke ->
            div []
                [ text ("Did you know? " ++ joke.value) ]


viewSpinner : Html Msg
viewSpinner =
    div [ class "spinner-border", role "status" ]
        [ span [ class "sr-only" ] [ text "Loading..." ]
        ]


role : String -> Attribute Msg
role value =
    attribute "role" value



-- UPDATE


type Msg
    = ReceivedJoke (Result Http.Error JokeResponse)
    | RefreshJoke


update : Msg -> Model -> ( Model, Cmd Msg )
update msg _ =
    case msg of
        ReceivedJoke result ->
            case result of
                Ok response ->
                    ( Success response, Cmd.none )

                Err _ ->
                    ( Failure, Cmd.none )

        RefreshJoke ->
            ( Loading, getRandomJoke )



-- HTTP


getRandomJoke : Cmd Msg
getRandomJoke =
    Http.get
        { url = "https://api.chucknorris.io/jokes/random?category=dev"
        , expect = Http.expectJson ReceivedJoke jokeDecoder
        }


jokeDecoder : D.Decoder JokeResponse
jokeDecoder =
    D.map JokeResponse (D.field "value" D.string)
