import React, { useState, useEffect, useContext} from 'react'
import { Link } from "react-router-dom";

const Services = () => {

    let getCategories = async () => {
      let response = await fetch("http://127.0.0.1:8000/api/categories/", {
        headers: {
          "Content-Type": "application/json",
         
        }
      })
      let data = await response.json()
      setCategorieData(data)
    }
    let [categories, setCategorieData] = useState([])

      useEffect(() => {
        getCategories()
    }, [])




      return (
        <div className="container">
          <div className="announce_box">
          <div className="connect_box announce_box">
            <h2>Nos services</h2>
          </div>
            <div className="login_form form_box">

              <table>
                <tbody>
                  {categories.length && categories.map(cat => <tr key="{cat.id}"> <td>{cat.id}</td><td>{cat.name}</td></tr>)}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      );
    

}

export default Services;
