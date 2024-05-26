import { createSlice } from "@reduxjs/toolkit";

const messageSlice = createSlice({

    name: "messageDetails",
    initialState:{
        message: {}
    },
    reducers:{
        setMessages : (state,action)=>{
         
            // if (state.message[action.payload.recipientUser]) 
            //   {
            //     state.message[action.payload.recipientUser] = [
            //       action.payload.data,
            //       ...state.message[action.payload.recipientUser],
            //     ];
            //   } else {
            //     state.message[action.payload.recipientUser] = action.payload.data;
            //   }
    const { recipientUser, data } = action.payload;
      //       state.message[recipientUser] = state.message[recipientUser] || [];

      // state.message[recipientUser].push(data); // Add new message to the array
       // Ensure consistent array structure (optional)
       state.message[recipientUser] = state.message[recipientUser] || [];

       // Insert new message at the beginning using unshift
       state.message[recipientUser].unshift(data);
            
        }
    }

    }
)

export const { setMessages} = messageSlice.actions;
export default messageSlice.reducer;
