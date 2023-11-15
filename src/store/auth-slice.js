import { configureStore, createSlice } from "@reduxjs/toolkit";
const authSlice = createSlice({
    name: "auth",
    initialState: { isLoggedIn: false },
    reducers: {
        logIn(state) {
            state.isLoggedIn = true
        },
        logOut(state) {
            state.isLoggedIn = false
        }
    }
})

export const authActions = authSlice.actions;
// const store = configureStore({ reducer: counterSlice.reducer })
export default authSlice