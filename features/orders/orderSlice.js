import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import {createSlice} from '@reduxjs/toolkit';

const orderSlice = createSlice({
  name: 'order',
  initialState: {
    orders: [],
    orderTotal: 0,
    ordersLoading: false,
    error: null,
  },
  reducers: {
    addOrder: (state, action) => {
      /** Add an order */
      state.orders.push(action.payload);
      state.orderTotal += action.payload.price;
    },

    addOrderItem: (state, action) => {
      /** Add an item to an order */
      const order = state.orders.find(order => order.id === action.payload.orderId);
      order.items.push(action.payload.item);
      order.total += action.payload.item.price;
    },

    deleteOrder: (state, action) => {
      /** Delete an order */
      if (state.orders.length == 0) {
        return state;
      }

      const index = state.orders.findIndex(
        (order) => orders.order_id === action.payload.order_id
      );
      state.orders.splice(index, 1);
      if (index !== -1) {
        state.orderTotal -= action.payload.price;
      }
    },
    
    deleteOrderItem: (state, action) => {
      /** Delete an item from an order */
      const order = state.orders.find(order => order.order_id === action.payload.order_id);
      const index = order.orderItems.findIndex(
        (item) => item.item_id === action.payload.productId
      );
      order.items.splice(index, 1);
      order.total -= action.payload.item.price;
    },

    setOrders: (state, action) => {
      /** Set the entire orders array by assignment: O(1) */
      state.orders = action.payload;
    },

    updateOrderItem: (state, action) => {
      /** Set or edit an order */
      state.orders = state.orders.map((item) => {
        if (item.order_id === action.payload.order_id) {
          item = action.payload;
        }
      });
    },


    setOrderLoading: (state, action) => {
      /** Set order loading state */
      state.orderLoading = action.payload;
    },

    setOrderStatus: (state, action) => {
      /** Set order status */
      state.orders = state.orders.map((item) => {
        if (item.order_id === action.payload.order_id) {
          item.status = action.payload.status;
        }
      });
    },

  }

});

// export action creators
export const {
  addOrder,
  addOrderItem,
  deleteOrder,
  deleteOrderItem,
  setOrders,
  updateOrderItem,
  setOrderLoading,
  setError,
} = orderSlice.actions;


// selectors
export const selectOrders = (state) => state.orders;
export const selectOrderTotal = (state) => state.order.orderTotal;
export const selectOrdersLoading = (state) => state.order.ordersLoading;
export const orderError = (state) => state.order.error;

export default orderSlice.reducer;

/**
 * cases:
 * 1. addOrder
 *  - duplicate order_id -> increment order_id to be last order_id + 1
 *  - update total price for a free order -> orderTotal += payload.order.productTotal OR do nothing
 *  - update total price for a paid order -> orderTotal += payload.order.productTotal
 *  - 
 *  - set loading to false
 *  - set error to null
 *  - return state
 *  
 * 2. deleteOrder
 *  - bottlenecks in delteting an order that does not exist using linear search -> binary search can be a solution
 *  - subtracting the price of an order that does not exist -> check if item was found before deletion
 *  - deleting order from an empty list -> return state
 *  - subtracting when price is 0, which results in -ve price -> check total and return state if it's 0
 *  - 
 *
 * 3. updateOrder
 *  - bottlenecks in editing an order that does not exist using linear search -> binary search can be a solution
 *  - set loading to false
 *  - set error to null
 * 4. setLoading
 * 5. setError
 * 
 */

/**
 * SEARCHING
 * Backend socket broadcasts all orders linked to an organization
 * Frontend then recieves the orders, and continues to listen for new orders, filter by progress, and category
 * 
 * A single organization can grow in orders, maybe millions of orders.
 * SO, searching for an order will be with binary search.
 * 
 * After finding the order, we need to search for an item in the order. That can be done using linear search.
 * I doubt that we will have more than 100 items in an order.
 * 
 * order_id will be unique and increasing.
 * 
 */