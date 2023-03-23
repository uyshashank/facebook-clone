import "./Login.css";
import React from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { regex, error } from "../../Config/constants";

const Login = () => {
  const [email, setEmail] = useState(false);
  const [password, setPassword] = useState(false);
  const initialValues = { email: "", password: "" };
  const [formValues, SetFormValues] = useState(initialValues);
  const initialError = { email: "", password: "" };
  const [formErrors, SetFormErrors] = useState(initialError);
  let navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    const oldFormValues = { ...formValues };
    oldFormValues[name] = value;
    SetFormValues(oldFormValues);
  }
  const validate = (values) => {
    let isError = false;
    const errors = {};
    if (!values.email) {
      isError = true;
      errors.email = error.requiredError;
    } else if (!regex.emailRegex.test(values.email)) {
      errors.email = error.emailError;
    }
    if (!values.password) {
      isError = true;
      errors.password = error.requiredError;
    } else if (!regex.passwordRegex.test(values.password)) {
      isError = true;
      errors.password = error.passwordError;
    }
    SetFormErrors(errors);
    return isError;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email || password) {
      validate(formValues);
    }
    const validateErrors = validate(formValues);
    if (!validateErrors) {
      axios({
        method: "post",
        url: `http://localhost:4000/login`,
        data: formValues,
      })
        .then((res) => {
          localStorage.setItem("userLoggedIn", res.data.userEmail);
          SetFormValues(initialValues);
          SetFormErrors(initialError);
          navigate("/dashboard");
        })
        .catch((err) => {
          const errMsg = JSON.parse(err.request.responseText).error;
          swal({
            title: errMsg,
            icon: "error",
            button: "Try Again",
          });
        });
    }
  };
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="Facebook Logo"
              className="fb__logo"
            ></img>
          </div>
        </div>
        <div>
          <div className="cardDesign">
            <div className="cardForm">
              <div>
                <input
                  type="text"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Email address or phone number"
                  id="email"
                  name="email"
                  onChange={handleChange}
                  value={formValues.email}
                  onFocus={() => setEmail(true)}
                ></input>
                <div className="subErrorHeading">
                  <h4>{formErrors.email}</h4>
                </div>
              </div>

              <div>
                <input
                  type="password"
                  className="form-control"
                  aria-describedby="emailHelp"
                  placeholder="Password"
                  id="password"
                  name="password"
                  onChange={handleChange}
                  value={formValues.password}
                  onFocus={() => setPassword(true)}
                ></input>
                <div className="subErrorHeading">
                  <h4>{formErrors.password}</h4>
                </div>
              </div>

              <div>
                <button className="fb__button" onClick={handleSubmit}>
                  Log in
                </button>
                <div className="forgottenPassword text-center">
                  <a href="##">Forgotten password?</a>
                </div>
              </div>
              <div className="border__line"></div>
              <div className="text-center">
                <form action="/signup">
                  <button className="createNewAccountBtn">
                    Create new account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
