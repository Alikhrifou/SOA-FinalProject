import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AuthState {
  token: string | null;
  clientId: string | null;
  isAuthenticated: boolean;
}

const initialState: AuthState = {
  token: localStorage.getItem('token') || null,
  clientId: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setIsAuthenticated: (state) => {
      state.isAuthenticated = true;
    },

    setCredentials: (state, action: PayloadAction<{ token: string; clientId: string }>) => {
      state.token = action.payload.token;
      state.clientId = action.payload.clientId;
      state.isAuthenticated = true;
      localStorage.setItem('token', action.payload.token);
    },
    logout: (state) => {
      state.token = null;
      state.clientId = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');
    },
  },
});

export const { setCredentials, logout ,setIsAuthenticated} = authSlice.actions;
export default authSlice.reducer;