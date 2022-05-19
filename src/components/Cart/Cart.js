import React from 'react';
import Modal from '../UI/Modal';
import classes from './Cart.module.css';

const Cart = (props) => {
    const cartItems = <ul className={classes['cart-items']}>{[{id:"m1", name:"Sushi", price: 12.99, amount: 1}]
    .map(item =><li>{item.name}</li>)}</ul>;
  return (
    <Modal onClick={props.onCloseCart}>
      {cartItems}
      <div className={classes.total}>
          <span>Total Amount</span>
          <span>35.62</span>
      </div>
      <div className={classes.actions}>
          <button className={classes['button__alt']} onClick={props.onCloseCart}>Close</button>
          <button className={classes.button}>Order</button>
      </div>
    </Modal>
  )
}

export default Cart