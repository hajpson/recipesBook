import { useContext } from "react"
import { RecipesDataContext } from "./RecipesDataContext"

export const useRecipesData = () => {
    const context = useContext(RecipesDataContext)

    if (!context) {
        throw new Error('Context is null')
    }

    return context
}