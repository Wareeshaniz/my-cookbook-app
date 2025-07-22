import { createContext, useContext, useState, useEffect } from "react";
import { recipeService } from "@/lib/supabase";

const RecipeContext = createContext();

export function useRecipes() {
  return useContext(RecipeContext);
}

export function RecipeProvider({ children }) {
  const [recipes, setRecipes] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [recipeToEdit, setRecipeToEdit] = useState(null);

  useEffect(() => {
    loadRecipes();
  }, []);

  const loadRecipes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await recipeService.getRecipes();
      setRecipes(data);
    } catch {
      setError("Failed to load recipes!");
    } finally {
      setLoading(false);
    }
  };

  const addRecipe = async (recipeData) => {
    const savedRecipe = await recipeService.addRecipe(recipeData);
    setRecipes((prev) => [savedRecipe, ...prev]);
  };

  const updateRecipe = async (recipeId, recipeData) => {
    await recipeService.updateRecipe(recipeId, recipeData);

    const updatedRecipeForState = {
      ...recipeData,
      id: recipeId,
    };

    setRecipes((prev) =>
      prev.map((r) => (r.id === recipeId ? updatedRecipeForState : r))
    );
  };

  const deleteRecipe = async (recipeId) => {
    const originalRecipes = [...recipes];
    setRecipes((prev) => prev.filter((recipe) => recipe.id !== recipeId));
    try {
      await recipeService.deleteRecipe(recipeId);
    } catch {
      setError("Failed to delete recipe. It has been restored.");
      setRecipes(originalRecipes);
    }
  };

  const value = {
    recipes,
    loading,
    error,
    addRecipe,
    updateRecipe,
    deleteRecipe,
    recipeToEdit,
    setRecipeToEdit,
  };

  return (
    <RecipeContext.Provider value={value}>{children}</RecipeContext.Provider>
  );
}
