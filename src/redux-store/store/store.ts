import {configureStore} from '@reduxjs/toolkit';
import {albumApi} from 'redux-store/api/album';
import {counterSlice} from 'redux-store/slice';

export const store = configureStore({
  reducer: {
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(albumApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
