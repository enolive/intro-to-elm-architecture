module Hello exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes exposing (placeholder, type_, value)
import Html.Events exposing (onClick, onInput, onSubmit)


main =
    Browser.sandbox { init = init, view = view, update = update }


type alias Model =
    { name : String }


type Msg
    = GotName String
    | ClearName
    | Submit


init : Model
init =
    { name = "World" }


update msg model =
    case msg of
        GotName name ->
            { model | name = String.trim name }

        ClearName ->
            { model | name = "" }

        Submit ->
            let
                _ =
                    Debug.log "Submitted!" ()
            in
            model


view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text "My First Elm App" ]
        , form [ onSubmit Submit ]
            [ input
                [ placeholder "Please enter your name"
                , type_ "text"
                , onInput GotName
                , value model.name
                ]
                []
            , button [ onClick ClearName, type_ "reset" ] [ text "Clear" ]
            , input [ type_ "submit", value "Ok" ] []
            ]
        , viewName model
        ]


viewName model =
    if model.name /= "" then
        p [] [ text ("Hello " ++ model.name ++ "!") ]

    else
        emptyNode


emptyNode =
    text ""
