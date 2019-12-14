import React from 'react';

const RecipeCard = (props) => {
    return(
        <div>
            <h2>{props.recipe.name}</h2>
            <div>{props.recipe.ingredients}</div>
            <div>{props.recipe.instructions}</div>
        </div>
    )
}

export default RecipeCard;