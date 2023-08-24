import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from 'redux-store/store';

const initialState: Mode = {
  mode: 'light',
};

const colorModeSlice = createSlice({
  name: 'colorMode',
  initialState,
  reducers: {
    fetchModeOnRedux: (state, action: PayloadAction<Theme>) => {
      state.mode = action.payload;
      console.log('fetchedModeOnRedux is: ', action.payload);
    },
    lightMode: state => {
      state.mode = 'light';
      console.log('lightMode successfully set on redux');
    },
    darkMode: state => {
      state.mode = 'dark';
      console.log('darkMode successfully set on redux');
    },
  },
});

export const {lightMode, darkMode, fetchModeOnRedux} = colorModeSlice.actions;

export default colorModeSlice.reducer;
