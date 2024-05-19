import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "userDetails",
  initialState: {
    sideBarDetais: null,
    token: "",
    userName: null,
    isProfileTab : false
  },
  reducers: {
    setSideBarDetails: (state, action) => {
      state.sideBarDetais = action.payload;
    },
    setToken: (state, action) => {
      state.token = action.payload;
    },

    setUserName: (state, action) => {
        state.userName = action.payload;
    },
    toggleProfileTab: (state)=>{
        state.isProfileTab = !state.isProfileTab
    }
  },
});

export const { setSideBarDetails, setToken , setUserName , toggleProfileTab } = userSlice.actions;
export default userSlice.reducer;
