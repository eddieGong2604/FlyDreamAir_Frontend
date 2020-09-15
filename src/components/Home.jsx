import React, { Component } from "react";
import { Tabs } from "antd";
import LoginComponent from "./Auth/LoginComponent";
import SignUpComponent from "./Auth/SignUpComponent";

const { TabPane } = Tabs;

const callback = (key) => {
  console.log(key);
};

const tabStyle = {
  width: "60%",
  height: "100%",
  position: "fixed",
  top: "30%",
  left: "30%",
  marginTop: "-100px",
  marginLeft: "-100px",
};

const Home = () => (
  <Tabs defaultActiveKey="1" onChange={callback} style={tabStyle}>
    <TabPane tab="Log In" key="1">
      <LoginComponent />
    </TabPane>
    <TabPane tab="Sign Up" key="2">
      <SignUpComponent />
    </TabPane>
  </Tabs>
);

export default Home;
