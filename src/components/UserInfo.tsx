import { FC } from 'react';

interface Props {
	user: {
		username: string;
	};
}
export const UserInfo: FC<Props> = ({ user }) => {
	return (
		<div>
			<h1>Hello, {user.username}</h1>
		</div>
	);
};
