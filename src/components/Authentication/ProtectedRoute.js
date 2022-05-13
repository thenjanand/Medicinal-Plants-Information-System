import React,{ useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import {AuthContext} from './AuthProvider'

const ProtectedRoute = ({ component: Component, ...restProps }) => {
	const { user } = useContext(AuthContext);
	return (
		<Route
			{...restProps}
			render={(...props) => {
				return user && user.emailVerified ? (
					<Component {...props} />
				) : (
					<Redirect to="/login" />
				);
			}}
		/>
	);
};

export default ProtectedRoute;
