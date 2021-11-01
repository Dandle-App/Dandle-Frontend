import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from '@reduxjs/toolkit';
import { Socket } from "socket.io-client";

import {
  addOrders,
  addOrder,
  removeOrder,
  updateOrder,
  updateOrderStatus
} from "./OrdersSlice";

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




