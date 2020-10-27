import { Button, PageHeader, Table } from "antd";
import Column from "antd/lib/table/Column";
import Axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { apiUrl } from "../../config.json";

import { Link } from "react-router-dom";
const Enquiries = () => {
  const [enquiries, setEnquiries] = useState([]);

  const getEnqs = async () => {
    await Axios.get(`${apiUrl}/api/enquiry/admin/allEnquiries`)
      .then((res) => {
        console.log(res.data);
        setEnquiries(res.data);
      })
      .catch((res) => setEnquiries(null));
  };
  useEffect(() => {
    getEnqs();
  }, []);
  return (
    <div style={{ margin: 20 }}>
      <PageHeader
        ghost={false}
        onBack={() => (window.location.href = "/admin")}
        title="Enquiries"
      ></PageHeader>

      <Table dataSource={enquiries}>
        <Column title="Enquiry Id" dataIndex="enquiryId" key="enquiryId" />
        <Column
          title="From"
          key="from"
          render={(text, record) => <>{record.from.username}</>}
        />{" "}
        <Column title="Subject" dataIndex="subject" key="subject" />
        <Column
          title="Status"
          key="status"
          render={(text, record) => (
            <> {record.status ? "Solved" : "Unsolved"}</>
          )}
        />
        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Link to={`/admin/enquiry?id=${record.enquiryId}`}>
              <Button>Update</Button>
            </Link>
          )}
        />
      </Table>
    </div>
  );
};

export default Enquiries;
