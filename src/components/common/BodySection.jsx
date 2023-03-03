import clsx from 'clsx';
const BodySection = ({ children, id, className }) => {
	return (
		<section id={id} className={clsx('pb-40', className)}>
			{children}
		</section>
	);
};

export { BodySection };
