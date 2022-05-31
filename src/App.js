import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addNewTodo, fetchTodos } from "./store/todoSlice";

import TodoList from "./components/TodoList";
import InputField from "./components/InputField";
import "./App.css";
import { Container } from "@mui/material";

function App() {
    const { status, error } = useSelector((state) => state.todos);
    const dispatch = useDispatch();
    const [text, setText] = useState("");

    const addTask = (e) => {
        if (!text) {
            return;
        }
        dispatch(addNewTodo(text));
        setText("");
    };

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    return (
        <Container maxWidth="sm" className="main">
            <InputField
                text={text}
                handleInput={setText}
                handleSubmit={addTask}
            />

            {status === "loading" && <h2>Loading...</h2>}
            {error && <h2>An error occured: {error}</h2>}

            <TodoList />
        </Container>
    );
}

export default App;
