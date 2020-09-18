import React, { Component } from "react";
import "../Dashboard/Dashboard.css";
import { Route, Switch, Link } from "react-router-dom";
import { Layout, Menu, Breadcrumb } from "antd";
import {
  UserOutlined,
  ProfileOutlined,
  SendOutlined,
  AreaChartOutlined,
} from "@ant-design/icons";
import UserCredits from "../UserCredits/UserCredits";
import UserBooking from "../UserBookings/UserBooking";
import UserVoucher from "../UserVouchers/UserVoucher";
import Logout from "../Auth/Logout";
import Flights from "../Flight/Flights";
import Seatings from "../Seatings/Seatings";
import CheckOut from "../CheckOut/CheckOut";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Dashboard = () => {
  return (
    <Layout style={{ height: "720px" }}>
      <Header className="header">
        <div className="logo" />
      </Header>
      <Layout>
        <Sider width={300} className="site-layout-background">
          <Menu
            mode="inline"
            defaultSelectedKeys={[]}
            defaultOpenKeys={["sub1"]}
            style={{ height: "100%", borderRight: 0 }}
          >
            <Menu.Item icon={<AreaChartOutlined />} key="5">
              <Link to="/dashboard">Dashboard</Link>
            </Menu.Item>
            <SubMenu
              key="user"
              icon={<UserOutlined />}
              title="Frequent Flyer Profile"
            >
              <Menu.Item key="1">
                <Link to="/dashboard/frequent_flyer/credits">Credits</Link>
              </Menu.Item>
              <Menu.Item key="2">
                <Link to="/dashboard/frequent_flyer/bookings">Bookings</Link>
              </Menu.Item>
              <Menu.Item key="3">
                <Link to="/dashboard/frequent_flyer/vouchers">Vouchers</Link>
              </Menu.Item>
            </SubMenu>
            <SubMenu key="flight" icon={<SendOutlined />} title="Flights">
              <Menu.Item key="4">
                <Link to="/dashboard/flights">All Flights</Link>
              </Menu.Item>
            </SubMenu>

            <SubMenu key="setting" icon={<ProfileOutlined />} title="Settings">
              <Menu.Item key="6">
                <Link to="/dashboard/logout">Log Out</Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{ padding: "0 24px 24px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 24,
              margin: 0,
              minHeight: 280,
            }}
          >
            <Switch>
              <Route exact path="/dashboard" render={() => <></>} />
              <Route
                path="/dashboard/frequent_flyer/credits"
                component={UserCredits}
              />
              <Route
                path="/dashboard/frequent_flyer/bookings"
                component={UserBooking}
              />
              <Route
                path="/dashboard/frequent_flyer/vouchers"
                component={UserVoucher}
              />
              <Route
                path="/dashboard/checkout/:seatingId"
                component={CheckOut}
              />

              <Route path="/dashboard/logout" component={Logout} />
              <Route path="/dashboard/flights" component={Flights} />
              <Route path="/dashboard/:flightId" component={Seatings} />
            </Switch>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default Dashboard;
