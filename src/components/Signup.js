import React from "react";
import InputBox from "./InputBox";

function Signup() {
  return (
    <div className="container">
      <div className="connect_box signup_box">
        <h2>Sign up</h2>
        <p>Register for free </p>
        <div className="login_form form_box">
          <form>
            <InputBox
              label="First name"
              type="text"
              id="fname"
              for="fname"
              name="fname"
              placeholder="First name"
            />
            <InputBox
              label="Last name"
              type="text"
              id="lname"
              for="lname"
              name="lname"
              placeholder="Last name"
            />
            <InputBox
              label="Email"
              type="email"
              id="email"
              for="email"
              name="email"
              placeholder="Email"
            />
            <InputBox
              label="Username"
              type="text"
              id="uname"
              for="uname"
              name="uname"
              placeholder="Username"
            />
            <InputBox
              label="Password"
              type="password"
              id="pwd"
              for="password"
              name="password"
              placeholder="Password"
            />
            <InputBox
              label="Confirm password"
              type="password"
              id="confirmpwd"
              for="confirmpwd"
              name="confirmpwd"
              placeholder="Password"
            />
            <InputBox class="submit_btn" type="submit" value="Register" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
