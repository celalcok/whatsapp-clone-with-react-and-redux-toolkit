import { createSlice} from "@reduxjs/toolkit"
import {data} from "../../data/fakeData"

export const auth = data.users.find(auth => auth.id===1);

export const authSlice = createSlice({
    name:"auth",
    initialState:{
       authName:auth.name,
       password:auth.password,
       image:auth.image
    },
    reducers: {

        // GET AUTH
        getAuth:(state,action) => {
            state.authName = action.authName;
            state.password = action.password;
        },
    }
})
export const {getAuth} = authSlice.actions
export default authSlice.reducer