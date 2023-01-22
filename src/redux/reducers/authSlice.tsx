import { createSlice } from '@reduxjs/toolkit'
import { RootState } from '../store/store';

interface AuthState {
    auth: boolean,
    userId?:number,
    userTitle?:string,
    loginTimestamp?:Date
  }
  
const initialState:AuthState = {
    auth:false,
    userId:0,
    userTitle:"",
    loginTimestamp:undefined
}

export const AuthSlice = createSlice({
    name:"Auth",
    initialState,
    reducers:{
        login: (state,action) => {
            state.auth = true;
            state.userId = action.payload.userId;
            state.userTitle = action.payload.userTitle;
            state.loginTimestamp = undefined; // new Date();
        },
        logout: (state) => {
            state.auth = false;
            state = initialState;
        },
    }
})

export const {login,logout} = AuthSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default AuthSlice.reducer;