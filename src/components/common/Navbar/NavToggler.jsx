import clsx from 'clsx';
const NavToggler = ({ openNavbar, toggleNav }) => {
	return (
		<div
			className="flex flex-col justify-between flex-shrink-0 w-8 h-6 cursor-pointer lg:hidden lg:pointer-events-none"
			onClick={toggleNav}
		>
			<div
				className={clsx('h-0.5 bg-black w-full transition duration-300 origin-right', {
					'-rotate-45': openNavbar,
				})}
			></div>
			<div
				className={clsx('h-0.5 transition duration-300 bg-black w-full', {
					'-translate-x-1 opacity-0': openNavbar,
				})}
			></div>
			<div
				className={clsx('h-0.5 bg-black w-full transition duration-300 origin-right', {
					'rotate-45': openNavbar,
				})}
			></div>
		</div>
	);
};

export default NavToggler;
