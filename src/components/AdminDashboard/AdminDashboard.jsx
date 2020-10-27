import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Logout from "../Auth/Logout";
import { apiUrl } from "../../config.json";
import { Table, Tag, Space, Button } from "antd";
import { PageHeader, Tabs, Descriptions } from "antd";

import AdminAllUsers from "./AdminAllUsers";
import User from "./User";
import Enquiries from "./Enquiries";
import Enquiry from "./Enquiry";
import AdminRewards from "./AdminRewards";
const { Column, ColumnGroup } = Table;
const { TabPane } = Tabs;

const AdminDashboard = ({ user }) => {
  const [allUsers, setAllUsers] = useState([]);

  const renderContent = (column = 2) => (
    <Descriptions size="small" column={column}>
      <Descriptions.Item label="Current Admin">{user.name}</Descriptions.Item>
      <Descriptions.Item label="Email">{user.username}</Descriptions.Item>
    </Descriptions>
  );

  const Content = ({ children, extra }) => {
    return (
      <div className="content">
        <div className="main">{children}</div>
        <div className="extra">{extra}</div>
      </div>
    );
  };

  const getAllUsers = async () => {
    await Axios.get(`${apiUrl}/api/user/allUser`)
      .then((res) => setAllUsers(res.data))
      .catch((res) => setAllUsers(null));
  };

  useEffect(() => {
    getAllUsers();
  }, []);

  return (
    <div>
      <PageHeader
        className="site-page-header-responsive"
        title="FlyDreamAir"
        subTitle="Administration"
        extra={[
          <Button key="1" type="primary">
            <Link to="/admin/logout">Log Out</Link>
          </Button>,
        ]}
        footer={
          <div>
            <Button type="dashed" style={{ margin: "10px" }}>
              <Link to="/admin">Home</Link>
            </Button>
            <Button type="dashed" style={{ margin: "10px" }}>
              <Link to="/admin/users">User Database</Link>
            </Button>

            <Button type="dashed" style={{ margin: "10px" }}>
              <Link to="/admin/enquiries">Enquiries</Link>
            </Button>

            <Button type="dashed" style={{ margin: "10px" }}>
              <Link to="/admin/reward">Reward</Link>
            </Button>
          </div>
        }
      >
        <Content extra={<></>}>{renderContent()}</Content>
      </PageHeader>
      <Switch>
        <Route
          path="/admin/users"
          exact
          render={(props) => <AdminAllUsers {...props} allUsers={allUsers} />}
        />
        <Route path="/admin/logout" component={Logout} />
        <Route path="/admin/user" render={(props) => <User {...props} />} />
        <Route
          path="/admin/enquiry"
          render={(props) => <Enquiry {...props} />}
        />
        <Route
          path="/admin/enquiries"
          render={(props) => <Enquiries {...props} />}
        />

        <Route
          path="/admin/reward"
          render={(props) => <AdminRewards {...props} />}
        />
      </Switch>
    </div>
  );
};

export default AdminDashboard;
