import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
    value: [
        { left: '100', top: '100', posX: 0, posY: 0, number: 2 },
    ],
}

export const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {
        moveDown: (state) => {
            // state.value[0].posX = 3;
            // state.value[0].top = 400;
        }
    }
});

export const { moveDown } = boardSlice.actions;
export function selectBoard(state) {
    return state.board.value;
}

export default boardSlice.reducer;