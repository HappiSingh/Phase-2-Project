import React from "react";
import TargetItem from "./TargetItem";

function Targets({ targets, onUpdateTarget, onDeleteClick }){
// mapping and sending props data to child component 
    const renderTargets = targets.map(target => {
        return (
            <TargetItem 
                key={target.id} 
                target={target} 
                onUpdateTarget={onUpdateTarget}
                onDeleteClick={onDeleteClick}
            />
        )
    })

    return(
        <div id="targets-container">
            {renderTargets}
        </div>
    );
}

export default Targets;