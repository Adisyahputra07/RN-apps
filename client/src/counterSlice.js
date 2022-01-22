import {createSlice} from '@reduxjs/toolkit';

export const counterSlice = createSlice({
  name: 'counter',
  initialState: {
    token: null,
    user: null,
  },

  reducers: {
    dataUsers: (state, action) => {
      state.user = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },

    removeToken: (state, action) => {
      state.token = null;
    },
  },
});

export const {dataUsers, setToken, removeToken} = counterSlice.actions;

export default counterSlice.reducer;
