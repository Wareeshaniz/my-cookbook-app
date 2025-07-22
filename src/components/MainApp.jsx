import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { RecipeProvider } from "@/context/RecipeContext";
import { authService } from "@/lib/supabase";

import RecipeForm from "./RecipeForm";
import RecipeList from "./RecipeList";
import Header from "./Header";
import AppContent from "./AppContent";

import { appStyles } from "@/constants/styles";

function MainApp() {
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate();

  const handleAddRecipeClick = () => {
    navigate("/add");
  };

  const handleSignOut = async () => {
    await authService.signOut();
  };

  return (
    <RecipeProvider>
      <main className={appStyles.main}>
        <Header
          onAddRecipe={handleAddRecipeClick}
          onSignOut={handleSignOut}
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
        />

        <AppContent searchTerm={searchTerm} />
      </main>
    </RecipeProvider>
  );
}

export default MainApp;
