import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = ({ recipes }) => {
  if (!recipes.length) {
    return (
      <p className="text-center text-gray-500 mt-4">
        No recipes found. Try searching for something else.
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {recipes.map((recipeData, index) => (
        <RecipeCard key={index} recipe={recipeData.recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
