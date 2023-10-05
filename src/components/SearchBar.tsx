import { FC } from "react"
import { SearchBarProps } from "../types/SearchBarProps"

export const SearchBar: FC<SearchBarProps> = ({ placeholder }) => {
    return (
        <div>
            <input className="searchBar" placeholder={placeholder}></input>
        </div>
    )
}