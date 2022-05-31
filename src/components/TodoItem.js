import { Checkbox } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { deleteTodo, toggleStatus } from "../store/todoSlice";

const TodoItem = ({ id, title, completed }) => {
    const dispatch = useDispatch();

    return (
        <li className="todo__item">
            <Checkbox
                className="todo__checkbox"
                onChange={() => dispatch(toggleStatus(id))}
                checked={completed}
                color="default"
            />
            <span className="todo__text">{title}</span>
            <span
                className="todo__delete"
                onClick={() => dispatch(deleteTodo(id))}
            >
                &times;
            </span>
        </li>
    );
};

export default TodoItem;
