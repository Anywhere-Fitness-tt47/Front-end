import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Route, Link } from "react-router-dom";
// import './App.css';
import Login from "./components/Login";
import Signup from "./components/Signup";
import Home from "./components/Home";
import AddClass from "./components/AddClass";
import EditClass from "./components/EditClass";
import LandingPage from "./components/LandingPage";
import * as yup from "yup";
import schema from "./validation/SignupSchema";
import classSchema from "./validation/ClassSchema";
import styled from "styled-components";
import BGImage from "./images/image.jpg";
import axios from "axios";
import PrivateRoute from "./utils/PrivateRoute";
// import axiosWithAuth from "./utils/axiosWithAuth";

const initialLoginValues = {
  username: "",
  password: "",
};

const initialSignupValues = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  password: "",
  role: "",
};

const initialSignupErrors = {
  first_name: "",
  last_name: "",
  email: "",
  username: "",
  password: "",
  role: "",
};

const initialClassValues = {
  instructor_username: "",
  name: "",
  type: "",
  start_time: "",
  duration: "",
  intensity_level: "",
  location: "",
  attendees: 0,
  max_size: 0,
};

const initialClassErrors = {
  instructor_username: "",
  name: "",
  type: "",
  start_time: "",
  duration: "",
  intensity_level: "",
  location: "",
  max_size: "",
};

function App() {
  const [loginValues, setLoginValues] = useState(initialLoginValues);
  const [signupValues, setSignupValues] = useState(initialSignupValues);
  const [signupErrors, setSignupErrors] = useState(initialSignupErrors);
  const [classValues, setClassValues] = useState(initialClassValues);
  const [classErrors, setClassErrors] = useState(initialClassErrors);
  const [disabled, setDisabled] = useState(true);
  const { push } = useHistory();

  const updateLogin = (name, value) => {
    setLoginValues({ ...loginValues, [name]: value });
  };

  const updateSignup = (name, value) => {
    yup
      .reach(schema, name)
      .validate(value)
      .then(() => {
        setSignupErrors({ ...signupErrors, [name]: "" });
      })
      .catch((err) => {
        setSignupErrors({ ...signupErrors, [name]: err.errors[0] });
      });

    setSignupValues({ ...signupValues, [name]: value });
  };

  const updateClass = (name, value) => {
    yup
      .reach(classSchema, name)
      .validate(value)
      .then(() => {
        setClassErrors({ ...classErrors, [name]: "" });
      })
      .catch((err) => {
        setClassErrors({ ...classErrors, [name]: err.errors[0] });
      });

    setClassValues({ ...classValues, [name]: value });
  };

  const submitLogin = () => {
    console.log("Here are the submitted values for login", { loginValues });
    axios
      .post(
        "https://anywhere-fitness-tt42.herokuapp.com/api/auth/login",
        loginValues
      )
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        push("/home");
      });
    setLoginValues(initialLoginValues);
  };

  const submitSignup = () => {
    console.table("Here are the submitted values for signup", { signupValues });
    axios
      .post(
        "https://anywhere-fitness-tt42.herokuapp.com/api/auth/register",
        signupValues
      )
      .then((res) => {
        console.table(res.data, "data from post of sign up");
        setSignupValues(initialSignupValues);
        push("/login");
      })
      .catch((err) => [console.log(err, "error submitting in signup")]);
    setSignupValues(initialSignupValues);
  };

  const submitClass = () => {
    console.log("Here are the submitted values for the new class", classValues);
    setClassValues(initialClassValues);
  };

  useEffect(() => {
    schema.isValid(signupValues).then((valid) => setDisabled(!valid));
  }, [signupValues]);

  return (
    <div>
      <StyledBGImage>
        <StyledLink>
          <StyledHead>Anywhere Fitness</StyledHead>
          <Link style={{ textDecoration: "none" }} to="/home">
            Home
          </Link>
          <Link style={{ textDecoration: "none" }} to="/classes/add">
            Create new class
          </Link>
          <Link style={{ textDecoration: "none" }} to="/login">
            Login
          </Link>
          <Link style={{ textDecoration: "none" }} to="/signup">
            Signup
          </Link>
        </StyledLink>
        <div>
          <Route exact path='/'>
            <LandingPage />
          </Route>
          <PrivateRoute path="/home">
            <Home />
          </PrivateRoute>
          <Route path="/login">
            <Login
              values={loginValues}
              update={updateLogin}
              submit={submitLogin}
            />
          </Route>
          <Route path="/signup">
            <Signup
              values={signupValues}
              update={updateSignup}
              submit={submitSignup}
              errors={signupErrors}
              disabled={disabled}
            />
          </Route>
          <Route path="/classes/add">
            <AddClass
              values={classValues}
              update={updateClass}
              submit={submitClass}
              errors={classErrors}
            />
          </Route>
          <PrivateRoute path="/classes/edit/:id">
            <EditClass
              details={classValues}
              submit={submitClass}
              update={updateClass}
              errors={classErrors}
              classValues={classValues}
              setClassValues={setClassValues}
            />
          </PrivateRoute>
        </div>
      </StyledBGImage>
    </div>
  );
}

const StyledLink = styled.div`
  display: flex;
  flex-flow: row nowrap;
  justify-content: space-around;
  align-items: baseline;

  a {
    border: 2px solid white;
    border-radius: 20%;
    padding: 4px 4px;
    background-color: teal;
    color:white;
  }

  a:hover {
    border: 2px solid teal;
    background-color: white;
    color: teal;
  }
`;

const StyledBGImage = styled.div`
  background-image: url(${BGImage});
  background-repeat: no-repeat;
  background-size: 100%;
  height: 100vh;
`;

const StyledHead = styled.h1`
  color: ${(pr) => pr.theme.headColor};
  text-shadow: 2px 2px black;
`;

export default App;
