import { createSlice } from '@reduxjs/toolkit';

const counterSlice = createSlice({
    name: 'counter',
    initialState: { value: 0 }, // Initial counter state
    reducers: {
        increment: (state) => {
            state.value += 1; // Increment by 1
        },
        decrement: (state) => {
            state.value -= 1; // Decrement by 1
        },
    },
});

export const { increment, decrement } = counterSlice.actions; // Export actions
export default counterSlice.reducer; // Export reducer
