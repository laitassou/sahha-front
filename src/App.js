import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './views/Home';
import Navbar from './components/common/Navbar';
import clsx from 'clsx';
import { Footer } from './components/common/Footer';

function App() {
	return (
		<Router>
			<Navbar />
			<main
				className={clsx('pt-24 flex flex-col min-h-screen', {
					'debug-screens': process.env.NODE_ENV === 'development',
				})}
			>
				<Switch>
					<Route component={Home} path="/" exact />
				</Switch>
			</main>
			<Footer />
		</Router>
	);
}

export default App;
