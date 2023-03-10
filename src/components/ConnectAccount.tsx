import { Link } from 'react-router-dom';

function ConnectAccount() {
	return (
		<div className="full_height">
			<div className="container">
				<div className="connect_box">
					<h2>
						Rejoignez nous <br />
						<span>on the go</span>
					</h2>
					<div className="button_box">
						<Link className="create_btn" to="/signup">
							Créer votr compte
						</Link>
						<Link className="sign_btn" to="/login">
							Se logger
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
}

export default ConnectAccount;
