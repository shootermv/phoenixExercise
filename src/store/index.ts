import {configureStore} from '@reduxjs/toolkit';
import phoneReducer from './phoneSlice';
import jobExperiencesReducer from './worksSlice';
const store = configureStore({
  reducer: {
    phone: phoneReducer,
    jobExperiences: jobExperiencesReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
