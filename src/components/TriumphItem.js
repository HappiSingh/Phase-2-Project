import React from "react";

function TriumphItem({ triumph, onDeleteClick }) {
    // destructuring prop
    const {id, name, completed} = triumph;

    // handles delete event
    const handleDelete = () => {
        let type = "triumphs";
        onDeleteClick(id, type)
    }

    // displays the card and the data
    return(
        <div className="card">
            <button onClick={handleDelete} className="delete-button">
                ✕
            </button>
            <p><b className="label">Triumph: </b>{name}</p>
            <p><b className="label">Completed on: {completed}</b></p>
        </div>
    );
};

export default TriumphItem;
