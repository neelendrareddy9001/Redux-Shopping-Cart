import {createSlice} from '@reduxjs/toolkit';
import cartItems from '../../cartItem';

const initialState = {
    cartItems :  cartItems,
    amount : 4,
    total : 0,
    isLoadig : true,
};

const cartSlice = createSlice({
    name : 'cart',
    initialState,
    reducers : {
       //state.cartItems = [];
        //return {cartItems : []};
    },
    removeItem  : (state, action) => {
            //console.log(action);
            const itemId = action.payload;
            state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
        },
        increase : (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount + 1;
        },
        decrease : (state, {payload}) => {
            const cartItem = state.cartItems.find((item) => item.id === payload.id);
            cartItem.amount = cartItem.amount - 1;
        },
});

//console.log(cartSlice);
export const {clearCart, increase,decrease} = cartSlice.actions;

export default cartSlice.reducer;
