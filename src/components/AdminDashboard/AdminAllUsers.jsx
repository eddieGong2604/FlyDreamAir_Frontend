import React from "react";
import { Link, Route, Switch } from "react-router-dom";

import { Table, Tag, Space, Button, PageHeader } from "antd";
const { Column, ColumnGroup } = Table;
const AdminAllUsers = ({ allUsers }) => {
  return (
    <div style={{ margin: 20 }}>
      <PageHeader
        ghost={false}
        onBack={() => (window.location.href = "/admin")}
        title="System User"
      ></PageHeader>
      <Table dataSource={allUsers}>
        <Column title="Account Id" dataIndex="accountId" key="accountId" />
        <Column title="FFPoints" dataIndex="ffpoints" key="ffpoints" />
        <Column title="Name" dataIndex="name" key="name" />
        <Column
          title="Passport Number"
          dataIndex="passportNumber"
          key="passportNumber"
        />
        <Column title="Status" dataIndex="status" key="status" />
        <Column title="Username" dataIndex="username" key="username" />

        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Link to={`/admin/user?id=${record.accountId}`}>
              <Button>Modify</Button>
            </Link>
          )}
        />
      </Table>
    </div>
  );
};

export default AdminAllUsers;
