import { createSlice } from "@reduxjs/toolkit";

const orderSlice = createSlice({
    name: 'order',
    initialState: {
        order: [],
    },
    reducers: {
        addOrder(state, action) {
            state.order.push(action.payload)
        },
        removeOrder(state, action) {
            state.order = state.order.filter(todo => todo.id !== action.payload);
        }
        
    }
})


export const { addOrder, removeOrder } = orderSlice.actions

export default orderSlice.reducer;