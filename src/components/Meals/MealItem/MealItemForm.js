import React, { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();
  const submitHandler = (event) => {
    event.preventDefault();

    const enteredAmount = amountInputRef.current.value;
    const amountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      amountNumber < 1 ||
      amountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(amountNumber);
  };
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: "amount_" + props.id,
          type: "number",
          min: 1,
          max: 5,
          defaultValue: 1,
          step: 1,
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <span>Please enter a valid amount (1-5).</span>}
    </form>
  );
};

export default MealItemForm;
