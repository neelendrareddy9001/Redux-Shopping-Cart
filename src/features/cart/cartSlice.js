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
        return {cartItems : []};
    }
});

//console.log(cartSlice);
export const {clearCart} = cartSlice.actions;

export default cartSlice.reducer;
