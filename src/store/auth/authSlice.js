import { createSlice } from '@reduxjs/toolkit';

// 'checking', 'not-authenticated', 'authenticated'
const INITIAL_STATE = {
  status: 'not-authenticated',
  uid: null,
  email: null,
  displayName: null,
  photoURL: null,
  errorMessage: null
}

export const authSlice = createSlice({
  name: 'auth',
  initialState: INITIAL_STATE,
  reducers: {
    login: (state, { payload }) => {
      state.status = payload.status,
      state.displayName = payload.displayName,
      state.email = payload.email,
      state.photoURL = payload.photoURL,
      state.uid = payload.uid,
      state.errorMessage = null
      // state = {
      //   ...payload,
      //   status: payload.status,
      //   errorMessage: null
      // }
    },
    logout: (state, { payload }) => {
      state.status = 'not-authenticated',
      state.displayName = null,
      state.email = null,
      state.photoURL = null,
      state.uid = null,
      state.errorMessage = payload
      // state = {
      //   ...INITIAL_STATE,
      //   errorMessage: payload.errorMessage
      // };
    },
    checkingCredentials: (state) => {
      state.status = 'checking';
    }
  }
});

export const { login, logout, checkingCredentials } = authSlice.actions;