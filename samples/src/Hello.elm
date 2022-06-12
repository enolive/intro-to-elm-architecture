module Hello exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes exposing (placeholder, type_, value)
import Html.Events exposing (onInput)


main =
    Browser.sandbox { init = init, view = view, update = update }



-- MODEL


type alias Model =
    { name : String }


init : Model
init =
    { name = "World" }



-- UPDATE


type Msg
    = GotName String


update msg model =
    case msg of
        GotName name ->
            { model | name = String.trim name }



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text "My First Elm App" ]
        , div []
            [ input
                [ placeholder "Please enter your name"
                , type_ "text"
                , onInput GotName
                , value model.name
                ]
                []
            ]
        , viewName model
        ]


viewName : Model -> Html Msg
viewName model =
    if model.name /= "" then
        p [] [ text ("Hello " ++ model.name ++ "!") ]

    else
        emptyNode


emptyNode : Html Msg
emptyNode =
    text ""
