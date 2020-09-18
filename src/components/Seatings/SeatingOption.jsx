import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

const { Meta } = Card;
const SeatingOption = ({ seating }) => {
  return (
    <Link to={`/dashboard/checkout/${seating.seatingId}`}>
      <Card
        hoverable
        style={{ width: 240 }}
        cover={
          <img
            alt="example"
            src="https://i.insider.com/5d0b59059c51010ac7222292?width=1400&format=jpeg&auto=webp"
          />
        }
      >
        <Meta
          title={`${seating.seatingClass} CLASS`}
          description={
            <>
              {" "}
              <p>Five-star service</p>
              <p>
                <b>{seating.price} AUD</b>
              </p>
            </>
          }
        />
      </Card>
    </Link>
  );
};

export default SeatingOption;
