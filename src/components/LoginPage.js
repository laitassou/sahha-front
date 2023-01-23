import React from "react";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";

function LoginPage() {
  return (
    <div className=" full_height mobile_box">
      <div className="container">
        <div className="connect_box login_page">
          <h2>Welcome back</h2>
          <p>Log in to your account to get back to your hub </p>
          <div className="login_form form_box">
            <form>
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
                placeholder="Enter your password"
              />
              <InputBox class="submit_btn" type="submit" value="Log in" />
              <div className="login_btm_box">
                <p>
                  Don’t have an account? <Link to="/signup">Sign up</Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
