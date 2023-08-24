import {configureStore} from '@reduxjs/toolkit';
import {albumApi} from 'redux-store/api/album';
import colorModeSlice from 'redux-store/slice/mode/colorModeSlice';

export const store = configureStore({
  reducer: {
    colorMode: colorModeSlice,
    [albumApi.reducerPath]: albumApi.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(albumApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
