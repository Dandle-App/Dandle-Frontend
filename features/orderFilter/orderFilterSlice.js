import { createSlice } from "@reduxjs/toolkit";

const orderFilterSlice = createSlice({
    name: "orderFilter",
    initialState: {
        filter: {
            status: "",
        },
        filteredOrders: [],
        filteredOrdersLoading: false,
        error: null,
    },
    reducers: {
        setFilter: (state, action) => {
            /** Set the filter */
            state.filter = action.payload;
        },
        setFilteredOrders: (state, action) => {
            /** Set the filtered orders */
            state.filteredOrders = action.payload;
        },
        setOrdersLoading: (state, action) => {
            /** Set the orders loading */
            state.ordersLoading = action.payload;
        },
        setError: (state, action) => {
            /** Set the error */
            state.error = action.payload;
        },
    },
});

// action creators
export const {
    setFilter,
    setFilteredOrders,
    setOrdersLoading,
    setError,
} = orderFilterSlice.actions;

// selectors
export const selectFilter = (state) => state.orderFilter.filter;
export const selectFilteredOrders = (state) => state.orderFilter.filteredOrders;
export const selectFilteredOrdersLoading = (state) => state.orderFilter.filteredOrdersLoading;
export const orderFilterError = (state) => state.orderFilter.error;

export default orderFilterSlice.reducer;
