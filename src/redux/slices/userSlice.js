import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    currentUser: null, // Initially, no user is logged in
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setCurrentUser: (state, action) => {
            state.currentUser = action.payload;
        },
        updateUser: (state, action) => {
            if (state.currentUser) {
                state.currentUser = { ...state.currentUser, ...action.payload };
            }
        },
    },
});

export const { setCurrentUser, updateUser } = userSlice.actions;
export default userSlice.reducer;
