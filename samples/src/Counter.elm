module Counter exposing (..)

import Browser
import Html exposing (..)
import Html.Events exposing (onClick)


main =
    Browser.sandbox { init = init, view = view, update = update }


type alias Model =
    Int


type Msg
    = Increment
    | Decrement


init : Model
init =
    0


view : Model -> Html Msg
view model =
    p []
        [ text ("Counter is " ++ String.fromInt model)
        , button [ onClick Increment ] [ text "+" ]
        , button [ onClick Decrement ] [ text "-" ]
        ]


update : Msg -> Model -> Model
update msg model =
    case msg of
        Increment ->
            model + 1

        Decrement ->
            if model > 0 then
                model - 1

            else
                model