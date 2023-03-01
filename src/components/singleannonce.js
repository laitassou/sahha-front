import React, { useState, useEffect, useContext} from 'react'
import AuthContext from "../context/AuthContext";
import { Link } from "react-router-dom";
import "react-big-calendar/lib/css/react-big-calendar.css"

import { useParams} from 'react-router-dom';
import {momentLocalizer} from 'react-big-calendar'
import moment from 'moment'
import Selectable from './Calendar'
require('moment/locale/fr.js')
const localizer = momentLocalizer(moment)


const SingleAnnonce = () => {
    const auth = localStorage.getItem("authTokens");
    const auth_json = JSON.parse(auth);
    const json_auth_token = auth_json.token;
    const { user, logoutUser } = useContext(AuthContext);

    const { id } = useParams();

    let getSingleAnnonce = async () => {
      let url = "http://127.0.0.1:8000/api/slots/"+id+"/"
      console.log("url:"+url)
      let response = await fetch(url, {
        headers: {
          "Content-Type": "application/json",
          "Authorization": "Token "+json_auth_token,
        }
      })
      let data = await response.json()
      setAnnonceData(data)
    }
    let [annonce, setAnnonceData] = useState([])

      useEffect(() => {
        getSingleAnnonce()
    }, [])

    if (user) {
      return (
        <div className="">
          <div className="container">
            <div className="connect_box announce_box"></div>
              <Link to="/list-annonces">Retour aux annonces</Link> 

          <div className="container">
            <div className="announce_box">
              <h2>Details de votre annonce</h2>
              <div className="form_box">
              <h3>{annonce.title} </h3>
              {annonce.description}
              </div>
              <Selectable localizer={localizer} data={annonce} />
            </div>
            <div className="navbar">

            </div>
          </div>
        </div>
        </div>
      );
    }

}

export default SingleAnnonce;