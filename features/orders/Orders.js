import React, { useEffect } from "react";
import { ScrollView, VirtualizedList } from "react-native";
import { useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from '@reduxjs/toolkit';
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
  selectOrderLoading,
} from '../orders/orderSlice';


export const Orders = () => {
  let order_data = orderData;
  const dispatch = useDispatch();

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

  function filterOrders_bySearch(orders, searchTerm) {
    /**
     * @param {Array} orders
     * @param {String} searchTerm
     * @return {Array}
     * @description This function filters the orders by search term as the
     * user types in the search bar
     * */
    return orders.filter(
      order =>
        order.order_id.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.customerName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.orderStatus.toLowerCase().includes(searchTerm.toLowerCase()) ||
        order.orderTotal.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }
  
  return (
    <VirtualizedList
      data={order_data}
      renderItem={({ item }) => createOrderCard(item)}
      keyExtractor={(item) => item.order_id}
      getItem={(data, index) => data[index]}
      getItemCount={(data) => data.length}
    />  
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


