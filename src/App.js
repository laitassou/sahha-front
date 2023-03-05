import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/common/Navbar';
import clsx from 'clsx';
import { Footer } from './components/common/Footer';

import PrivateRoute from "./utils/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import ProtectedPage from "./components/ProtectedPage";

import Annonces from "./components/annonces";
import ListAnnonces from "./components/listannonces";
import SingleAnnonce from "./components/singleannonce";

import ConnectAccount from "./components/ConnectAccount";
import LoginPage from "./components/LoginPage";
import Signup from "./components/Signup";


function App() {
	return (
		<Router>
			<AuthProvider>
				<Navbar />
				<main
					className={clsx('pt-24 flex flex-col min-h-screen', {
						'debug-screens': process.env.NODE_ENV === 'development',
					})}
				>
					<Switch>
						<Route component={Home} path="/" exact />
						<Route component={LoginPage} path="/login" />
						<Route component={Signup} path="/signup" />
						<Route component={ProtectedPage} path="/monespace" />
						<Route component={Annonces} path="/annonces" />
						<Route component={ListAnnonces} path="/list-annonces/" exact />
						<Route component={SingleAnnonce} path="/annonce/:id/" exact />
					</Switch>
				</main>
			</AuthProvider>
			<Footer />
		</Router>
	);
}

export default App;
