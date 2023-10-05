import { List } from "../components/List"
import { SearchBar } from "../components/SearchBar"
import { Recipe } from "../types/Recipe"
import { RecipeStep } from "../types/RecipeStep"

export const RootPage = () => {
    const fakeData = [
        {
            id: 0,
            title: '123 title title 123 123 title title 123 title 123 123 title title 123',
            description: '123 desc',
            steps: [
                { step: 1, description: '123' }
            ] as RecipeStep[]
        },
        {
            id: 0,
            title: '123 title',
            description: '123 desc',
            steps: [
                { step: 1, description: '123' }
            ] as RecipeStep[]
        }
    ] as unknown as Recipe[]

    return (
        <>
            <div className='headerContainer'>
                <img className='titleImage' src='../assets/cookingGuy.png' alt='Cooking boy' />
                <h1 className='titleText'>Recipes Book</h1>
            </div>

            <div>
                <SearchBar placeholder='Search for recipe' />
                {
                    fakeData === undefined || fakeData === null || fakeData.length <= 0
                        ?
                        <div className='emptyDataContainer'>
                            <h1>Looks like there's nothing.<br /> Try a different search or add first item.</h1>
                        </div>
                        :
                        <List data={fakeData} />
                }
            </div>
        </>
    )
}