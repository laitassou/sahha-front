import React from "react";
import InputBox from "./InputBox";
import "../resources/howto.css"
function Guide() {
    return (
        <div className="full_height">
          <div className="container">
            <div className="connect_box announce_box">
              <h2>Guide</h2>
                <p> 
              Votre conseiller est votre interlocuteur unique dans votre agence. Il est à votre écoute et à votre disposition
              pour organiser le bon déroulement des prestations, mais aussi pour répondre à vos questions.
              </p>

          <br />
          <p>
          Nous proposons des services à domicile sur mesure, assurés par des personnes aux profils adaptés, avec le souci 
          constant de rendre le quotidien des personnes âgées plus agréable et de faciliter leur maintien à domicile.

          <br />
          <br />
          </p>
          <div class="box">
          <h2>Déroulementt</h2>
        <ul>
          <li><span>1</span> Notre agence prend contact avec vous pour évaluer vos besoins</li>
          <li><span>2</span> Nous vous proposon et choisir des profils adaptés, pévoir et valider un planning avec vou</li>
          <li><span>3</span> Prévoir et valider un planning avec vous</li>
          <li><span>4</span> Suivi des intreventions dans votre espace</li>
        </ul>
      </div>

            </div>
          </div>
      </div>
      );
}

export default Guide;
