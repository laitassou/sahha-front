import clsx from 'clsx';
import { FC, HTMLAttributes } from 'react';

const NavItem: FC<HTMLAttributes<HTMLLIElement>> = ({ children, className, ...rest }) => {
	return (
		<li className={clsx('flex-1 border-b border-dashed lg:border-none lg:flex-none', className)} {...rest}>
			{children}
		</li>
	);
};

export default NavItem;
