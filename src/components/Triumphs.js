
import React from "react";
import TriumphItem from "./TriumphItem";

function Triumphs({ triumphs, onDeleteClick }){

    const renderTriumphs = triumphs.map(triumph => {
        return(
            <TriumphItem 
                key={triumph.id} 
                triumph={triumph}
                onDeleteClick={onDeleteClick} 
                />
        )
    })


    return(
        <div id="triumphs-container">
                {renderTriumphs}
        </div>
    );

}

export default Triumphs;