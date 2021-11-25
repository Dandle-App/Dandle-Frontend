import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import orderReducer from '../features/orders/orderSlice';
import orderFilterReducer from '../features/orderFilter/orderFilterSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
    orderFilter: orderFilterReducer,
  },
});
