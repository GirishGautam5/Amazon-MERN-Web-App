import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { listOrderMine } from "../../Redux/Actions/orderActions";
import Navbar from "../Home/Navbar";
import LoadingBox from "../LoadingBox/LoadingBox";
import MessageBox from "../MessageBox/MessageBox";
import './orderHistorystyles.css';

export default function OrderHistoryScreen(props) {
  const orderMineList = useSelector((state) => state.orderMineList);
  const { loading, error, orders } = orderMineList;
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(listOrderMine());
  }, [dispatch]);
  return (
    <div>
      <Navbar />
    <div className="order_history">
      
      <h1>Your Orders</h1>
      {loading ? (
        <LoadingBox></LoadingBox>
      ) : error ? (
        <MessageBox variant="danger">{error}</MessageBox>
      ) : (
        <>
        {orders?.length === 0 && (
          <h4>0 orders. You have not placed any orders</h4>
        )}
        {orders?.length > 0 && (
        <table className="table">
          <thead>
            <tr>
              {/* <th>Details</th> */}
              <th>ID</th>
              <th>Order Placed</th>
              <th>TOTAL</th>
              <th>Shipped to</th>
              <th>DELIVERED</th>
              <th>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {orders?.map((order) => (
              <tr key={order._id}>
                {/* <td>
                  <div>
                  <img src={order.image} alt="product" className="product_image" />
                  <Link to={`/product/${order.product}`}>
                            {order.name}
                          </Link>
                  </div>
                </td> */}
                <td>{order?._id}</td>
                <td>{order?.createdAt?.substring(0, 10)}</td>
                <td>{order?.totalPrice?.toFixed(2)}</td>
                <td>{order?.shippingAddress?.fullName}</td>
                <td>
                  {order?.isDelivered
                    ? order?.deliveredAt.substring(0, 10)
                    : 'No'}
                </td>
                <td>
                  <button
                    type="button"
                    className="small details_button"
                    onClick={() => {
                      navigate(`/order/${order?._id}`);
                    }}
                  >
                    <span className="details_span">Details</span>
                  
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        )}
        </>
      )}
    </div>
    </div>
  );
}
