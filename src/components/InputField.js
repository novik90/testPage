import { Button, TextField } from "@mui/material";
import React from "react";

const InputField = ({ text, handleInput, handleSubmit }) => {
    return (
        <label>
            <div className="box">
                <TextField
                    className="box__input"
                    id="outlined-basic"
                    label="New Todo"
                    variant="outlined"
                    value={text}
                    onChange={(e) => handleInput(e.target.value)}
                />
                <Button onClick={handleSubmit} variant="contained">
                    Add Todo
                </Button>
            </div>
        </label>
    );
};

export default InputField;
