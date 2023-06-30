// imports for the routing, state handling, data handling, and components
import React, { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";

import Targets from "./components/Targets";
import Triumphs from "./components/Triumphs";
import Home from "./components/Home";
import Form from "./components/Form";
import NavBar from "./components/NavBar";


function App() {
  // added state handling for the 2 data sets from the db 
  const [targets, setTargets] = useState([]);
  const [triumphs, setTriumphs] = useState([]);

  // fetching the data from the db file and setting it to their states
  // empty array dependency so it runs only once
  useEffect(() => {
    fetch(`http://localhost:4000/targets`)
      .then(res => res.json())
      .then(setTargets);
  }, []);

  useEffect(() => {
    fetch(`http://localhost:4000/triumphs`)
      .then(res => res.json())
      .then(setTriumphs);
  }, []);

  // handling updates to targets
  const onUpdateTarget = (updatedTarget) => {
    const updatedTargets = targets.map(originalTarget => {
      if (originalTarget.id === updatedTarget.id) {
        return updatedTarget;
      } else {
        return originalTarget;
      }
    });
    // testing
    console.log(updatedTargets);
  }

  // submitting the form - takes the type (target/triumph) and adds the entered date to db
  // uses the spread operator to return new array
  const onFormSubmit = (newData, type) => {
      type === 'targets' 
      ? setTargets(targets => [...targets, newData]) 
      : setTriumphs(triumphs => [...triumphs, newData])
  }

  // deleting data from db if X is clicked
  const onDeleteClick = (id, type) => {
    fetch(`http://localhost:4000/${type}/${id}`, {
      method: 'DELETE'
    })
      if(type === 'targets'){
        setTargets(orgTargets => orgTargets.filter(orgTarget => {
          return orgTarget.id === id
          ? null 
          : orgTarget;
        }))
      } else{
        setTriumphs(orgTriumphs => orgTriumphs.filter(orgTriumph => {
          return orgTriumph.id === id 
          ? null 
          : orgTriumph;
        }))
      }
  }

  // placing components and routes and passing down props
  return (
    <div>
      <NavBar />
      <Form onFormSubmit={onFormSubmit}/>
        <Switch>
          <Route exact path="/">
              <Home />
          </Route>
          <Route path="/targets">
              <Targets targets={targets} onUpdateTarget={onUpdateTarget} onDeleteClick={onDeleteClick}/>
          </Route>
          <Route path="/triumphs">
              <Triumphs triumphs={triumphs} onDeleteClick={onDeleteClick}/>
          </Route>
        </Switch>
    </div>
  );
}

export default App;