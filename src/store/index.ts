import {configureStore} from '@reduxjs/toolkit';
import phoneReducer from './phoneSlice';

const store = configureStore({
  reducer: {
    phone: phoneReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
