import React, { useState } from "react";
import classnames from "classnames";
import axios from "axios";

import "./sign-up.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignUp = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
    confirmPassword: "",
    accountType: "",
    phoneNumber: "",
    name: "",
    currentLocation: "",
    errors: {}
  });

  const handleChange = event => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    let newUser = {
      name: user.name,
      email: user.email,
      accountType: user.accountType,
      password: user.password,
      phoneNumber: user.phoneNumber,
      confirmPassword: user.confirmPassword,
      currentLocation: user.currentLocation
    };
    axios
      .post("/api/users/register", newUser)
      .then(res => console.log(res.data))
      .catch(err => setUser({ ...user, errors: err.response.data }));
  };

  return (
    <div className="sign-up">
      <h2>Create an account</h2>
      <span>Sign up with your email and password</span>

      <form onSubmit={handleSubmit} noValidate>
        <div className="required-field">* required field</div>

        <div className="sub-input-div">
          <FormInput
            handleChange={handleChange}
            name="name"
            className={classnames("form-input", {
              "form-input-invalid": user.errors.name
            })}
            type="text"
            value={user.name}
            label="Name*"
          />
          {user.errors.name && (
            <div className="isError"> {user.errors.name} </div>
          )}

          <FormInput
            handleChange={handleChange}
            name="phoneNumber"
            type="number"
            className={classnames("form-input", {
              "form-input-invalid": user.errors.phoneNumber
            })}
            value={user.phoneNumber}
            label="Mobile"
          />
          {user.errors.phoneNumber && (
            <div className="isError"> {user.errors.phoneNumber} </div>
          )}
        </div>
        <div>
          <p className="form-input-radio">Please select Account Type:*</p>
          <FormInput
            type="radio"
            name="accountType"
            value="Partner"
            className={classnames("form-input", {
              "form-input-invalid": user.errors.phoneNumber
            })}
            handleChange={handleChange}
            label="Partner"
          />
          <FormInput
            type="radio"
            name="accountType"
            value="Customer"
            className={classnames("form-input", {
              "form-input-invalid": user.errors.phoneNumber
            })}
            handleChange={handleChange}
            label="Customer"
          />
          {user.errors.accountType && (
            <div className="isError"> {user.errors.accountType} </div>
          )}
        </div>
        <div className="sub-input-div">
          <FormInput
            handleChange={handleChange}
            name="email"
            className={classnames("form-input", {
              "form-input-invalid": user.errors.email
            })}
            type="email"
            value={user.email}
            label="Email*"
          />
          {user.errors.email && (
            <div className="isError"> {user.errors.email} </div>
          )}
          <FormInput
            handleChange={handleChange}
            name="currentLocation"
            className={classnames("form-input", {
              "form-input-invalid": user.errors.currentLocation
            })}
            type="text"
            value={user.currentLocation}
            label="Current Location"
          />
          {user.errors.currentLocation && (
            <div className="isError"> {user.errors.currentLocation} </div>
          )}
        </div>

        <div className="sub-input-div">
          <FormInput
            handleChange={handleChange}
            name="password"
            className={classnames("form-input", {
              "form-input-invalid": user.errors.password
            })}
            type="password"
            value={user.password}
            label="Password*"
          />

          {user.errors.password && (
            <div className="isError"> {user.errors.password} </div>
          )}

          <FormInput
            handleChange={handleChange}
            name="confirmPassword"
            className={classnames("form-input", {
              "form-input-invalid": user.errors.confirmPassword
            })}
            type="password"
            value={user.confirmPassword}
            label="Confirm Password*"
          />
          {user.errors.confirmPassword && (
            <div className="isError"> {user.errors.confirmPassword} </div>
          )}
        </div>
        <div className="buttons">
          <CustomButton type="submit">Sign Up</CustomButton>
          {/* <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>Sign in Google</CustomButton> */}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
