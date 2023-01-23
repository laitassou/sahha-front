import React from "react";
import InputBox from "./InputBox";

function Announce() {
  return (
    <div className="container">
      <div className="connect_box announce_box">
        <h2>Publiez votre annonce</h2>
        <div className="login_form form_box">
          <form>
            <div className="textarea">
              <label>Besoin</label>
              <textarea placeholder="Text"></textarea>
            </div>
            <div className="textarea">
              <label>Description detailllée</label>
              <textarea placeholder="Text"></textarea>
            </div>
            <InputBox class="submit_btn" type="submit" value="Pubiler" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Announce;
