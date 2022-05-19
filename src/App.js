import { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from './store/CartProvider';

function App() {
  const [cartShow, setCartShow] = useState(false);
  
  const cartShowHandler = () =>{
    setCartShow(true);
  }
  const cartHideHandler = () =>{
    setCartShow(false);
  }
  return (
    <CartProvider>
      {cartShow && <Cart onCloseCart={cartHideHandler}/>}
      <Header onClickCart={cartShowHandler}/>
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
