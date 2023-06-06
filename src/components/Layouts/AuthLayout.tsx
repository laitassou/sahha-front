import { BodySection } from 'components/common/BodySection';
import { ReactComponent as Vase } from 'assets/vase.svg';
import { ReactComponent as Portrait } from 'assets/portrait.svg';
import { ReactComponent as RedVase } from 'assets/red-vase.svg';
import { ReactComponent as Lamp } from 'assets/lamp.svg';
import { ReactComponent as Doctor } from 'assets/doctor.svg';
import { ReactComponent as ClientSVG } from 'assets/client.svg';

import { FC, PropsWithChildren } from 'react';
interface Props {
	title: string;
	paragraph: string;
}

const AuthLayout: FC<PropsWithChildren<Props>> = ({ title, paragraph, children }) => {
	return (
		<BodySection>
			<Vase className="absolute left-20 bottom-24" />
			<Lamp className="absolute right-10 bottom-12" />
			<div className="container relative">
				<Portrait className="absolute top-0 left-0" />
				<RedVase className="absolute right-0 top-24" />

				<div className="box-content relative flex flex-col p-8 mx-auto bg-white border shadow-xl md:p-10 border-primary-500/10 rounded-xl w-fit">
					<h3 className="mb-4 text-4xl font-extrabold">{title}</h3>
					<p className="mb-8 text-xl">{paragraph}</p>
					{children}
				</div>
			</div>
		</BodySection>
	);
};

export default AuthLayout;
