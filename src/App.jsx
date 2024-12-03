import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./Components/SearchBar";
import RecipeList from "./Components/RecipeList";

const App = () => {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRecipes = async (query) => {
    if (!query) return;
    setLoading(true);
    try {
      const API_ID = import.meta.env.VITE_EDAMAM_API_ID; 
      const API_KEY = import.meta.env.VITE_EDAMAM_API_KEY; 

      const response = await axios.get(
        `/api/search?q=${query}&app_id=${API_ID}&app_key=${API_KEY}`
      );
      setRecipes(response.data.hits);
    } catch (error) {
      console.error("Error fetching recipes:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <h1 className="text-3xl font-bold text-center mb-6 text-blue-600">
        Recipe Search App
      </h1>
      <SearchBar onSearch={fetchRecipes} />
      {loading ? (
        <p className="text-center text-gray-500 mt-4">Loading...</p>
      ) : (
        <RecipeList recipes={recipes} />
      )}
    </div>
  );
};

export default App;
