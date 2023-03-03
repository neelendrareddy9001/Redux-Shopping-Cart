import {createSlice} from '@reduxjs/toolkit';
import { defaultEqualityCheck } from 'reselect';

const initialState = {
    isOpen : false,
};

const modalSlice = createSlice({
    name : 'modal',
    initialState,
    reducers : {
        openModal : (state, action)  => {
            state.isOpen = true;
        },
        closeModal : (state, action)  => {
            state.isOpen = true;
        },
    }
})

export const {openModal, closeModal} = modalSlice.actions;

export default modalSlice.reducer;