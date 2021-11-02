import './App.css';
import Axios from 'axios';
import React, {useState} from 'react';
import RecipeTile from './RecipeTile';

function App() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);


  const YOUR_APP_ID = "c6a875b9";
const YOUR_APP_KEY = "97e6a1b6e3734b376bfb7c84fa7a92ac";
  var url = `https://api.edamam.com/search?q=${query}&app_id=${YOUR_APP_ID}&app_key=
  ${YOUR_APP_KEY}	`;

  async function getRecipes() {
    var result = await Axios.get(url);
    console.log(result.data.hits);
    setRecipes(result.data.hits)
  }
  const onSubmit = (e) => {
    e.preventDefault();
    getRecipes();
  }
  return (
    <div className="App">
     <h1 >Food Recipe Plaza 🍔</h1>
     <p>Search for a recipe</p>
     <form className="app_searchForm" onSubmit={onSubmit}>
       <input className="app_input" type="text" placeholder="Enter Ingridient" value={query} onChange={(e) => setQuery(e.target.value)}
       />
      <input type="submit" value="search" className="app_submit"/>
     </form>
     <div className="app_recipes">
        {recipes.map((recipe) => {
          return <RecipeTile recipe={recipe} />;
        })}
     </div>
    </div>
  );
}

export default App;
