import {configureStore} from '@reduxjs/toolkit';
import userReducer from '../features/user/userSlice';
import orderReducer from '../features/orders/orderSlice';

export const store = configureStore({
  reducer: {
    user: userReducer,
    order: orderReducer,
  },
});
