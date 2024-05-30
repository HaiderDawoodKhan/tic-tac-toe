import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { GameUser } from '../types/GameUser.types';

interface AuthState {
    user: GameUser | null;
    isAuthenticated: boolean;
}

const initialState: AuthState = {
    user: null,
    isAuthenticated: false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        login(state, action : PayloadAction<GameUser>)
        {
            state.isAuthenticated = true;
            state.user = action.payload;
        },
        logout(state)
        {
            state.isAuthenticated = false;
            state.user = null;
        }
    }
})
export const { login, logout } = authSlice.actions;
export default authSlice.reducer;