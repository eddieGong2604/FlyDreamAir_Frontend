import React from "react";
import { Card, Avatar } from "antd";
import "./UserCredits.css";
import VoucherRedemption from "./VoucherRedemption";

const { Meta } = Card;

const FrequentFlyerCard = ({ user }) => {
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Card style={{ width: 500 }}>
          <Meta
            avatar={
              <Avatar src="https://www.canva.com/wp-content/uploads/sites/8/2019/04/silver.png" />
            }
            title={`${user.status} CARD`}
            description={
              <>
                <p>Account Holder: {user.name} </p>
                <p>Frequent Flyer Points: {user.ffpoints}</p>
                <p>Status Points: {user.statusPoints}</p>
                <VoucherRedemption />
              </>
            }
          />
        </Card>
      </div>
    </>
  );
};

export default FrequentFlyerCard;
