import { Link } from 'react-router-dom';
import SectionTitle from 'components/common/SectionTitle';
import ListAnnonces from 'components/ListAnnonces';
import ListClients from './ListClients';
import { BodySection } from 'components/common/BodySection';

import Profil from 'components/Profil';

const ProtectedPage = () => {
	const auth = localStorage.getItem('authTokens') as string;
	const auth_json = JSON.parse(auth);

	function Client() {
		return (
			<>
				<div className="announce_box overflow">
					<br />
					<Link to="/annonces"><SectionTitle title="Publier une nouvelle annonce"> </SectionTitle></Link>
					<div className="announce_box overflow">
						<div className="flex flex-row">
							<div className="basis-3/5">
								<ListAnnonces />
							</div>
							<div className="basis-2/5">
								<Profil />
							</div>
						</div>
					</div>
				</div >
			</>
		);
	}

	function Worker() {
		return (
			<>
				<div className="announce_box overflow">
					<br />
					<Link to="/annonces"><SectionTitle title="Publier une nouvelle annonce"> </SectionTitle></Link>
					<div className="announce_box overflow">
						<div className="flex flex-row">
							<div className="basis-3/5">
								<ListAnnonces />
							</div>
							<div className="basis-2/5">
								<Profil />
							</div>
						</div>
					</div>
				</div >
			</>
		);
	}

	function Manager() {
		return (
			<>
				<div className="announce_box overflow">
					<br />
					<Link to="/annonces"><SectionTitle title="Publier une nouvelle annonce"> </SectionTitle></Link>
					<div className="announce_box overflow">
						<div className="flex flex-row">
							<div className="basis-3/5">
								<ListClients type={"clients"} />
								<ListClients type={"prestataires"} />
							</div>

							<div className="basis-2/5">
								<Profil />
							</div>
						</div>
					</div>
				</div >
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
