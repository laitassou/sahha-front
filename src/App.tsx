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
						<Route component={Register} path="/register" />
						<Route component={ProtectedPage} path="/monespace" />
						<Route component={Annonce} path="/annonces" />
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
