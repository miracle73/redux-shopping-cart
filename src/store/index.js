import { configureStore,  } from "@reduxjs/toolkit";
import authSlice from "./auth-slice";
import cartSlice from "./cart-slice";
// const counterSlice = createSlice({
//     name: "counter",
//     initialState: { counter: 0 },
//     reducers: {
//         increment(state, action) {
//             state.counter++;
//         },
//         decrement(state, action) {
//             state.counter--;
//         },
//         addBy(state, action) {
//             state.counter += action.payload
//         }
//     }
// })
// export const actions = counterSlice.actions
const store = configureStore({
    reducer: {
        auth: authSlice.reducer,
        cart: cartSlice.reducer
    }

})
// export const authStore = configureStore({ reducer: authSlice.reducer})
// export const cartStore = configureStore({ reducer: cartSlice.reducer})
export default store