import React, { useEffect } from "react";
import { ActivityIndicator } from "react-native";
import { ScrollView, VirtualizedList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { Socket } from "socket.io-client";

import { OrderCard } from "../../components/molecules/Molecules";
import { orderData } from "./orderData";
import {
  addOrder,
  addOrderItem,
  deleteOrder,
  deleteOrderItem,
  setOrders,
  updateOrderItem,
  setOrdersLoading,
  setOrderStatus,

  selectOrders,
  selectOrdersLoading,
} from '../orders/orderSlice';
import { selectFilteredOrders, setFilteredOrders } from "../orderFilter/orderFilterSlice";


export const Orders = () => {
  const dispatch = useDispatch();
  const allOrders = useSelector(selectOrders);
  const ordersLoading = useSelector(selectOrdersLoading);
  const filteredOrders = useSelector(selectFilteredOrders);
  
  useEffect(() => {
    dispatch(setOrdersLoading(true));
    dispatch(setOrders(orderData));
    dispatch(setOrdersLoading(false));
  }, []);


  function createOrderCard(order) {
    /**
     * @param {object} order
     * @returns {JSX.Element} OrderCard
     * @description Creates an OrderCard component for each order in the order_data array
     */
    return (
      <OrderCard
        key={order.order_id}
        order={order}
      />
    );
  }
  
  return (
    ordersLoading ? 
    ( <ActivityIndicator size="large" color="#0000ff" />)
    : 
    (<VirtualizedList
      data={filteredOrders}
      renderItem={({ item }) => createOrderCard(item)}
      keyExtractor={(item) => item.order_id}
      getItem={(data, index) => data[index]}
      getItemCount={(data) => data.length}
    /> ) 
  );

}

/**
const socket = new Socket("http://localhost:3000");

socket.on("connect", () => {
  console.log("connected to server");
});

socket.on("newOrder", order => {
  console.log("new order", order);
  store.dispatch(addOrder(order));
});

socket.on("updateOrder", order => {
  console.log("update order", order);
  store.dispatch(setOrder(order));
});


socket.on("delteOrder", id => {
  console.log("delete order", id);
  store.dispatch(delteOrder(id));
});

*/


