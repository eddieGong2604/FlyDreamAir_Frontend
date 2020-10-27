import React, { Component, useRef, useState } from "react";
import { Form, Input, Button, Checkbox, Tabs } from "antd";
import Axios from "axios";
import { apiUrl } from "../../config.json";
import { PageHeader } from "antd";
import RewardIndividual from "./RewardIndividual";
import RewardAll from "./RewardAll";
const { TabPane } = Tabs;

const AdminRewards = () => {
  return (
    <div style={{ margin: 20 }}>
      <PageHeader
        ghost={false}
        onBack={() => window.history.back()}
        title={"Rewards"}
      ></PageHeader>

      <Tabs defaultActiveKey="1">
        <TabPane tab="Individual" key="1">
          <RewardIndividual />
        </TabPane>
        <TabPane tab="All System Users" key="2">
          <RewardAll />
        </TabPane>
      </Tabs>
    </div>
  );
};

export default AdminRewards;
