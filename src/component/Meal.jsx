import React, { useContext } from "react";
import { currencyFormatter } from "../utils.jsx/formatting";
import Button from "./UI/Button";
import CartContext from "./store/CartContext";

const Meal = ({ meal }) => {
  const cartContext = useContext(CartContext);
  function handleAddMealToCart() {
    cartContext.addItem(meal);
  }

  return (
    <li className="meal-item ">
      <article>
        <img
          src={`https://react-food-project-ihmm.onrender.com/${meal.image}`}
          alt={meal.name}
        />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">
            {currencyFormatter.format(meal.price)}
          </p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to Cart</Button>
        </p>
      </article>
    </li>
  );
};

export default Meal;
