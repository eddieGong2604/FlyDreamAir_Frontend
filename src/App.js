import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { apiUrl } from "./config.json";

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
import AdminDashboard from "./components/AdminDashboard/AdminDashboard";
import Logout from "./components/Auth/Logout";
import { Helmet } from "react-helmet";

const App = () => {
  const [user, setAuth] = useState("");

  const getCurrentUser = async () => {
    await Axios.get(`${apiUrl}/api/user/info`)
      .then((res) => setAuth(res.data))
      .catch((res) => setAuth(null));
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>FlyDreamAir</title>
        <link rel="canonical" href="http://mysite.com/example" />
        <link
          rel="icon"
          href="https://www.clipartmax.com/png/small/211-2114113_freight-forwarding-airplane-icon-transparent-background.png"
        />
      </Helmet>
      <div className="content">
        <Switch>
          <ProtectedRoute
            path="/dashboard"
            render={() => <Dashboard user={user} />}
          />
          <ProtectedRoute
            path="/admin"
            render={() => <AdminDashboard user={user} />}
          />
          <Route
            path="/"
            render={() => {
              if (!user) return <Home />;
              else if (user.roles[0].id === 1) {
                window.location = "/dashboard";
              } else {
                window.location = "/admin";
              }
            }}
          />
        </Switch>
      </div>
    </div>
  );
};

export default App;
