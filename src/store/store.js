import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import { enableMapSet } from "immer";
import messageSlice from "./messageSlice";

enableMapSet();
const store = configureStore(
    {
        reducer:{
            userData:userSlice,
            messageData: messageSlice
        },
        middleware: (getDefaultMiddleware) => getDefaultMiddleware(),
    }
)
 export default store;