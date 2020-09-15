import React from "react";
import "./App.css";
import SignUpComponent from "./components/Auth/SignUpComponent";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import LoginComponent from "./components/Auth/LoginComponent";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard/Dashboard";

function App() {
  return (
    <div>
      <div className="content">
        <Switch>
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
