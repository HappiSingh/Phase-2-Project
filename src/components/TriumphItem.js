import React from "react";

function TriumphItem({ triumph, onDeleteClick }) {
    const {id, name, completed} = triumph;

    const handleDelete = () => {
        let type = "triumphs";
        onDeleteClick(id, type)
    }

    return(
        <div className="card">
            <button onClick={handleDelete} className="delete-button">✕</button>
            <p>{name}</p>
            <p><b className="label">Completed: {completed}</b></p>
        </div>
    );
};

export default TriumphItem;
