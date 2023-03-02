import { useContext } from 'react';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';

const ProtectedPage = () => {
	const { user, logoutUser } = useContext(AuthContext);
	function Client(props) {
		return (
			<>
				<Link to="/annonces">Publier votre annonces</Link> <br />
				<Link to="/list-annonces">Voir vos annonces</Link> <br />
			</>
		);
	}

	function Worker(props) {
		return (
			<>
				<Link to="/">Home</Link> <br />
				<Link to="/protected">Intervenant</Link> <br />
			</>
		);
	}

	function Manager(props) {
		return (
			<>
				<Link to="/">Home</Link> <br />
				<Link to="/protected">Gerant</Link> <br />
			</>
		);
	}

	function out_links() {
		if (user) {
			if (user.role === 'Client') {
				return Client();
			} else if (user.role === 'Worker') {
				return Worker();
			} else if (user.role === 'Manager') {
				return Manager();
			} else {
			}
		}
	}

	return (
		<nav>
			<div className="full_height">
				<div className="container">
					<div className="connect_box announce_box personal-space">{out_links()}</div>
				</div>
			</div>
		</nav>
	);
};

export default ProtectedPage;
