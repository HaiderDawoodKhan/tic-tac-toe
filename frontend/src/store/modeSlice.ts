import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode : false
}

export const modeSlice = createSlice({
    name : 'mode',
    initialState,
    reducers : {
        toggleMode : (state) => {
            state.darkMode = !state.darkMode
        }
    }
})

export const { toggleMode } = modeSlice.actions;
export default modeSlice.reducer;