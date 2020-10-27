import React, { useEffect } from "react";

import { Table, Tag, Space, Button } from "antd";
import { Link } from "react-router-dom";
import Axios from "axios";
import { notification } from "antd";
import { useState } from "react";
import { apiUrl } from "../../config.json";

const { Column, ColumnGroup } = Table;

const UserBookingTable = ({ bookings }) => {
  const [userBookings, setUserBookings] = useState([]);

  useEffect(() => {
    setUserBookings(bookings);
  }, [bookings]);

  const openNotificationWithIcon = (type, message) => {
    notification[type]({
      message: type,
      description: message,
    });
  };

  const cancel = async (id) => {
    let temp = userBookings;
    setUserBookings(userBookings.filter((e) => e.bookingId !== id));
    await Axios.delete(`${apiUrl}/api/booking/${id}`)
      .then(() => {
        openNotificationWithIcon("success", "Delete sucessful!");
      })
      .catch(() => {
        openNotificationWithIcon("error", "Delete unsucessful!");
        setUserBookings(temp);
      });
  };
  return (
    <div>
      <h1>Booking: </h1>
      <Table dataSource={userBookings}>
        <Column title="Booking Id" dataIndex="bookingId" key="bookingId" />
        <Column title="Price" dataIndex="bookingPrice" key="bookingPrice" />
        <Column
          title="Flight"
          key="flightNumber"
          render={(text, record) => <>{record.seating.flight.flightNumber}</>}
        />
        <Column
          title="Voucher Code"
          key="voucherCode"
          render={(text, record) =>
            record.voucher && <>{record.voucher.voucherCode}</>
          }
        />
        <Column
          title="Voucher Discount"
          key="discount"
          render={(text, record) =>
            record.voucher && <>{record.voucher.discount * 100}%</>
          }
        />

        <Column
          title="Action"
          key="action"
          render={(text, record) => (
            <Button onClick={() => cancel(record.bookingId)}>Cancel</Button>
          )}
        />
      </Table>
    </div>
  );
};

export default UserBookingTable;
