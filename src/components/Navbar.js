import { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";
import { useLocation } from "react-router-dom";
import { useContext } from "react";

const Navbar = () => {
   const { user, logoutUser } = useContext(AuthContext);
  // function Client(props) {
  //   return (
  //     <>
  //       <Link to="/">Home</Link> <br />
  //       <Link to="/annonces">Page Annonces</Link> <br />
  //       <Link to="/list-annonces">Page Annonces</Link> <br />
  //       <button onClick={logoutUser}>Logout</button>
  //     </>
  //   );
  // }

  // function Worker(props) {
  //   return (
  //     <>
  //       <Link to="/">Home</Link> <br />
  //       <Link to="/protected">Intervenant</Link> <br />
  //       <button onClick={logoutUser}>Logout</button>
  //     </>
  //   );
  // }

  // function Manager(props) {
  //   return (
  //     <>
  //       <Link to="/">Home</Link> <br />
  //       <Link to="/protected">Gerant</Link> <br />
  //       <button onClick={logoutUser}>Logout</button>
  //     </>
  //   );
  // }

  // function out_links() {
  //   if (user) {
  //     if (user.role === "Client") {
  //       return Client();
  //     } else if (user.role === "Worker") {
  //       return Worker();
  //     } else if (user.role === "Manager") {
  //       return Manager();
  //     } else {
  //     }
  //   } else {
  //     return (
  //       <>
  //         <Link to="/login">Login</Link>
  //         <Link to="/register">Register</Link>
  //       </>
  //     );
  //   }
  // }


  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname.split("/");

  const [isActive, setIsActive] = useState(false);

  const handleClick = (event) => {
    setIsActive((current) => !current);
  };


  function connected(){
    if (user) {
      return (
        <div>
        <ul className="navbar-nav navbar_right">
        <li className="nav-item">
          <Link to="/monespace">
            <span className="desk_text_sign">Mon espace</span>
          </Link>
        </li>
        <li className="nav-item">
          <Link
            to="/"
            className="btn btn-primary started_btn"
            type="button"
            onClick={logoutUser}
          >
            Logout
          </Link>
        </li>
        </ul>
      </div>
      );
    }
    else {
      return (
        <div>
        <ul className="navbar-nav navbar_right">
        <li className="nav-item">
          <NavLink
            className={splitLocation[1] === "nav-link" ? "active" : ""}
            to="/login"
          >
            <span className="desk_text_sign">Sign in</span>
            <img src="login.svg" alt="" className="mobile_icon"></img>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink
            to="/login"
            className="btn btn-primary started_btn"
            type="button"
          >
            Get Started
          </NavLink>
        </li>
        </ul>
      </div>
      );
    }
  }
  
  return (
    <nav className="navbar navbar-expand-sm">
      <div className="container">
        <div className="navbar_box">
          <NavLink className="navbar-brand" to="">
            <span className="desk_text">Logo name</span>
            {/* <img className="mobile_logo" alt="" src="mobile_logo.svg" /> */}
          </NavLink>

          <div className="collapse navbar-collapse" id="collapsibleNavbar">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className={splitLocation[1] === "nav-link" ? "active" : ""}
                  to="/agences"
                >
                  Nos agences
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={splitLocation[1] === "nav-link" ? "active" : ""}
                  to="/services"
                >
                  Nos services
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className={splitLocation[1] === "nav-link" ? "active" : ""}
                  to="/entreprise"
                >
                  A propos
                </NavLink>
              </li>
            </ul>
          </div>

          {connected()}

          <div className="toggle_navbar">
            <button
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapsibleNavbar"
              className={
                isActive ? "showicon navbar-toggler" : "navbar-toggler"
              }
              onClick={handleClick}
            >
              <span className="top_bord"></span>
              <span className="mid_bord"></span>
              <span className="btm_bord"></span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
