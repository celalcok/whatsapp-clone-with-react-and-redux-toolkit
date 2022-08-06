import { createSlice} from "@reduxjs/toolkit"



export const statusSlice = createSlice({
    name:"status",
    initialState:{
        showStatus:false,
        showProfile:false,
        showNewChat:false
    },
    reducers: {

        // SHOW STATUS COMPONENT
        showStatus:(state) => {
            state.showStatus = true;
            console.log("first")
        },

        // HIDE STATUS COMPONENT
        hideStatus:(state) => {
            state.showStatus = false;
        },

        // SHOW PROFILE COMPONENT
        showProfile:(state) => {
            state.showProfile = true;
            console.log("second")
        },

        // HIDE PROFILE COMPONENT
        hideProfile:(state) => {
            state.showProfile = false;
        },

        // SHOW NEWCHAT COMPONENT
        showNewChat:(state) => {
            state.showNewChat = true;
            console.log("New Chat")
        },

        // HIDE NEWCHAT COMPONENT
        hideNewChat:(state) => {
            state.showNewChat = false;
        },
        
    }
})
export const {showStatus, hideStatus, showProfile, hideProfile, showNewChat, hideNewChat} = statusSlice.actions
export default statusSlice.reducer