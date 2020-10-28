import React, { Component } from "react";
import { Tabs } from "antd";
import LoginComponent from "./Auth/LoginComponent";
import SignUpComponent from "./Auth/SignUpComponent";
import AdminSignup from "./AdminSignupComponent/AdminSignup";
import BACKGROUND from "../img/back.jpg";

const { TabPane } = Tabs;
const callback = (key) => {};

const tabStyle = {
  width: "60%",
  height: "100%",
  position: "fixed",
  top: "30%",
  left: "30%",
  marginTop: "-100px",
  marginLeft: "-100px",
};

const Home = () => {
  return (
    <div style={{backgroundImage: `url(${BACKGROUND})` ,maxHeight: "100vh",

    backgroundRepeat: "no-repeat",
    backgroundAttachment: "fixed",
    backgroundPosition: "left top",
    backgroundSize: "cover"


}}>
      <div style={{width:"100vw" ,height: "100vh"}}></div>
      <Tabs defaultActiveKey="1" onChange={callback} style={tabStyle}>
        <TabPane tab="Log In" key="1">
          <LoginComponent />
        </TabPane>
        <TabPane tab="Sign Up" key="2">
          <SignUpComponent />
        </TabPane>
        <TabPane tab="Admin Application" key="3">
          <AdminSignup />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default Home;
