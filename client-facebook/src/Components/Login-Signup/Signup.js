import "./Login.css";
import React from "react";
import { useState } from "react";
import axios from "axios";
import swal from "sweetalert";
import { useNavigate, Link } from "react-router-dom";
import { regex, error } from "../../Config/constants";

const SignUp = () => {
  const initialValues = {
    user_fname: "",
    user_lname: "",
    user_mob: "",
    user_email: "",
    user_pass: "",
  };
  const [formValues, SetFormValues] = useState(initialValues);
  const [user_fname, setFirstname] = useState(false);
  const [user_lname, setSurname] = useState(false);
  const [user_mob, setMobile] = useState(false);
  const [user_email, setEmail] = useState(false);
  const [user_pass, setPassword] = useState(false);
  const initialError = {
    name: "",
    email: "",
    password: "",
    username: "",
    mobile: "",
    cpassword: "",
  };
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

    if (!values.user_fname) {
      isError = true;
      errors.user_fname = error.requiredError;
    }
    if (!values.user_lname) {
      isError = true;
      errors.user_lname = error.requiredError;
    }
    if (!values.user_email) {
      isError = true;
      errors.user_email = error.requiredError;
    } else if (!regex.emailRegex.test(values.user_email)) {
      errors.user_email = error.emailError;
    }
    if (!values.user_mob) {
      isError = true;
      errors.user_mob = error.requiredError;
    } else if (!regex.phoneRegex.test(values.user_mob)) {
      errors.user_mob = error.phoneError;
    }
    if (!values.user_pass) {
      isError = true;
      errors.user_pass = error.requiredError;
    } else if (!regex.passwordRegex.test(values.user_pass)) {
      isError = true;
      errors.user_pass = error.passwordError;
    }
    SetFormErrors(errors);
    return isError;
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (user_fname || user_lname || user_mob || user_email || user_pass) {
      validate(formValues);
    }

    const validateErrors = validate(formValues);
    if (!validateErrors) {
      axios({
        method: "post",
        url: `/signup`,
        data: formValues,
      })
        .then((res) => {
          const resMsg = res.data.message;
          swal({
            title: resMsg,
            icon: "success",
            button: "Login",
          });
          setTimeout(() => {
            navigate("/");
          }, 2000);
        })
        .catch((err) => {
          const errMsg = JSON.parse(err.request.responseText).error;
          swal({
            title: errMsg,
            icon: "error",
            button: "Ok",
          });
        });
      SetFormValues(initialValues);
      SetFormErrors(initialError);
    }
  };

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              alt="FBlogo"
              width="200"
              height="120"
            ></img>
          </div>
        </div>
        <div className="row cardDesign">
          <div className="col-12">
            <div
              className="card"
              style={{
                width: "35rem",
                left: "48vh",
                border: "1px solid #dadde1",
                backgroundColor: "#f0f2f5",
              }}
            >
              <div className="row p-2">
                <div className="col-12 headingTitle">
                  <h2>Create a new account</h2>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-12 subHeading">
                  <h4>It's quick and easy.</h4>
                  <hr></hr>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="First name"
                    id="user_fname"
                    name="user_fname"
                    onChange={handleChange}
                    value={formValues.user_fname}
                    onFocus={() => setFirstname(true)}
                  ></input>
                  <div className="subErrorHeading">
                    <h4>{formErrors.user_fname}</h4>
                  </div>
                </div>
                <div className="col-6">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Last Name"
                    id="user_lname"
                    name="user_lname"
                    onChange={handleChange}
                    value={formValues.user_lname}
                    onFocus={() => setSurname(true)}
                  ></input>
                  <div className="subErrorHeading">
                    <h4>{formErrors.user_lname}</h4>
                  </div>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Contact"
                    id="user_mob"
                    name="user_mob"
                    onChange={handleChange}
                    value={formValues.user_mob}
                    onFocus={() => setMobile(true)}
                  ></input>
                  <div className="subErrorHeading">
                    <h4>{formErrors.user_mob}</h4>
                  </div>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-12">
                  <input
                    type="email"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Email address"
                    id="user_email"
                    name="user_email"
                    onChange={handleChange}
                    value={formValues.user_email}
                    onFocus={() => setEmail(true)}
                  ></input>
                  <div className="subErrorHeading">
                    <h4>{formErrors.user_email}</h4>
                  </div>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-12">
                  <input
                    type="password"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Password"
                    id="user_pass"
                    name="user_pass"
                    onChange={handleChange}
                    value={formValues.user_pass}
                    onFocus={() => setPassword(true)}
                  ></input>
                  <div className="subErrorHeading">
                    <h4>{formErrors.user_pass}</h4>
                  </div>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-12 para">
                  <p>
                    People who use our service may have uploaded your contact
                    information to Facebook. Learn more.
                  </p>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-12 para">
                  <p>
                    By clicking Sign Up, you agree to our Terms, Privacy Policy
                    and Cookies Policy. You may receive SMS notifications from
                    us and can opt out at any time.
                  </p>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-12 buttonDesign">
                  <button onClick={handleSubmit}>Sign Up</button>
                </div>
              </div>
              <div className="row p-2">
                <div className="col-12">
                  <Link to="/">Already have an account?</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
