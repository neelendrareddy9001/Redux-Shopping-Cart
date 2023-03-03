import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import CartItem from './CartItem';
import {clearCart} form '../features/cart/cartSlice';

const CartContainer = () => {
      const dispatch = useDispatch();

    const {cartItems, total, amount} = useSelector((store) => store.cart);
if(amount < 1) { 
  return (
    <section className='cart'>
        <header>
            <h2>Your Bag</h2>
            <h4 className='empty-cart'>is currently empty</h4>
        </header>
    </section>
  );
}
return (
    <section className='cart'>
        <header>
            <h2>Your Bag</h2>
        </header>
        <div>
            {cartItems.map((item) => {
                return <CartItem key={item.id} {...item}/>
            })}
        </div>
        <footer>
            <hr/>
            <div className='cart-total'>
                <h4>
                    Toatal <span>${total.tofixed(2)}</span>
                </h4>
            </div>
            <button className='btn clear-btn' onClick={()} => dispatch(clearCart())>Clear Cart</button>
        </footer>
    </section>
)
}


export default CartContainer
