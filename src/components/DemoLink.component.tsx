import { FC, Fragment, PropsWithChildren } from 'react';

const DemoLink: FC<PropsWithChildren> = ({ children }) => {
	return (
		<Fragment>
			<div style={{ marginBottom: 10 }}></div>
			{children ? <div style={{ marginBottom: 10 }}>{children}</div> : null}
		</Fragment>
	);
};

export default DemoLink;
