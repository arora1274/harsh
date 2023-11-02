import React from 'react';
import './RecipeList.css'
import { Link } from 'react-router-dom';




const RecipeList = ({recipe, id}) => {
  // const uri = recipe["recipe"]["uri"];
  //  const id = uri.slice(uri.indexOf("#recipe_")+8);
  const path= "recipeinfo/"+id;
  
  
  
    return (
      <div className ="RecipeList">
        <img className ="recipeList_img" src= {recipe["recipe"]["image"]} 
        alt="Recipes Pic"
        onClick= {()=> window.open(recipe["recipe"]["url"])}  
        />
      
        <p className="recipeList_name">{recipe["recipe"]["label"]}</p>
        <Link to={path}>
          <button className="btn btn-secondary">View Recipe Info</button>
        </Link>
      </div>
    

  );
}

export default RecipeList;

