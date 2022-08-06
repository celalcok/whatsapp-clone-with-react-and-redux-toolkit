import { createSlice} from "@reduxjs/toolkit"
import {data} from "../../data/fakeData"
import {auth} from "../auth/authSlice"

export const userSlice = createSlice({
    name:"user",
    initialState:{
        list:[],
        statusList:[],
        user: {}
    },
    reducers: {
        // GET ALL USERS
        getAllUsers:(state) => {
            state.list=data.users.filter(user => user.id!==auth.id);
        },

        // GET USERS WHO HAVE STATUS
        getUserHavingStatus:(state) => {
            state.statusList=data.users.filter(user => user.statuses.images.length>0);
        },
        // GET USER 
        getUser:(state,action) => {
            state.user=data.users.filter(user => user.id === action.payload)[0]
        },

        // SEARCH USER
        searchUsers:(state,action) => {
            state.list= data.users.filter(
                user => user.name.toLowerCase().includes(action.payload.toLowerCase()) 
                ||  user.username.toLowerCase().includes(action.payload.toLowerCase())
            );
        },


    }
})
export const {getAllUsers, getUserHavingStatus, getUser, searchUsers} = userSlice.actions
export default userSlice.reducer