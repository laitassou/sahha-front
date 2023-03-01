import React from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
// import Home from "./views/homePage";
// import Login from "./views/loginPage";
// import Register from "./views/registerPage";
import ProtectedPage from "./views/ProtectedPage";

import Annonces from "./components/annonces";
import ListAnnonces from "./components/listannonces";
import SingleAnnonce from "./components/singleannonce";

import ConnectAccount from "./components/ConnectAccount";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";
import Agences from "./components/Agences"
import Services from "./components/Services"
import Entreprise from  "./components/Entreprise"
import Guide from  "./components/howto"
import Valeurs from  "./components/valeurs"



function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <AuthProvider>
          <Navbar />

          <Switch>
            {/* <PrivateRoute component={ProtectedPage} path="/protected" exact /> */}
            {/* <Route component={Login} path="/login" /> */}
            {/* <Route component={Register} path="/register" /> */}
            {/* <Route component={Annonces} path="/annonces" /> */}
            {/* <Route component={ListAnnonces} path="/list-annonces" exact /> */}

            {/* <Route component={Home} path="/" /> */}

            <Route component={Entreprise} path="/entreprise" />
            <Route component={Guide} path="/howto" />
            <Route component={Valeurs} path="/valeurs" />
            <Route component={Agences} path="/agences" />
            <Route component={Services} path="/services" />
            <Route component={ConnectAccount} path="/" exact />
            <Route component={LoginPage} path="/login" />
            <Route component={Signup} path="/signup" />
            <Route component={ProtectedPage} path="/monespace" /> 
            <Route component={Annonces} path="/annonces" />
            <Route component={ListAnnonces} path="/list-annonces/" exact /> 
            <Route component={SingleAnnonce} path="/annonce/:id/" exact /> 
          </Switch>
        </AuthProvider>
 
        { <Footer /> }
      </div>
    </Router>
  );
}

export default App;
