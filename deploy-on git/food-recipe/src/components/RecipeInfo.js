import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft} from '@fortawesome/free-solid-svg-icons';

import './RecipeInfo.css'

import React from 'react'

function RecipeInfo() {
  // const [DetaiApipData, setDetaiApipData] = useState([]);
  const {recipeId} = useParams();


  const recipes= JSON.parse(localStorage.getItem("recipeData"))
  const recipe = recipes.find(recipe => recipe.recipe.uri.slice(recipe.recipe.uri.indexOf("#recipe_")+8) === recipeId);
  

    //console.log(recipeId,'#############');

   

  return (
    <div className="recipe_info_card">
      <div className= " card recipe_info_section">
        <div className="card_body">
          {/* <img className="card-media"src="https://edamam-product-images.s3.amazonaws.com/web-img/585/5851c075e37def2cece22f06c2ee2b81.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLWVhc3QtMSJHMEUCIBsMLE8cVELJUEZkEDViC5sVaQmV2BDDhIieXNIkaX02AiEA0fqGsvdm0j46SVtcp3Zv32mbhsuHccF2nOHlkR2YHa8qwgUI2P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDGoqf2s66dTRsFRRMiqWBRamaNQTNGo6i8N7jESo264ay8BBGoLrw19X60OY7dg%2FtCZR%2Fo96lgEURJJGau2HEXOIsyH%2FV1ST5p9IuHR4KBXTaW0lv0Vph6qtktPXC16Ua3h8n98QM%2BgGaJjyLFKkzUvpeFUGUFS28e5AwLiBiFJg7CIAQ1wrj77Y9TxZjv9OglqPuqwttbbuIb7PQBko5LpR%2BZybIZjAWrXA6g3%2FcxXWiJ%2B0Rnqxz83yffokRQpQGmnFSyagyrkMkVTVhyVCJ9HkqlltEvOjJBmoVwnzObTThw%2FQ2rZT2UkmxrW1%2FtCDQpZ2aImurK7VIBlPm14tsoy4REDkwda39HkYkxAbFm1NSay9GmR%2FS1WNXx9scKV0PNffg55i1vHzQMCuLNpollxk2c4FbfD38sD8XJueN%2BTLU3Lp6Pt5rdRMAhHRXeHIWPSUOKzmxSMeM1jMH46vM5abC0ILoND2AanUENeftr9c7Eji1ujXaoaCeiYd%2FpvESscOxBE9B%2BgjFAt3zPs27uA3UmgesUbSXGLS%2FZ%2Fq5nCfT6%2BWmfWfGWCk4ysxA93pPqlhEFY%2F172OuojUlQyaAi4T6BUS4vjr8omX8W0qCeS0Q2xurqzucrxqlmozN1ydCVaqT9pzZIRJjYO6ia55mikyOvEfT5NsuQli1gAzUa4i%2F%2F5ABrC7mQS549DPiwgOqRS%2Bi80jk%2BFWZtnGwjzF1SsQsjdIPx04SmdHdZ8CIe%2BwNc0OpAATi1giQejRBDOpZBwwQZghR5tTXLFV%2Fr%2B6h7l4iZi1xak0MjR0zAUnrm24TCNJNBqZ9zZx0b6XVfDrKmZS4LNxjwONm9XenlEOz%2FXhmIUSGD1PncfCZErTSy722SgzvhxNRzEFldZCSRS1iaMGrn6EMOH%2B56MGOrEBdwgR4dcqgVdBVNZ0jMSoF%2Fd9pqD2FGk14alIdkmOrvP0S4Uf1LhfM7xMOT%2BmNp%2Bvmuft4RlCcELJiAffpjm1qv2elpT%2BhAXthcutxdpbDQbbg17W%2Bacg7iJglVXhEBqUp3kd4iZh6j19dkGoy3y0wuFLGWi%2FNhdthPb8z9F%2BPU3ZnlLFJ85vWVUawvMJmG0UTj7Ow84055xU%2F7ggTHpnXAATWCHhkTstbDpL2hQNSyXr&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20230602T160235Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLQI37EMS%2F20230602%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=dadbf7433a5052442d0f3558428c2bb3df015b7a9b4e6e4979f69402a464cf8c" alt="" /> */}
          <h2 className="card-title">{recipe.recipe.label}</h2>
          <img className="card_img" src={recipe.recipe.image} alt="" />
          <h5 className="card-description three subtle"><span>Cuisine Type:</span> {recipe.recipe.cuisineType}</h5>
          <h5 className="card-description six subtle"><span>Dish Type:</span>{recipe.recipe.dishType}</h5>
          <h5 className="card-description four subtle"><span>Meal Type:</span>{recipe.recipe.mealType}</h5>
          <h5 className="card-description one subtle"><span>Diet Labels:</span>{recipe.recipe.dietLabels}</h5>
          <h5 className="card-description five subtle"><span>Calories:</span>{recipe.recipe.calories > 500 ? <span className="text-danger">{recipe.recipe.calories}</span> : <span className="text-success">{recipe.recipe.calories}</span> }</h5>
          <h5 className="card-description seven subtle"><span>Total Time:</span>{recipe.recipe.totalTime}</h5>
          <h5 className="card-description two subtle"><span>Ingredient:</span><ul>{recipe.recipe.ingredientLines.map(item => <li>{item}</li>) }</ul></h5>
         
        </div> 

        <Link to="/"><div className="card-shadow"><FontAwesomeIcon className="icon" icon={faCircleArrowLeft} /></div></Link>
     
      </div>


    </div> 
    
  )
}

export default RecipeInfo
