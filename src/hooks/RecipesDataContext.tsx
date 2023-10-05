import { FC, createContext, useState } from "react";
import { RecipesDataContextProps } from "../types/RecipesDataContextProps";
import { RecipesDataProviderProps } from "../types/RecipesDataProviderProps";
import { Recipe } from "../types/Recipe";

export const RecipesDataContext = createContext<RecipesDataContextProps | null>(null)

export const RecipesDataProvider: FC<RecipesDataProviderProps> = ({ children }) => {
    const [recipesData, setRecipesData] = useState<Recipe[] | null>(null)

    return (
        <RecipesDataContext.Provider value={{ recipesData, setRecipesData }}>
            {children}
        </RecipesDataContext.Provider>
    )
}