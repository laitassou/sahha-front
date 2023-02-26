import React, { useState, useEffect} from 'react'

const Agences = () => {

    let getAgences = async () => {
      let response = await fetch("http://127.0.0.1:8000/api/agences/", {
        headers: {
          "Content-Type": "application/json",
         
        }
      })
      let data = await response.json()
      setAgencesData(data)
    }
    let [agences, setAgencesData] = useState([])

      useEffect(() => {
        getAgences()
    }, [])




      return (
        <div className="full_height">
          <div className="container">
            <div className="announce_box">
            <div className="connect_box announce_box">
              <h2>Nos agences</h2>
            </div>
              <div className="login_form form_box">

                <table class ="styled-table">
                <thead>
                    <tr>
                       <th>Nom</th>
                       <th>Ville</th>
                       <th>Addresse</th>
                    </tr>
                  </thead>
                  <tbody>
                    {agences.length && agences.map(agence => <tr key="{agence.id}"> <td>{agence.name}</td><td>{agence.city}</td><td>{agence.address}</td></tr>)}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      );
    

}

export default Agences;

