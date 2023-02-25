import React, { useState } from "react";
import OrdersList from "../OrdersList/OrdersList";

const MyOrders = () => {
  const [orders, setOrders] = useState([]);
  // const { user } = useAuth()
  const [myOrders, setMyOrders] = useState([]);
  return (
    <div>
      <div class="container-fluid">
        <div class="row">
          <table class="table table-bordered text-break">
            <thead>
              <tr>
                <th scope="col">Order ID</th>
                <th scope="col">Customer Name</th>
                {/* <th scope="col">Location</th> */}
                <th scope="col">Service Id</th>
                <th scope="col">Status</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody  style={{ height: '100%' }}>
              {myOrders.map((order) => (
                <OrdersList key={order._id} order={order}></OrdersList>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyOrders;
