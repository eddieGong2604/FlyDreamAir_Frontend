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
import UserEnquiries from "../Enquiry/UserEnquiries";

import Logo from "../../img/FlyDream_Air_logo.png";
const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;
const Dashboard = ({ user }) => {
  return (
    <Layout style={{ height: "1024px" }}>
      <Header className="header">
        <img src={Logo} width={200} height={30} />
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

              <Menu.Item key="4">
                <Link to="/dashboard/frequent_flyer/enquiries">Enquiries</Link>
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
        <Layout style={{ padding: "0 3px 3px" }}>
          <Content
            className="site-layout-background"
            style={{
              padding: 50,
              margin: 0,
              minHeight: 1000,
            }}
          >
            <Switch>
              <Route
                exact
                path="/dashboard"
                render={() => (
                  <div>
                    <h1>Hello {user.name}!</h1>
                    <p>Welcome to FlyDreamAir Frequent Flyer Program</p>
                    <p>
                      One of the key factors making FlyDreamAir a leading
                      business intelligence for almost 20 years is our generous
                      Frequent Flyer System.
                    </p>
                    <p>Here are the few takeaways to get around:</p>
                    <ul>
                      <li>
                        You can check your credits, vouchers, booking, also make
                        enquiries for us in Frequent Flyer Profile category
                      </li>
                      <li>
                        Flights are ready to be booked under the Flights
                        category{" "}
                      </li>
                    </ul>

                    <p>
                      If you have any questions, feel free to send us a message
                      via the Enquiries section under Frequent Flyer Profile, or
                      meet us in person at our branch in these countries:
                    </p>
                    <div class="gallery">
                      <img
                        src="https://cdn.pixabay.com/photo/2013/07/18/14/59/sydney-opera-house-164224_640.jpg"
                        alt="Cinque Terre"
                        width="600"
                        height="400"
                      />
                      <div class="desc">Australia </div>
                    </div>

                    <div class="gallery">
                      <img
                        src="https://en.dangcongsan.vn/DATA/3/2020/08/ha_long-00_10_58_354.jpeg"
                        alt="Forest"
                        width="600"
                        height="400"
                      />
                      <div class="desc">Vietnam</div>
                    </div>

                    <div class="gallery">
                      <img
                        src="https://res.klook.com/image/upload/fl_lossy.progressive/q_auto/f_auto/c_fill/blogen/2018/07/image3-7.jpg"
                        alt="Northern Lights"
                        width="600"
                        height="400"
                      />
                      <div class="desc">United Kingdom </div>
                    </div>
                    <div class="gallery">
                      <img
                        src="https://www.shusterman.com/images/government-shutdown.png"
                        alt="Northern Lights"
                        width="600"
                        height="400"
                      />
                      <div class="desc">USA </div>
                    </div>
                  </div>
                )}
              />
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
                path="/dashboard/frequent_flyer/enquiries"
                component={UserEnquiries}
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
