import { useContext } from "react";
import { Link } from "react-router-dom";
import AuthContext from "../context/AuthContext";



const Navbar = () => {
  const { user, logoutUser } = useContext(AuthContext);
  function Client(props) {
    return          (   <>
      <Link to="/">Home</Link> <br/>
      <Link to="/annonces">Page Annonces</Link>  <br/>
      <button onClick={logoutUser}>Logout</button>
    </>);
  }
  
  function Worker(props) {
    return          (   <>
      <Link to="/">Home</Link> <br/>
      <Link to="/protected">Intervenant</Link>  <br/>
      <button onClick={logoutUser}>Logout</button>
    </>);
  }
  
  function Manager(props) {
    return          (   <>
    <Link to="/">Home</Link> <br/>
    <Link to="/protected">Gerant</Link> <br/>
    <button onClick={logoutUser}>Logout</button>
  </>);
  }


  function out_links() {
    if (user) {
      if (user.role === 'Client') {
        return Client()
      } else if (user.role === 'Worker') {
        return Worker()
      } else if (user.role === 'Manager') {
        return Manager()
      } else
      {

      }
    }else {
        return  (
          <>
            <Link to="/login">Login</Link>
            <Link to="/register">Register</Link>
          </>
        )
    }
    
  }

  return (
    <nav>
      <div>
        <h1>App Name</h1>
        <div>
          {out_links()}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;