import React from "react";
import Pizza from "./Pizza";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "images/IMG_4856.JPG",
    soldOut: false,
  },
  {
    name: "Pizaa Maargherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "images/IMG_4860.JPG",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta",
    price: 12,
    photoName: "images/IMG_4856.JPG",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "images/IMG_4857.JPG",
    soldOut: false,
  },
  {
    name: "Pizza Prosciutte",
    ingredients: "Tomato, mozrella, ham and burrata cheese",
    price: 18,
    photoName: "images/IMG_4859.JPG",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta",
    price: 12,
    photoName: "images/IMG_4856.JPG",
    soldOut: false,
  },
];
function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <div>
      <h2 className='menu_header'>Our Menu</h2>
      {numPizzas > 0 ? (
        <ul className='pizza_menu'>
          {pizzaData.map((pizza) => (
            <Pizza pizzaObj={pizza} />
          ))}
        </ul>
      ) : <p className="error-msg">We're still working on our menu. Please come back later.</p>}
    </div>
  );
}

export default Menu;
