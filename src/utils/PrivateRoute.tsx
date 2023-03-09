import { Route, Redirect, RouteProps } from 'react-router-dom';
import { FC, PropsWithChildren, useContext } from 'react';
import AuthContext from '../context/AuthContext';

const PrivateRoute: FC<PropsWithChildren<RouteProps>> = ({ children, ...rest }) => {
	let { user } = useContext(AuthContext);
	return <Route {...rest}>{!user ? <Redirect to="/login" /> : children}</Route>;
};

export default PrivateRoute;
