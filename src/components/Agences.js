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
        <div className="container">
          <div className="announce_box">
          <div className="connect_box announce_box">
            <h2>Nos agences</h2>
          </div>
            <div className="login_form form_box">

              <table>
                <tbody>
                  {agences.length && agences.map(agence => <tr key="{agence.id}"> <td>{agence.city}</td><td>{agence.name}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    

}

export default Agences;

