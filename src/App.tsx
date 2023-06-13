import { BrowserRouter as Router, Route, Switch, useLocation } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/common/Navbar';
import clsx from 'clsx';
import { Footer } from './components/common/Footer';
import { AuthProvider } from './context/AuthContext';
import ProtectedPage from './components/ProtectedPage';
import ListAnnonces from './components/ListAnnonces';
import SingleAnnonce from './components/SingleAnnonce';
import { Login } from 'views/Login';
import { Register } from 'views/Register';
import { Annonce } from 'views/Annonce';
import { Availability } from 'views/Availability';

import ListClients from './components/ListClients';
import ListSlots from './components/ListSlots';


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
						<Route component={Login} path="/login" />
						<Route component={Register} path="/signup" />
						<Route component={ProtectedPage} path="/monespace" />
						<Route component={Annonce} path="/annonces" />
						<Route component={Availability} path="/specialite" />
						<Route component={ListAnnonces} path="/list-annonces/:id?" />
						<Route component={SingleAnnonce} path="/annonce/:id/" exact />

						<Route component={ListClients} path="/list-members/:type/" exact />
						<Route component={ListClients} path="/list-members/:type/" exact />

						<Route component={ListAnnonces} path="/slot/intervenant/:id/" />

						<Route component={ListSlots} path="/worker/slots/:id/" exact />
					</Switch>
				</main>
			</AuthProvider>
			<Footer />
		</Router>
	);
}

export default App;
