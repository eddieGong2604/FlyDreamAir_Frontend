import React, { useEffect, useState } from "react";
import "./App.css";
import SignUpComponent from "./components/Auth/SignUpComponent";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import "font-awesome/css/font-awesome.css";
import {
  BrowserRouter as Router,
  Link,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import LoginComponent from "./components/Auth/LoginComponent";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";
import authService from "./services/authService";
import ProtectedRoute from "./components/common/ProtectedRoute";

const App = () => {
  const [isAuth, setAuth] = useState("");
  useEffect(() => {
    setAuth(localStorage.getItem("isLoggedIn"));
  }, []);
  return (
    <div>
      <div className="content">
        <Switch>
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <Route
            path="/"
            render={() => {
              if (!isAuth) return <Home />;
              else {
                window.location = "/dashboard";
              }
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
