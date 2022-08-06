import { createSlice} from "@reduxjs/toolkit"
import {data} from "../../data/fakeData"
import {auth} from "../auth/authSlice"


let messages=data.messages.filter(message=>message.userFrom!==auth.id);
let users=data.users;
let messageAndUsers = [];
messages.map(message => {
    users.map(user =>{
        if(user.id === message.userFrom){
            let obj ={...message,user:user}
            messageAndUsers.push(obj)
        }
    })
})

export const messageSlice = createSlice({
    name:"message",
    initialState:{
        list:messageAndUsers,
        listByUser:[],
        userId:2,
       
    },
    reducers: {

        //GET ALL MESSAGES
        getAllMessages:(state) => {
            state.list = messageAndUsers;
        },

        // GET MESSAGES BY USER
        getMessagesByUser:(state,action) => {
            state.userId=action.payload;
            state.listByUser=messageAndUsers.filter(message => message.userFrom === state.userId);
        },

        // SEARCH MESSAGES
        searchMessages:(state,action) => {
            state.list= messageAndUsers.filter(
                message => message.content.toLowerCase().includes(action.payload.toLowerCase()) 
                ||  message.user.name.toLowerCase().includes(action.payload.toLowerCase())
            );
        },

        // ADD MESSAGE
        addMessage:(state,action) => {
            state.list=messages.push(action.payload);
        }

    }
})
export const {getAllMessages, getMessagesByUser,searchMessages,addMessage} = messageSlice.actions
export default messageSlice.reducer