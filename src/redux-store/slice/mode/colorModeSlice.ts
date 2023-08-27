import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {AppDispatch, RootState} from 'redux-store/store';
import {setMode} from 'utils';

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
    toggleMode: (state, action: PayloadAction<Theme>) => {
      if (action.payload === 'light') state.mode = 'dark';
      else state.mode = 'light';
    },
  },
});

export const setTheme = (mode: Theme) => async (dispatch: AppDispatch) => {
  console.log('inside setTheme');
  await dispatch(toggleMode(mode));
  await setMode(mode);
};

export const {toggleMode, fetchModeOnRedux} = colorModeSlice.actions;

export default colorModeSlice.reducer;
