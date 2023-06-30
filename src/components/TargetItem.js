import React, {useState} from "react";

function TargetItem({ target, onUpdateTarget, onDeleteClick }) {
    const {id, name, progress} = target;
    const [progressBar, setProgressBar] = useState(progress);


    const handleChange = (e) => {
        setProgressBar(parseInt(e.target.value))
        fetch(`http://localhost:4000/targets/${id}`, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({progress: progressBar})
        })
            .then(res => res.json())
            .then((updatedTarget) => {
                onUpdateTarget(updatedTarget)
            })
    }

    const handleDelete = () => {
        let type = "targets";
        onDeleteClick(id, type)
    }

    return(
        <div className="card">
            <button onClick={handleDelete} className="delete-button">✕</button>
            <p><b className="label">Target:</b> {name}</p>
            <p><b className="label">Progress:</b> {progressBar}%</p>
            <input onChange={handleChange} className="progress-slider" type="range" min="0" max="100" value={progressBar} step="10" id="myRange" name={progress}/>
        </div>
    );
};

export default TargetItem;