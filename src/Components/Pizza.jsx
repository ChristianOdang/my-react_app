import React from "react";

function Pizza({ pizzaObj }) {

  
  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <h2>{pizzaObj.name}</h2>
      <p>{pizzaObj.ingredients}</p>
      <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
    </li>
  );
}

export default Pizza;
