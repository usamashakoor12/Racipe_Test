import React from "react";

const RecipeCard = ({ recipe }) => {
  return (
    <div className="border rounded-lg shadow-md p-4 hover:shadow-lg">
      <img
        src={recipe.image}
        alt={recipe.label}
        className="w-full h-40 object-cover rounded-lg"
      />
      <h3 className="mt-2 text-lg font-semibold">{recipe.label}</h3>
      <a
        href={recipe.url}
        target="_blank"
        rel="noopener noreferrer"
        className="text-blue-500 hover:underline"
      >
        View Recipe
      </a>
    </div>
  );
};

export default RecipeCard;
