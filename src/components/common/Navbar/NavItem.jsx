import clsx from 'clsx';

const NavItem = ({ children, className }) => {
	return <li className={clsx('flex-1 border-b border-dashed lg:border-none lg:flex-none', className)}>{children}</li>;
};

export default NavItem;
