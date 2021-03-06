import { Fragment } from "react";

import mealsImage from "../../assets/meals.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";
const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>React Order's</h1>
        <HeaderCartButton onClick={props.onClickCart}/>
      </header>
      <div className={classes["main-image"]}>
        <img src={mealsImage} alt="Hero Header" />
      </div>
    </Fragment>
  );
};

export default Header;
