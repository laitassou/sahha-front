import { NavLink, Link } from 'react-router-dom';
import NavBarLink from './NavbarLink';
import Button from '../Button';
import NavItem from './NavItem';
import { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import NavToggler from './NavToggler';

import AuthContext from '../../../context/AuthContext';
import { useContext } from 'react';


const Navbar = () => {
	const [openNavbar, setOpenNavbar] = useState(false);
	const navRef = useRef(null);
	const containerRef = useRef(null);

	const { user, logoutUser } = useContext(AuthContext);

	const toggleNav = () => {
		setOpenNavbar(!openNavbar);
	};

	useEffect(() => {
		const scrollHandler = () => {
			if (!navRef.current || !containerRef.current) {
				return;
			}
			const navHeight = navRef.current.offsetHeight;
			if (window.pageYOffset > navHeight) {
				containerRef.current.classList.remove('border-b');
				navRef.current.classList.add('border-b', 'shadow-sm');
			} else {
				containerRef.current.classList.add('border-b');
				navRef.current.classList.remove('border-b', 'shadow-sm');
			}
		};
		scrollHandler();
		window.addEventListener('scroll', scrollHandler);
		return () => {
			window.removeEventListener('scroll', scrollHandler);
		};
	}, []);

	function connected() {
		if (user) {
			return (
				<NavItem className="flex items-center justify-center py-6 lg:pl-5 lg:py-0">
					<NavItem>
						<NavBarLink to="/monespace"><Button secondary className="mr-4">
							Mon espace
						</Button></NavBarLink>
					</NavItem>
					<NavItem>
						<Link onClick={logoutUser}>Deconnecter</Link>
					</NavItem>

				</NavItem>
			);
		} else {
			return (
				<NavItem className="flex items-center justify-center py-6 lg:pl-5 lg:py-0">
					<NavItem>
						<NavBarLink to="/login"><Button secondary className="mr-4">
							Se connecter
						</Button></NavBarLink>
					</NavItem>
					<NavItem>
						<NavBarLink to="/signup"><Button to="/signup">Rejoindre</Button></NavBarLink>
					</NavItem>

				</NavItem >
			);
		}
	}

	return (
		<header ref={navRef} className="fixed z-10 w-full h-24 bg-white">
			<div ref={containerRef} className="container flex items-center justify-between h-full border-b">
				<NavLink to="/">
					<img alt="" src="assets/logo-004.png" />
				</NavLink>
				<nav
					className={clsx(
						'fixed left-0 flex transition duration-300 lg:!bg-transparent flex-col items-center w-full pointer-events-none lg:!pointer-events-auto opacity-0 translate-y-10 lg:w-auto lg:h-auto lg:opacity-100 lg:translate-y-0  top-24 h-mobile-nav lg:static',
						{
							'!translate-y-0 opacity-100 !bg-white pointer-events-auto': openNavbar,
						},
					)}
				>
					<ul className="flex flex-col w-full h-full mr-5 text-center lg:h-auto lg:flex-row">
						<NavItem>
							<NavBarLink to="/#agences">Nos agences</NavBarLink>
						</NavItem>
						<NavItem>
							<NavBarLink to="/#services">Nos services</NavBarLink>
						</NavItem>
						<NavItem>
							<NavBarLink to="/#fonctionnment">Fonctionnement</NavBarLink>
						</NavItem>
						<NavItem>
							<NavBarLink to="/#valeurs">Nos valeurs</NavBarLink>
						</NavItem>
						<NavItem>
							<NavBarLink to="/#apropos">A propos</NavBarLink>
						</NavItem>

						{connected()}

					</ul>
				</nav>
				<NavToggler openNavbar={openNavbar} toggleNav={toggleNav} />
			</div>
		</header >
	);
};

export default Navbar;
