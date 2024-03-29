import { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import { useLocation } from 'react-router-dom';
import { useContext } from 'react';

const Navbar = () => {
	const { user, logoutUser } = useContext(AuthContext);

	const location = useLocation();

	//destructuring pathname from location
	const { pathname } = location;

	//Javascript split method to get the name of the path in array
	const splitLocation = pathname.split('/');

	const [isActive, setIsActive] = useState(false);

	const handleClick = () => {
		setIsActive((current) => !current);
	};

	function connected() {
		if (user) {
			return (
				<ul className="navbar-nav navbar_right">
					<li className="nav-item">
						<Link to="/monespace">
							<span className="desk_text_sign">Mon espace</span>
						</Link>
					</li>
					<li className="nav-item">
						<Link to="/" className="btn btn-primary started_btn" type="button" onClick={logoutUser}>
							Deconnecter
						</Link>
					</li>
				</ul>
			);
		} else {
			return (
				<ul className="navbar-nav navbar_right">
					<li className="nav-item">
						<NavLink className={splitLocation[1] === 'nav-link' ? 'active' : ''} to="/login">
							Se connecter
						</NavLink>
					</li>
					<li className="nav-item">
						<NavLink to="/signup" className="btn btn-primary started_btn" type="button">
							Rejoindre
						</NavLink>
					</li>
				</ul>
			);
		}
	}

	return (
		<nav className="navbar navbar-expand-sm">
			<div className="container">
				<div className="navbar_box">
					<NavLink className="navbar-brand" to="">
						{<img className="mobile_logo" alt="" src="assets/logo-004.png" />}
					</NavLink>

					<div className="navbar-collapse" id="collapsibleNavbar">
						<ul className="navbar-nav">
							<li className="nav-item">
								<NavLink className={splitLocation[1] === 'nav-link' ? 'active' : ''} to="/agences">
									Nos agences
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className={splitLocation[1] === 'nav-link' ? 'active' : ''} to="/services">
									Nos services
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className={splitLocation[1] === 'nav-link' ? 'active' : ''} to="/howto">
									Fonctionnement
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className={splitLocation[1] === 'nav-link' ? 'active' : ''} to="/valeurs">
									Nos valeurs
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink className={splitLocation[1] === 'nav-link' ? 'active' : ''} to="/entreprise">
									A propos
								</NavLink>
							</li>
						</ul>
					</div>

					{connected()}

					<div className="toggle_navbar">
						<button
							type="button"
							data-bs-toggle="collapse"
							data-bs-target="#collapsibleNavbar"
							className={isActive ? 'showicon navbar-toggler' : 'navbar-toggler'}
							onClick={handleClick}
						>
							<span className="top_bord"></span>
							<span className="mid_bord"></span>
							<span className="btm_bord"></span>
						</button>
					</div>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
