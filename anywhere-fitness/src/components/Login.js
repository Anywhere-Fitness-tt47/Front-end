import React from 'react';
import styled from 'styled-components';

export default function Login(props) {
  const { username, password } = props.values;
  const { update, submit } = props;

  const handleChange = evt => {
    const {name, value} = evt.target;
    update(name, value)
  }

  const handleSubmit = evt => {
    evt.preventDefault();
    submit()
  }

  return(
    <div>
      <StyledForm>
        <div>
          <label> Username: 
            <input 
              type='text'
              name='username'
              value={username}
              onChange={handleChange}
            />
          </label>
        </div>
        <div>
          <label> Password: 
            <input 
              type='password'
              name='password'
              value={password}
              onChange={handleChange}
            />
          </label>
        </div>
        <button onClick={handleSubmit}>Login</button>
      </StyledForm>
    </div>
  )
}

const StyledForm = styled.form`
  display:flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-left:30%;

  label {
    color:white;
    text-shadow: 1px 1px black;
    font-weight:bold;
    font-size:1.5rem;
  }

  input {
    font-size: 1rem;
  }

  button {
    background:white;
    margin-left: 20%;
  }

  div {
    margin: 1%;
  }
`