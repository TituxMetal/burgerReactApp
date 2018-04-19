import React from 'react'

import classes from './Order.css'

const order = ( props ) => {
  const ingredients = []

  for (let ingredientName in props.ingredients) {
    ingredients.push(
      {
        name: ingredientName,
        amount: props.ingredients[ingredientName]
      }
    )
  }

  const ingredientOuput = ingredients.map(ig => (
    <span key={ig.name} className={classes.Ingredients}>{ig.name} ({ig.amount})</span>
  ))

  return (
    <div className={classes.Order}>
      <p>Ingredients: {ingredientOuput}</p>
      <p>Price: <strong>USD {Number.parseFloat(props.price).toFixed(2)}</strong></p>
    </div>
  )
}

export default order
