import React, { useState } from "react";
import styled from "styled-components";

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
    </StyledCard>
  );
}

const StyledCard = styled.div`
  border: 3px solid black;
`;
