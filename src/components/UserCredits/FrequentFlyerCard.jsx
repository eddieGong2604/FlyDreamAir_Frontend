import React from "react";
import { Card, Avatar, Popover, Button } from "antd";
import "./UserCredits.css";
import VoucherRedemption from "./VoucherRedemption";
import { apiUrl } from "../../config.json";
import { LoadingOutlined } from "@ant-design/icons";

const { Meta } = Card;
const SILVER_IMG =
  "https://www.canva.com/wp-content/uploads/sites/8/2019/04/silver.png";
const GOLD_IMG = "https://i.ytimg.com/vi/mik2XogH3zs/maxresdefault.jpg";
const PLAT_IMG =
  "https://i.pinimg.com/originals/70/5f/b3/705fb3f8cf205bf0f79058d7d7be6b56.jpg";
const FrequentFlyerCard = ({ user }) => {
  let IMG = "";
  if (user) {
    if (user.status === "PLATINUM") {
      IMG = PLAT_IMG;
    } else if (user.status === "GOLD") {
      IMG = GOLD_IMG;
    } else {
      IMG = SILVER_IMG;
    }
  }
  return (
    <>
      <div style={{ display: "flex", justifyContent: "center" }}>
        {user.status ? (
          <Card style={{ width: 500 }}>
            <Meta
              avatar={<Avatar src={IMG} />}
              title={`${user.status} CARD`}
              description={
                <>
                  <p>Account Holder: {user.name} </p>
                  <p>Frequent Flyer Points: {user.ffpoints}</p>
                  <p>Status Points: {user.statusPoints}</p>
                  <Popover
                    content={
                      <>
                        {" "}
                        <p>
                          If you get "a" Frequent Flyer Points to make voucher,
                          you will get "a%" discount one on your next flight.
                        </p>
                        <p>
                          Status points are used to indicate which Class you
                          belong to.
                          <ul>
                            <li>Below 50: SILVER</li>
                            <li>More than 50: GOLD</li>
                            <li>More than 100: PLATINUM</li>
                          </ul>
                          SILVER membership gets you 10 more Frequent Flyer
                          Points upon each purchase, while the values are 40 and
                          60 for GOLD and PLATINUM respectively
                        </p>
                        <p>
                          You can earn both kinds of point by booking flights
                        </p>
                      </>
                    }
                    title="Info"
                  >
                    <Button type="dashed">Learn more</Button>
                  </Popover>
                  ,
                  <VoucherRedemption />
                </>
              }
            />
          </Card>
        ) : (
          <LoadingOutlined />
        )}
      </div>
    </>
  );
};

export default FrequentFlyerCard;
