import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "../slices/userSlices";

const store = configureStore({
    reducer: {
        userInfo: userSlice.reducer
    },
})

export default store;