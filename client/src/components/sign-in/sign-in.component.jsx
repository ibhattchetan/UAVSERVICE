import React, { useState, useEffect } from "react";
import classnames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { loginUser } from "../../redux/actions/authActions";
import "./sign-in.styles.scss";
import FormInput from "../form-input/form-input.component";
import CustomButton from "../custom-button/custom-button.component";

const SignIn = props => {
  const [login, setLogin] = useState({
    email: "",
    password: "",
    errors: {}
  });

  const errorsStore = useSelector(store => store.errors);
  const dispatch = useDispatch();

  const handleChange = event => {
    const { value, name } = event.target;
    setLogin({ ...login, [name]: value });
  };

  const handleSubmit = event => {
    event.preventDefault();
    const userLogin = {
      email: login.email,
      password: login.password
    };
    dispatch(loginUser(userLogin));
  };

  useEffect(() => {
    if (errorsStore) {
      setLogin({ ...login, errors: errorsStore });
    }
  }, [errorsStore]);

  return (
    <div className="sign-in">
      <h2>Already have an account</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={handleSubmit} noValidate>
        <div className="required-field">* required field</div>
        <FormInput
          handleChange={handleChange}
          name="email"
          className={classnames("form-input", {
            "form-input-invalid": login.errors.email
          })}
          type="email"
          value={login.email}
          label="Email*"
        />

        {login.errors.email && (
          <div className="isError"> {login.errors.email} </div>
        )}

        <FormInput
          handleChange={handleChange}
          name="password"
          type="password"
          className={classnames("form-input", {
            "form-input-invalid": login.errors.password
          })}
          value={login.password}
          label="Password*"
        />

        {login.errors.password && (
          <div className="isError"> {login.errors.password} </div>
        )}

        <div className="buttons">
          <CustomButton type="submit">Sign in</CustomButton>
          <CustomButton isGoogleSignIn>Google Sign in</CustomButton>
        </div>
      </form>
    </div>
  );
};

export default SignIn;
