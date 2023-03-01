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
});

//console.log(cartSlice);

export default cartSlice.reducer;