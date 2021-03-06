module Todos exposing (..)

import Browser
import Html exposing (..)
import Html.Attributes exposing (checked, placeholder, type_, value)
import Html.Events exposing (onCheck, onClick, onInput, onSubmit)


main =
    Browser.sandbox { init = init, update = update, view = view }



-- MODEL


type alias Model =
    { todos : List Todo
    , nextTitle : String
    , nextId : Int
    }


type alias Todo =
    { id : Int, title : String, done : Bool }


init : Model
init =
    let
        initTodos =
            [ "Learn Elm"
            , "Conquer the World"
            ]
    in
    { todos = List.indexedMap mkTodo initTodos
    , nextTitle = ""
    , nextId = List.length initTodos
    }


mkTodo : Int -> String -> Todo
mkTodo nextId nextTitle =
    { id = nextId, title = nextTitle, done = False }



-- VIEW


view : Model -> Html Msg
view model =
    div []
        [ h1 [] [ text "Things to do" ]
        , viewAddTodo model
        , ul [] <| List.map viewTodo model.todos
        ]


viewAddTodo : Model -> Html Msg
viewAddTodo model =
    form [ onSubmit AddTodo ]
        [ input [ placeholder "Title", onInput GotNewTitle, value model.nextTitle ] []
        , input [ type_ "submit", value "Create" ] []
        ]


viewTodo : Todo -> Html Msg
viewTodo todo =
    li []
        [ input [ type_ "checkbox", onCheck <| ChangeTodoDone todo.id, checked todo.done ] []
        , text todo.title
        , button [ onClick <| RemoveTodo todo.id ] [ text "Remove" ]
        ]



-- UPDATE


type Msg
    = GotNewTitle String
    | RemoveTodo Int
    | AddTodo
    | ChangeTodoDone Int Bool


update : Msg -> Model -> Model
update msg model =
    case msg of
        GotNewTitle newTitle ->
            { model | nextTitle = newTitle }

        RemoveTodo id ->
            removeTodo id model

        AddTodo ->
            addTodo model

        ChangeTodoDone id done ->
            toggleTodo id done model


removeTodo : Int -> Model -> Model
removeTodo id model =
    { model | todos = List.filter (\item -> item.id /= id) model.todos }


addTodo : Model -> Model
addTodo model =
    case model.nextTitle of
        "" ->
            model

        _ ->
            { model
                | todos = addTodoWith model.nextId model.nextTitle model.todos
                , nextTitle = ""
                , nextId = model.nextId + 1
            }


addTodoWith : Int -> String -> List Todo -> List Todo
addTodoWith nextId nextTitle todos =
    mkTodo nextId nextTitle :: todos


toggleTodo : Int -> Bool -> Model -> Model
toggleTodo id done model =
    let
        toggle item =
            if item.id == id then
                { item | done = done }

            else
                item

        changedTodos =
            List.map toggle model.todos
    in
    { model | todos = changedTodos }
