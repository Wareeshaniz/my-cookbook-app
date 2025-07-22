import { Button } from "@/components/ui/button";
import { useRecipes } from "@/context/RecipeContext";
import { useNavigate } from "react-router-dom";
import { cardStyles, badgeStyles, iconStyles } from "@/constants/styles";
import { Edit, Trash2 } from "lucide-react";

function RecipeCard({ recipe }) {
  const { deleteRecipe, setRecipeToEdit } = useRecipes();
  const navigate = useNavigate();

  const handleDelete = () => {
    if (window.confirm("Are you sure you want to delete this recipe?")) {
      deleteRecipe(recipe.id);
    }
  };

  const handleEdit = () => {
    setRecipeToEdit(recipe);
    navigate(`/edit/${recipe.id}`);
  };

  return (
    <article className={cardStyles.recipe}>
      <h3 className={cardStyles.title}>{recipe.name}</h3>

      <div className={cardStyles.meta}>
        <span className={`${badgeStyles.base} ${badgeStyles.time}`}>
          {recipe.cookingTime}
        </span>
        <span className={`${badgeStyles.base} ${badgeStyles.servings}`}>
          {recipe.servings} Servings
        </span>
      </div>

      <h4 className={badgeStyles.heading}>Ingredients:</h4>
      <p className={cardStyles.text}>{recipe.ingredients}</p>

      <h4 className={cardStyles.heading}>Instructions:</h4>
      <p className={cardStyles.text}>{recipe.instructions}</p>

      <div className="flex items-center gap-2 mt-4">
        <Button variant="secondary" onClick={() => handleEdit()}>
          <Edit className={iconStyles.button} />
          Edit
        </Button>
        <Button variant="destructive" onClick={handleDelete}>
          <Trash2 className={iconStyles.button} />
          Delete
        </Button>
      </div>
    </article>
  );
}

export default RecipeCard;
