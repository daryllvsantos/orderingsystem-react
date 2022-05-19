import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultCart = {
  items: [],
  totalAmount: 0
}

const cartReducer = (state, action) => {
  if(action.type === "ADD_ITEM"){

  }
  return defaultCart;
}

const CartProvider = (props) => {

    const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCart);

    const addItemCartHandler = (item) =>{
      dispatchCartAction({type: 'ADD_ITEM', item: item});
    };
    const removeItemCartHandler = (id) =>{
      dispatchCartAction({type: 'DELETE_ITEM', id: id});
    };

    const cartContext = {
        items:[],
        totalAmount: 0,
        addItem: addItemCartHandler,
        removeItem: removeItemCartHandler
    }
  return (
    <CartContext.Provider value={cartContext}>
        {props.children}
    </CartContext.Provider>
  )
}

export default CartProvider
