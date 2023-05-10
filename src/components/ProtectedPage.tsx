import { Link } from 'react-router-dom';
import SectionTitle from 'components/common/SectionTitle';

const ProtectedPage = () => {
	const auth = localStorage.getItem('authTokens') as string;
	const auth_json = JSON.parse(auth);

	function Client() {
		return (
			<>
				<Link to="/annonces"><SectionTitle title="Publier votre annonces"> </SectionTitle></Link> <br />
				<Link to="/list-annonces"><SectionTitle title="Voir vos annonces"></SectionTitle></Link> <br />
			</>
		);
	}

	function Worker() {
		return (
			<>
				<Link to="/">Home</Link> <br />
				<Link to="/protected">Intervenant</Link> <br />
			</>
		);
	}

	function Manager() {
		return (
			<>
				<Link to="/">Home</Link> <br />
				<Link to="/protected">Gerant</Link> <br />
			</>
		);
	}

	function out_links() {
		if (auth_json) {
			if (auth_json.role === 'Client') {
				return Client();
			} else if (auth_json.role === 'Worker') {
				return Worker();
			} else if (auth_json.role === 'Manager') {
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
