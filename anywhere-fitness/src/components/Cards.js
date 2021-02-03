import React, { useState } from "react";
import styled from "styled-components";
import { Link, Route } from 'react-router-dom';
import EditClass from './EditClass';

export default function Cards(props) {

  const handleClick = () => {
    setJoined(true);
    console.log("You've joined this class");
  }

  const [joined, setJoined] = useState(false);

  console.log(props, "card props");

  return (
    <StyledCard>
      <h3>Name={props.details.name}</h3>
      <p>Type={props.details.type}</p>
      <p>Time={props.details.start_time}</p>
      <p>Location={props.details.location}</p>
      <button onClick={handleClick} disabled={joined}>{joined ? 'Joined Class' : 'Join Class'}</button>
      <Link to='/classes/edit'>Edit Class</Link>
      <Route path='/classes/edit'>
        <EditClass details={props.details}/>
      </Route>
      </StyledCard>
    
    
  );
}

const StyledCard = styled.div`
  border: 3px solid black;
`;
