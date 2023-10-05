import { Recipe } from "./Recipe"

export type RecipesDataContextProps = {
    recipesData: Recipe[] | null,
    setRecipesData: React.Dispatch<React.SetStateAction<Recipe[] | null>>
}