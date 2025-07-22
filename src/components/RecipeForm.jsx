import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { useRecipes } from "@/context/RecipeContext";
import { Loader, Loader2 } from "lucide-react";
import { formStyles, recipeFormStyles as styles } from "@/constants/styles";

function RecipeForm({ recipeToEdit, onFormClose }) {
  const { addRecipe, updateRecipe } = useRecipes();

  const [name, setName] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [servings, setServings] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState(null);

  const isEditMode = Boolean(recipeToEdit);

  useEffect(() => {
    if (isEditMode) {
      setName(recipeToEdit.name);
      setCookingTime(recipeToEdit.cookingTime || "");
      setServings(recipeToEdit.servings || "");
      setIngredients(recipeToEdit.ingredients || "");
      setInstructions(recipeToEdit.instructions || "");
    } else {
      resetForm();
    }
  }, [recipeToEdit, isEditMode]);

  const resetForm = () => {
    setName("");
    setCookingTime("");
    setServings("");
    setIngredients("");
    setInstructions("");
  };

  //HANDLE FORM SUBMISSION
  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    // Validation
    if (!name.trim() || !ingredients.trim() || !instructions.trim()) {
      alert("Please fill in recipe name, ingredients, and instructions");
      return;
    }

    setIsSubmitting(true);

    try {
      const recipeData = {
        id: Date.now(),
        name: name.trim(),
        cookingTime: String(cookingTime).trim(),
        servings: String(servings).trim(),
        ingredients: ingredients.trim(),
        instructions: instructions.trim(),
        createdAt: new Date().toISOString(),
      };

      if (isEditMode) {
        await updateRecipe(recipeToEdit.id, recipeData);
      } else {
        await addRecipe(recipeData);
      }
      onFormClose();
    } catch (err) {
      setError(`Failed to save: ${err.message}`);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Add New Recipe</h2>

      <form className={styles.form} onSubmit={handleSubmit}>
        {/* Recipe Name */}
        <div>
          <label className={formStyles.label}>Recipe Name</label>
          <Input
            placeholder="Enter recipe name..."
            className={formStyles.input}
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        {/* Cooking Time & Servings Row */}
        <div className={styles.row}>
          <div>
            <label className={formStyles.label}>Cooking Time</label>
            <Input
              placeholder="e.g., 30 minutes"
              className={formStyles.input}
              value={cookingTime}
              onChange={(e) => setCookingTime(e.target.value)}
            />
          </div>
          <div>
            <label className={formStyles.label}>Servings</label>
            <Input
              type="number"
              placeholder="e.g., 4"
              className={formStyles.input}
              value={servings}
              onChange={(e) => setServings(e.target.value)}
            />
          </div>
        </div>

        {/* Ingredients */}
        <div>
          <label className={formStyles.label}>Ingredients</label>
          <Textarea
            placeholder="List ingredients (e.g., 2 cups flour, 1 tsp salt...)"
            className={styles.ingredientsTextarea}
            value={ingredients}
            onChange={(e) => setIngredients(e.target.value)}
          />
        </div>

        {/* Instructions */}
        <div>
          <label className={formStyles.label}>Instructions</label>
          <Textarea
            placeholder="Write step-by-step cooking instructions..."
            className={styles.instructionsTextarea}
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          />
        </div>

        {error && <p className={styles.errorText}>{error}</p>}

        {/* Buttons*/}
        <div className={styles.buttonContainer}>
          <Button
            type="button"
            variant="ghost"
            onClick={onFormClose}
            disabled={isSubmitting}
          >
            Cancel
          </Button>

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <Loader2 className={styles.loaderIcon} />
                Saving...
              </>
            ) : isEditMode ? (
              "Update Recipe"
            ) : (
              "Save Recipe"
            )}
          </Button>
        </div>
      </form>
    </div>
  );
}

export default RecipeForm;
