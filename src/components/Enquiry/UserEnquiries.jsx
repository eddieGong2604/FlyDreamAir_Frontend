import React, { useState } from "react";
import { Form, Input, Checkbox } from "antd";

import { Button, Modal } from "antd";
import { apiUrl } from "../../config.json";
import { useEffect } from "react";
import Axios from "axios";
import MakeEnquiry from "./MakeEnquiry";

const UserEnquiries = () => {
  const [enqs, setEnqs] = useState([]);
  const [visible, setVisible] = useState(false);
  const [activeEnq, setActiveEnq] = useState({});
  const getEnqs = async () => {
    await Axios.get(`${apiUrl}/api/enquiry/user`)
      .then((res) => {
        console.log(res.data);
        setEnqs(res.data);
      })
      .catch((res) => setEnqs(null));
  };
  useEffect(() => {
    getEnqs();
  }, []);
  return (
    <div>
      <h1>User enquiries</h1>

      <div>
        {enqs.length
          ? enqs.map((enq) => (
              <div style={{ margin: 5 }}>
                <Button block onClick={() => setActiveEnq(enq)}>
                  Subject: {enq.subject} (
                  {enq.status ? "Resolved" : "Unresolved"})
                </Button>
              </div>
            ))
          : "You haven't made any enquiries"}
      </div>
      <br></br>
      <MakeEnquiry />
      {activeEnq && activeEnq.from && (
        <div style={{ width: "30%" }}>
          <h2>Enquiry Info</h2>
          <p>
            {" "}
            <b>Subject</b> : {activeEnq.subject}
          </p>
          <p>
            {" "}
            <b>From:</b> {activeEnq.from.username}
          </p>
          <p>
            {" "}
            <b>Content:</b> {activeEnq.content}
          </p>
          {activeEnq.reply ? (
            <p>
              <font style={{ color: "blue" }}>
                {" "}
                <b>Reply: </b> {activeEnq.reply}
              </font>{" "}
            </p>
          ) : (
            <p>
              <b>Note:</b> This enquiry is being reviewed by FlyDreamAir
            </p>
          )}
        </div>
      )}
    </div>
  );
};

export default UserEnquiries;
