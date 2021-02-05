import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
// import EditClass from "./EditClass";
// import PrivateRoute from "../utils/PrivateRoute";

export default function Cards(props) {
  const { class_id } = props.details;
  console.log(class_id, "see the id?");
  const handleClick = () => {
    setJoined(true);
    console.log("You've joined this class");
  };

  const [joined, setJoined] = useState(false);

  return (
    <StyledCard>
      <h3>Class name: {props.details.name}</h3>
      <p>Type: {props.details.type}</p>
      <p>Start time: {props.details.start_time}</p>
      <p>Location: {props.details.location}</p>
      <button onClick={handleClick} disabled={joined}>
        {joined ? "Joined Class" : "Join Class"}
      </button>
      <Link to={`/classes/edit/${class_id}`}>Edit Class</Link>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  border: 3px solid black;
  width:20rem;
  display:inline-block;
  background-color: rgba(255,255,255,0.66);
  margin: 3px;
  padding-left: 4px;
  padding-bottom: 4px;

  &:hover {
    background-color: white;
  }

  button {
    margin-right:3px;
  }
`;
