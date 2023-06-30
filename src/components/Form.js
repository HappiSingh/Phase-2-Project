import React, { useState } from "react";

function Form({ onFormSubmit }){
    const [formType, setFormType] = useState(true)
    const [targetData, setTargetData] = useState({
        name: "",
        progress: ""
    })
    const [triumphData, setTriumphData] = useState({
        name: "",
        completed: ""
    })

    const handleFormTypeChange = () => {
        setFormType(!formType);
    }

    const handleChange = (e) => {
        if(formType){
            setTargetData({
                ...targetData,
                [e.target.name]: e.target.value,
              })
        } else{
            setTriumphData({
                ...triumphData,
                [e.target.name]: e.target.value,
              });
        };
    };

    const handleSubmit = (e) => {
        e.preventDefault()

        let type;
        if(formType){ type = "targets"}
            else{ type = "triumphs"}

        fetch(`http://localhost:4000/${type}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify(formType ? targetData : triumphData)
            })
                .then(res => res.json())
                .then(newData => onFormSubmit(newData, type))

        formType ? 
        setTargetData({name: "", progress: ""}) : 
        setTriumphsData({name: "", completed: ""})
    };


    return(
        <section id="form-section">
            <h2>Add a new target or a triumph:</h2>
            <form onSubmit={handleSubmit}>
                <select 
                    name="form-type"
                    onChange={handleFormTypeChange}
                    >
                    <option value="target">Target</option>
                    <option value="triumph">Triumph</option>
                </select>
                <input 
                    onChange={handleChange}
                    className="description"
                    type="text"
                    placeholder="Description"
                    name="name"
                    value={formType ? targetData.name : triumphData.name}
                    />
                
                { 
                // Ternary operator to determine which kind of form we are completing, based off of the dropdown selection.
                formType ?
                    <label>% Complete
                    <input 
                        onChange={handleChange}
                        type="number"
                        placeholder="0"
                        name="progress"
                        value={targetData.progress}
                        />
                    </label> : 
                    <label>Completion Date:
                    <input 
                        onChange={handleChange}
                        type="text"
                        placeholder="Ex. May 2020"
                        name="completed"
                        value={triumphData.completed}
                        />
                    </label>
                }
                <button type="submit">Add</button>
            </form>
        </section>
    );
}

export default Form;