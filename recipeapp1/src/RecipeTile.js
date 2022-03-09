import React from 'react'
import './RecipeTile.css'


function RecipeTile({recipe, img,ingredients}) {
    return (
        recipe["recipe"]["image"].match(/\.(jpeg|jpg|gif|png)$/) != null && (
        <div className="recipeTile" onClick={() => window.open(recipe["recipe"]["url"])} >
            
            <img className="recipeTile_img" src={recipe["recipe"]["image"]} alt="" />
           <p className="recipeTile_name">{recipe["recipe"]["label"]}</p>   
        </div>
        )
    )
}

export default RecipeTile;
