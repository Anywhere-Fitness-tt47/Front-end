import React from 'react';
import { useHistory } from "react-router-dom";
import styled from 'styled-components';
import yoga from '../images/yoga.jpg';
import cardio from '../images/cardio2.jpg';
import kickbox from '../images/kickbox.jpg';

export default function LandingPage (){
  const { push } = useHistory();

  const yogaStyle = {
    backgroundImage: `url(${yoga})`,
    backgroundColor: '#92ff38',
    color: '#92ff38'
  };

  const cardioStyle = {
    backgroundImage: `url(${cardio})`,
    backgroundColor: '#84f8fa',
    color: '#84f8fa'
  }

  const kickStyle = {
    backgroundImage: `url(${kickbox})`,
    backgroundColor: '#fc49a9',
    color:'#fc49a9'
  }

  return (
    <div>
      <FlexContainer>
        <StyledImg style={yogaStyle}>
          Yoga
        </StyledImg>
        <StyledImg style={cardioStyle}>
          Cardio
        </StyledImg>
        <StyledImg style={kickStyle}>
          MMA
        </StyledImg>
      </FlexContainer>
      <FlexParent>
        <StyledBtn onClick={()=>{push('/signup')}}>Sign Up Now</StyledBtn>
      </FlexParent>
    </div>
  )
}

const StyledImg = styled.span`
  border-radius: 50%;
  border: 6px solid black;
  background-repeat: no-repeat;
  background-position: center;
  padding:4%;
  margin:5%;
  text-shadow: 2px 2px black;
  font-size: 2rem;
  font-weight: bold;
`

const FlexContainer = styled.div`
  display:flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  margin: 10% 0;
`
const StyledBtn = styled.button`
  background-color: teal;
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  font-size: 2rem;
  &:hover {
    border: 2px solid teal;
    background-color: white;
    color: teal;
  }
`
const FlexParent = styled.div`
  display: flex;
  flex-flow: column nowrap;
  justify-content: flex-start;
  align-items: center;
`

const StyledFooter = styled.footer`
  margin-top:10%;
  height:20vh;
  text-align: center;
`