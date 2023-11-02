import { APP_ID, APP_KEY } from "./key";
import "./App.css";
import axios from "axios";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import RecipeList from "./RecipeList";
import Bootstrap from "bootstrap";



function App() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [healthLabels, sethealthLabels] = useState("paleo");
  const [submitted, setSubmitted] = useState(false);

  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&health=${healthLabels}`;

  useEffect(() => {
    if (submitted) {
      axios(url)
        .then((response) => {
          localStorage.setItem("recipeData", JSON.stringify(response.data.hits));
          
          setRecipes(response.data.hits);
           console.log(response);
        })
        .catch((error) => {
          console.error("Error in fetching data:", error);
        });
    }
  }, [submitted]);

 

  const onSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true);
  };

  return (
    <div className="app">
      {/* <Navbar /> */}

      <h1>FOOD RECIPE JUNCTION 🥗🍕🍹</h1>
      <form action="" className="app_searchForm" onSubmit={onSubmit}>
        <input
          type="text"
          className="app_input"
          placeholder="Enter Ingredient"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <select className="app_healthLabels">
          <option onClick={()=> sethealthLabels("select-Item")}>
            Select Item
          </option>
          <option onClick={()=> sethealthLabels("gluten-free")}>
            gluten-free
          </option>
          <option onClick={()=> sethealthLabels("vegetarian")}>
            vegetarian
          </option>
          <option onClick={()=> sethealthLabels("paleo")}>paleo</option>
          <option onClick={()=> sethealthLabels("dairy-free")}>
            dairy-free
          </option>
          <option onClick={()=> sethealthLabels("wheat-free")}>
            wheat-free
          </option>
          <option onClick={()=> sethealthLabels("low-sugar")}>
            low-sugar
          </option>
          <option onClick={()=> sethealthLabels("egg-free")}>egg-free</option>
          <option onClick={()=> sethealthLabels("soy-free")}>soy-Free</option>
          <option onClick={()=> sethealthLabels("tree-nut-free")}>
            Tree-Nut-Free
          </option>
          <option onClick={()=> sethealthLabels("no-item")}>no-item</option>
        </select>
        <input className="app_submit" type="submit" value="search" />
      </form>

      <div className="app_recipes">
        {recipes.map((recipe) => {
          const uri = recipe["recipe"]["uri"];
          const id = uri.slice(uri.indexOf("#recipe_")+8);
          return <RecipeList key={id} id={id} recipe={recipe} />;
        })}
      </div>
    </div>
  );
}

export default App;
