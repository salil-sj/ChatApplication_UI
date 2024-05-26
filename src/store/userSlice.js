import { createSlice } from "@reduxjs/toolkit";
import { enableMapSet } from "immer";
import { getDefaultMiddleware } from '@reduxjs/toolkit';
enableMapSet();



const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    sideBarDetails: {},
    token: null,
    userName: null,
    isProfileTab : false,
    currrentRecipient: {},
    profileDetails: {"daya123" : {userName: "daya"}}
  },
  reducers: {
    setSideBarDetails: (state, action) => {
      state.sideBarDetails = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setUser: (state, action) => {
        state.userName = action.payload;
    },
    toggleProfileTab: (state)=>{
        state.isProfileTab = !state.isProfileTab
    },
    updateSideBarDetails: (state, action) => {
     state.sideBarDetails[action.payload.userName] = action.payload;
    },
    updateSideBarForSearchBarEvent :(state , action)=>{

      if (state.sideBarDetails[action.payload.userName]) {
        const tempData = state.sideBarDetails[action.payload.userName];
        delete state.sideBarDetails[action.payload.userName];
        state.sideBarDetails = {
          [action.payload.userName]: tempData,
          ...state.sideBarDetails
        };
        console.log(state.sideBarDetails);
      } else {
        // Handle case where userName doesn't exist if necessary
      }
      
      
    },
    updateReadFlag:(state,action)=>{
      console.log("---------UPDATE READ FLAG REDUX ------------------")
      if(action.payload != undefined)
        {
          var details =  state.sideBarDetails[action.payload];
      console.log(action.payload);
      console.log(details)
      details.readFlag = true;
      state.sideBarDetails[action.payload] = details; 
        }
      

    },
    setCurrentRecipient: (state,action)=>{
      state.currrentRecipient = action.payload
    },
    setProfileDetails:(state,action)=>{
      state.profileDetails[action.payload.userName] = action.payload
    },
  },
});

export const { setSideBarDetails, setToken , setUser , toggleProfileTab , updateSideBarForSearchBarEvent , updateSideBarDetails ,  updateReadFlag ,setCurrentRecipient , setProfileDetails} = userSlice.actions;
export default userSlice.reducer;
