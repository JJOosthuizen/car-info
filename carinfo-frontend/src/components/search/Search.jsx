import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import './Search.css';

function Search() {
    const [input, setInput] = useState("");
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        navigate("/carByName/" + input);
    }
    return (
        <form onSubmit={submitHandler}>
            <div>
                <input
                    onChange={(e) => setInput(e.target.value)}
                    type="text"
                    value={input}
                />
            </div>
        </form>
    )
}

export default Search