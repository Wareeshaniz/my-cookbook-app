import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const recipeService = {
  transformRecipeFromDB(dbRecipe) {
    return {
      id: dbRecipe.id,
      name: dbRecipe.name,
      cookingTime: dbRecipe.cooking_time,
      servings: dbRecipe.servings,
      ingredients: dbRecipe.ingredients,
      instructions: dbRecipe.instructions,
      createdAt: dbRecipe.created_at,
    };
  },

  async getRecipes() {
    const { data, error } = await supabase
      .from("Recipes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) throw error;

    return data.map((recipe) => this.transformRecipeFromDB(recipe));
  },

  async addRecipe(recipe) {
    const {
      data: { user },
    } = await supabase.auth.getUser();

    if (!user) throw new Error("You must be logged in to add a recipe");

    const recipeforDB = {
      name: recipe.name,
      cooking_time: recipe.cookingTime,
      servings: recipe.servings,
      ingredients: recipe.ingredients,
      instructions: recipe.instructions,
      user_id: user.id,
      created_at: new Date().toISOString(),
    };

    const { data, error } = await supabase
      .from("Recipes")
      .insert([recipeforDB])
      .select()
      .single();

    if (error) throw new Error(error.message);

    return this.transformRecipeFromDB(data);
  },

  async updateRecipe(recipeId, recipeData) {
    const recipeForDB = {
      name: recipeData.name,
      cooking_time: recipeData.cookingTime,
      servings: recipeData.servings,
      ingredients: recipeData.ingredients,
      instructions: recipeData.instructions,
    };

    const { error } = await supabase
      .from("Recipes")
      .update(recipeForDB)
      .eq("id", recipeId);

    if (error) {
      console.log("Supabase update error:", error);
      throw new Error(error.message);
    }
  },

  async deleteRecipe(recipeId) {
    const { error } = await supabase
      .from("Recipes")
      .delete()
      .eq("id", recipeId);

    if (error) throw new Error(error.message);
  },
};

export const authService = {
  async signUp({ email, password }) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw new Error(error.message);
    return data;
  },

  async signIn({ email, password }) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw new Error(error.message);
    return data;
  },

  async signInWithGoogle() {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        redirectTo: window.location.origin,
      },
    });
    if (error) throw new Error(error.message);
    return data;
  },

  async signOut() {
    const { error } = await supabase.auth.signOut();
    if (error) throw new Error(error.message);
  },

  async getCurrentUser() {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    return session?.user ?? null;
  },

  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback);
  },
};
