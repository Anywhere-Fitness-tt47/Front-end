import React, { useState } from "react";
import styled from "styled-components";
import axiosWithAuth from "../utils/axiosWithAuth";
import { useHistory } from "react-router-dom";

const initialNewClassFormValues = {
  name: "",
  type: "",
  date: "",
  start_time: "",
  duration: null,
  intensity_level: "",
  location: "",
  attendees: null,
  max_size: null,
  instructor_username: "",
};

export default function AddClass(props) {
  const [newClassFormValues, setNewClassFormValues] = useState(
    initialNewClassFormValues
  );
  console.log(newClassFormValues, "look at me!");
  // const { instructor_username, name, type, start_time, duration, intensity_level, location, max_size } = props.values;
  const { submit, errors } = props;
  const { push } = useHistory();
  // const handleChange = evt => {
  //   const { name, value } = evt.target;
  //   update(name, value)
  // }
  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setNewClassFormValues({ ...newClassFormValues, [name]: value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axiosWithAuth()
      .post(
        "https://anywhere-fitness-tt42.herokuapp.com/api/classes",
        newClassFormValues
      )
      .then((res) => {
        setNewClassFormValues(res.data);
        push("/home");
        console.log(res.data, "posting data");
      })
      .catch((err) => {
        console.log(err, "error posting new class");
      });
    submit();
  };

  return (
    <div>
      <StyledForm>
        <div>
          <label>
            {" "}
            Instructor's username:
            <input
              type="text"
              name="instructor_username"
              value={newClassFormValues.instructor_username}
              onChange={handleChange}
            />
          </label>
          <span>{errors.instructor_username}</span>
        </div>
        <div>
          <label>
            {" "}
            Name:
            <input
              type="text"
              name="name"
              value={newClassFormValues.name}
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
              value={newClassFormValues.type}
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
              value={newClassFormValues.start_time}
              onChange={handleChange}
            />
          </label>
          <span>{errors.start_time}</span>
          <label>
            {" "}
            date:
            <input
              type="text"
              name="date"
              value={newClassFormValues.date}
              onChange={handleChange}
            />
          </label>
          <span>{errors.date}</span>
        </div>
        <div>
          <label>
            {" "}
            Duration:
            <input
              type="text"
              name="duration"
              value={newClassFormValues.duration}
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
              value={newClassFormValues.intensity_level}
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
              value={newClassFormValues.location}
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
              value={newClassFormValues.max_size}
              onChange={handleChange}
            />
          </label>
          <span>{errors.max_size}</span>
          <label>
            {" "}
            attendees:
            <input
              type="number"
              name="attendees"
              value={newClassFormValues.attendees}
              onChange={handleChange}
            />
          </label>
          <span>{errors.attendees}</span>
        </div>
        <button onClick={handleSubmit}>Create class</button>
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
    margin: 2%;
  }
`;
