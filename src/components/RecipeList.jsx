import RecipeCard from "./RecipeCard";
import { useRecipes } from "@/context/RecipeContext";
import { recipeListStyles as styles } from "@/constants/styles";
import { Soup, Loader2 } from "lucide-react";

function RecipeList({ searchTerm }) {
  const { recipes, loading, error } = useRecipes();

  const filteredRecipes = recipes.filter((recipe) =>
    recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  if (loading) {
    return (
      <div className={styles.statusContainer}>
        <div className={styles.statusIndicator}>
          <Loader2 className={`${styles.statusIcon} ${styles.loadingIcon}`} />
          <p className={styles.loadingText}>Loading your cookbook...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={styles.statusContainer}>
        <p className={`${styles.statusText} ${styles.errorText}`}>{error}</p>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h2 className={styles.title}>My Recipes</h2>
        <div className={styles.divider}></div>
      </div>

      {filteredRecipes.length > 0 ? (
        <div className={styles.listWrapper}>
          {filteredRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe} />
          ))}
        </div>
      ) : (
        <div className={styles.emptyStateContainer}>
          <Soup className={styles.emptyStateIcon} />
          <p className={styles.emptyStateText}>
            {searchTerm
              ? `No recipes found for "${searchTerm}"`
              : "Your cookbook is empty. Add a recipe to get started!"}
          </p>
        </div>
      )}
    </div>
  );
}

export default RecipeList;
