import React from 'react'


function Pizza(props) {
  return (
    <div className='pizza'>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <h2>{props.pizzaObj.name}</h2>
      <p>{props.pizzaObj.ingredients}</p>
      <span>{props.pizzaObj.price + 3}</span>
    </div>
  );
}

export default Pizza