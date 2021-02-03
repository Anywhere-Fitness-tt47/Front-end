import React from "react";
import styled from "styled-components";

export default function Cards(props) {
  console.log(props, "card props");
  return (
    <StyledCard>
      <h3>Name={props.details.name}</h3>
      <p>Type={props.details.type}</p>
      <p>Time={props.details.start_time}</p>
      <p>Location={props.details.location}</p>
    </StyledCard>
  );
}

const StyledCard = styled.div`
  border: 3px solid black;
`;
