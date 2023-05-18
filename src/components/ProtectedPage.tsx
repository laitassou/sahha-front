import { Link } from 'react-router-dom';
import SectionTitle from 'components/common/SectionTitle';

const ProtectedPage = () => {
	const auth = localStorage.getItem('authTokens') as string;
	const auth_json = JSON.parse(auth);

	function Client() {
		return (
			<>
				<br />
				<Link to="/annonces"><SectionTitle title="Publier mon annonce"> </SectionTitle></Link> <br />
				<Link to="/list-annonces"><SectionTitle title="Voir mes annonces"></SectionTitle></Link> <br />
			</>
		);
	}

	function Worker() {
		return (
			<>
				<br />
				<Link to="/specialite" > <SectionTitle title="Publier mes disponibiltés"></SectionTitle></Link > <br />
				<Link to="/list-annonces"><SectionTitle title="Voir mes disponibiltés"></SectionTitle></Link> <br />

			</>
		);
	}

	function Manager() {
		return (
			<>
				<br />
				<Link to="/list-members/clients" > <SectionTitle title="Lister les clients"></SectionTitle></Link > <br />
				<Link to="/list-members/prestataires"> <SectionTitle title="Lister les prestataires"></SectionTitle></Link> <br />
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
