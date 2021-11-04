import React from "react";
import { ScrollView } from "react-native";
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
  updateOrder,
  updateOrderItem,
  setOrderLoading,
  setOrderStatus,

  selectOrders,
  selectOrderLoading,
} from '../orders/orderSlice'
import { FlatList } from "react-native-gesture-handler";



export const Orders = () => {
  const dispatch = useDispatch();
  let order_data = orderData;
  let startTime = new Date().getTime();

  function createOrderCard(order) {
    return (
      <OrderCard
        key={order.order_id}
        order={order}
      />
    );
  }
  
  return (
    <FlatList data={order_data}
      renderItem={({ item }) => createOrderCard(item)}
      keyExtractor={item => item.order_id}
    />  
  );
  console.log('time taken to create orders: ',startTime - new Date().getTime())

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


