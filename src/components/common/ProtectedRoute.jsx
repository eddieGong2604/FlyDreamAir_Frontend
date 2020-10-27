import useSelection from "antd/lib/table/hooks/useSelection";
import React, { useEffect, useState } from "react";
import { Route, Redirect } from "react-router-dom";
import auth from "../../services/authService";
import httpService from "../../services/httpService";

const ProtectedRoute = ({
  path,
  component: Component,
  render,
  user,
  ...rest
}) => {
  const [isAuth, setAuth] = useState(true);

  useEffect(() => {
    console.log(user);
    if (window.localStorage.getItem("isLoggedIn")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, []);

  return (
    <Route
      {...rest}
      render={(props) => {
        if (!isAuth)
          return (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location },
              }}
            />
          );

        return Component ? <Component {...props} /> : render(props);
      }}
    />
  );
};

export default ProtectedRoute;
