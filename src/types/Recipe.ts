import { RecipeStep } from "./RecipeStep"

export type Recipe = {
    id: string,
    title: string,
    description: string,
    steps: RecipeStep[]
}