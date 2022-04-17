import {  useContext } from "react";
import { Route, Redirect, RouteProps } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { auth } from "../../firebase";

type PropsPrivatRoute = {
  component: React.ElementType;
};

export const PrivateRoute = ({
  component: Component,
  ...restProps
}: RouteProps & PropsPrivatRoute) => {
  const currentUser = useContext(AuthContext);
  return (
    <Route
      {...restProps}
      render={(props) =>
        currentUser ? (
          <>
            <Component {...props} />
            <button className="signout" onClick={() => auth.signOut()}>SignOut</button>
          </>
        ) : (
          <Redirect to="/register" />
        )
      }
    />
  );
};