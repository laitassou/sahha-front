import React from "react";
import { Link } from "react-router-dom";

function ConnectAccount() {
  return (
    <div className="full_height">
      <div className="container">
        <div className="connect_box">
          <h2>
            Connect with us <br />
            <span>on the go</span>
          </h2>
          <div className="button_box">
            <Link className="create_btn" to="/signup">
              Create an account
            </Link>
            <Link className="sign_btn" to="/loginPage">
              Sign in
            </Link>
          </div>
        </div>
        <div className="mobile_img">
          <img src="home_bg.png" alt="home_img" />
        </div>
      </div>
    </div>
  );
}

export default ConnectAccount;
