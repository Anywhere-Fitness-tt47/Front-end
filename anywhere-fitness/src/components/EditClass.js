import React, { useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";

export default function EditClass(props) {
  const {
    name,
    type,
    start_time,
    duration,
    intensity_level,
    location,
    max_size,
  } = props.details;
  const { update, submit, errors, classValues, setClassValues } = props;
  const { class_id } = useParams();
  console.log(class_id, "look at me!");
  const { push } = useHistory();
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    update(name, value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .put(
        "https://anywhere-fitness-tt42.herokuapp.com/api/classes",
        props.details
      )
      .then((res) => {
        console.log(res.details);
        push("/home");
      });
    submit();
  };

  useEffect(() => {
    axiosWithAuth()
      .get(
        `https://anywhere-fitness-tt42.herokuapp.com/api/classes/${class_id}`
      )
      .then((res) => {
        setClassValues(res.data);
      });
  }, []);

  return (
    <div>
      <StyledForm>
        <div>
          <label>
            {" "}
            Name:
            <input
              type="text"
              name="name"
              value={classValues.name}
              onChange={handleChange}
            />
          </label>
          <span>{errors.name}</span>
        </div>
        <div>
          <label>
            {" "}
            Type:
            <input
              type="text"
              name="type"
              value={classValues.type}
              onChange={handleChange}
            />
          </label>
          <span>{errors.type}</span>
        </div>
        <div>
          <label>
            {" "}
            Start time:
            <input
              type="text"
              name="start_time"
              value={classValues.start_time}
              onChange={handleChange}
            />
          </label>
          <span>{errors.start_time}</span>
        </div>
        <div>
          <label>
            {" "}
            Duration:
            <input
              type="text"
              name="duration"
              value={classValues.duration}
              onChange={handleChange}
            />
          </label>
          <span>{errors.duration}</span>
        </div>
        <div>
          <label>
            {" "}
            Intensity level:
            <select
              name="intensity_level"
              value={classValues.intensity_level}
              onChange={handleChange}
            >
              <option value="">--select intensity--</option>
              <option value="easy">Easy</option>
              <option value="medium">Medium</option>
              <option value="intense">Intense</option>
            </select>
          </label>
          <span>{errors.intensity_level}</span>
        </div>
        <div>
          <label>
            {" "}
            Location:
            <input
              type="text"
              name="location"
              value={classValues.location}
              onChange={handleChange}
            />
          </label>
          <span>{errors.location}</span>
        </div>
        <div>
          <label>
            {" "}
            Max size:
            <input
              type="number"
              name="max_size"
              value={classValues.max_size}
              onChange={handleChange}
            />
          </label>
          <span>{errors.max_size}</span>
        </div>
        <button onClick={handleSubmit}>Submit changes</button>
      </StyledForm>
    </div>
  );
}

const StyledForm = styled.form`
  display: flex;
  flex-flow: column nowrap;
  justify-content: space-evenly;
  align-items: flex-start;
  margin-left: 20%;

  label {
    color: white;
    text-shadow: 1px 1px black;
    font-weight: bold;
    font-size: 1.5rem;
  }

  input {
    font-size: 1rem;
  }

  span {
    color: red;
    text-shadow: 1px 1px black;
    font-weight: bold;
    font-size: 1rem;
    margin-left: 2%;
    display: block;
  }

  button {
    background: white;
    margin-left: 20%;
  }

  div {
    margin: 3%;
  }
`;
