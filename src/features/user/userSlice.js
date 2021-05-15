import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: "",
    email: "",
    photo: "",
};

//when user logs in, remember all the stuff
const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setUserLoginDetails: (state, action) => {
            state.name = action.payload.name;
            state.email = action.payload.email;
            state.photo = action.payload.photo;
        },

        //When we logout, forget all the credentials
        setSignOutState: (state) => {
            state.name = null;
            state.email = null;
            state.photo = null;
        },
    },
});

export const {setUserLoginDetails, setSignOutState} = userSlice.actions;

//get access to user name, email and photo in this way in all other JS files
export const selectUserName  = (state) => state.user.name;
export const selectUserEmail = (state) => state.user.email;
export const selectUserPhoto = (state) => state.user.photo;

export default userSlice.reducer;

