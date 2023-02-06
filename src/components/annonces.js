import { useState, useContext } from "react";
import InputBox from "./InputBox";
import AuthContext from "../context/AuthContext";

import Select from 'react-select';



function Annonces(props) {

  const [title, SetTitle] = useState("");
  const [description, setDescription] = useState("");
  const { user, logoutUser } = useContext(AuthContext);

  const { publishAnnonce } = useContext(AuthContext);

  const handleSubmit = async e => {
    e.preventDefault();
    publishAnnonce(title, description);
  };

  const [value, setValue] = useState(props.name);

  const handleTitle = (event) => {
    SetTitle(event.target.value);
  };
  const handleDesc = (event) => {
    setDescription(event.target.value);
};
  if (user) {
    return (
      <div className="container">
        <div className="connect_box announce_box">
          <h2>Publiez votre annonce</h2>
          <div className="login_form form_box">
            <form onSubmit={handleSubmit}>
              <div className="textarea">
                <label>Besoin</label>
                <textarea placeholder="Text" height="50px" id="noter-text-area" name="textarea" value={title} onChange={handleTitle}></textarea>
              </div>
              <div className="textarea">
                <label>Description detailllée</label>
                <textarea placeholder="Text"  id="noter-text-area" name="textarea" value={description} onChange={handleDesc} ></textarea>
              </div>
              <InputBox class="submit_btn" type="submit" value="Publier" />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Annonces;