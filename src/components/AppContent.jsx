import { Routes, Route, useNavigate } from "react-router-dom";
import { useRecipes } from "@/context/RecipeContext";
import RecipeList from "./RecipeList";
import RecipeForm from "./RecipeForm";

function AppContent({ searchTerm }) {
  const { recipeToEdit, setRecipeToEdit } = useRecipes();
  const navigate = useNavigate();

  const handleFormClose = () => {
    setRecipeToEdit(null);
    navigate("/");
  };

  return (
    <Routes>
      <Route path="/" element={<RecipeList searchTerm={searchTerm} />} />

      <Route
        path="/add"
        element={
          <RecipeForm recipeToEdit={null} onFormClose={handleFormClose} />
        }
      />

      <Route
        path="/edit/:id"
        element={
          <RecipeForm
            recipeToEdit={recipeToEdit}
            onFormClose={handleFormClose}
          />
        }
      />
    </Routes>
  );
}

export default AppContent;
