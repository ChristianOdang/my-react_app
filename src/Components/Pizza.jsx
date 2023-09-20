import React from "react";

function Pizza(props) {
  return (
    <li className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <h2>{props.pizzaObj.name}</h2>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price + 3}</span>
    </li>
  );
}

export default Pizza;
