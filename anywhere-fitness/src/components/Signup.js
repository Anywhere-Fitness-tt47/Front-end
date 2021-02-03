import React from "react";
import styled from 'styled-components';

export default function Signup(props) {
  const { first_name, last_name, email, username, password, role } = props.values;
  const { update, submit, errors, disabled } = props;

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    submit();
  };

  return (
    <div>
      <StyledForm>
        <div>
          <label>
            {" "}
            First Name:
            <input type="text" name="first_name" value={first_name} onChange={handleChange} />
          </label>
          <span>{errors.first_name}</span>
        </div>
        <div>
          <label>
            {" "}
            Last Name:
            <input type="text" name="last_name" value={last_name} onChange={handleChange} />
          </label>
          <span>{errors.last_name}</span>
        </div>
        <div>  
          <label>
            {" "}
            Email:
            <input
              type="email"
              name="email"
              value={email}
              onChange={handleChange}
            />
          </label>
          <span>{errors.email}</span>
        </div>
        <div>
          <label>
            {" "}
            Username:
            <input
              type="text"
              name="username"
              value={username}
              onChange={handleChange}
            />
          </label>
          <span>{errors.username}</span>
        </div>
        <div>
          <label>
            {" "}
            Password:
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </label>
          <span>{errors.password}</span>
        </div>
        <div>
          <label>
            {" "}
            Role:
            <select name="role" value={role} onChange={handleChange}>
              <option value="">---select your role---</option>
              <option value="instructor">Instructor</option>
              <option value="client">Client</option>
            </select>
          </label>
          <span>{errors.role}</span>
        </div>
        <button onClick={handleSubmit} disabled={disabled}>
          Create new account
        </button>
      </StyledForm>
    </div>
  );
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

  span {
    color:red;
    text-shadow: 1px 1px black;
    font-weight:bold;
    font-size: 1rem;
    display: block
  }

  button {
    background:white;
    margin-left: 20%;
  }

  div {
    margin: 3%;
  }
`