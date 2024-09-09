import { createSlice } from "@reduxjs/toolkit";
import { userType } from "../types/types";




const initialState :{ user: userType | null }= {
    user: {
        name:'Kanniappan',
        role :3
    } 
}

export const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload
        },
        removeUser: (state, action) => {
            state.user= null
        }
    }
})