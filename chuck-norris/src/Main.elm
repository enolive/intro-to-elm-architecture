module Main exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes exposing (attribute, class, src)
import Html.Events exposing (onClick)
import Http
import Json.Decode as D


main =
    Browser.element
        { init = init, update = update, subscriptions = subscriptions, view = view }



-- MODEL


type Model
    = Failure
    | Loading
    | Success String


type alias JokeResponse =
    { value : String }


type Msg
    = ReceivedJoke (Result Http.Error JokeResponse)
    | RefreshJoke


init : () -> ( Model, Cmd Msg )
init _ =
    ( Loading, getRandomJoke )



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


role value =
    attribute "role" value


viewJoke : Model -> Html Msg
viewJoke model =
    case model of
        Failure ->
            div [ class "alert alert-danger" ]
                [ text "Oops, something went wrong" ]

        Loading ->
            viewSpinner

        Success jokeText ->
            div []
                [ text ("Did you know? " ++ jokeText) ]


viewSpinner : Html msg
viewSpinner =
    div [ class "spinner-border", role "status" ]
        [ span [ class "sr-only" ] [ text "Loading..." ]
        ]



-- UPDATE


update : Msg -> Model -> ( Model, Cmd Msg )
update msg _ =
    case msg of
        ReceivedJoke result ->
            case result of
                Ok response ->
                    ( Success response.value, Cmd.none )

                Err _ ->
                    ( Failure, Cmd.none )

        RefreshJoke ->
            ( Loading, getRandomJoke )



-- SUBSCRIPTIONS


subscriptions : Model -> Sub Msg
subscriptions _ =
    Sub.none



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
