import clsx from 'clsx';
const BodySection = ({ children, id, className }) => {
	return (
		<section id={id} className={clsx('pt-28 pb-14', className)}>
			{children}
		</section>
	);
};

export { BodySection };
