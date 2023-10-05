import { FC } from "react"
import { ListProps } from "../types/ListProps"
import { ListItem } from "./ListItem"

export const List: FC<ListProps> = ({ data }) => {
    return (
        <div className="listContainer">
            {data.map((dataNode) => (
                <ListItem dataNode={dataNode} />
            ))}
        </div>
    )
}