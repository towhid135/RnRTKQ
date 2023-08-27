import {configureStore} from '@reduxjs/toolkit';
import {albumApi} from 'redux-store/api/album';
import colorModeSlice from 'redux-store/slice/mode/colorModeSlice';
import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';

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
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useTypedDispatch = useDispatch<AppDispatch>;
export default store;
