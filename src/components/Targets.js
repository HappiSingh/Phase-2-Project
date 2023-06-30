import React from "react";
import TargetItem from "./TargetItem";

function Targets({ targets, onUpdateTarget, onDeleteClick }){

    const renderTargets = targets.map(target => {
        return(
            <TargetItem 
                key={target.id} 
                gtarget={target} 
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