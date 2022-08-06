import {configureStore} from "@reduxjs/toolkit"
import userReducer from "./user/userSlice"
import authReducer from "./auth/authSlice"
import messageReducer from "./message/messageSlice"
import statusReducer from "./status/statusSlice"

// CREATE STORE
export const store = configureStore({
    reducer:{
        user:userReducer,
        message:messageReducer,
        status:statusReducer,
        auth:authReducer,
    }
})