import React from 'react';
import { Link } from 'react-router-dom';
import './AddMemeButton.css';

export function AddMemeButton() {
    return (
        <Link to="add">
            <button className="btn">ADD</button>
        </Link>
    )
}