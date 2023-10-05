import { FC } from "react"
import { ListItemProps } from "../types/ListItemProps"

export const ListItem: FC<ListItemProps> = ({ dataNode }) => {
    return (
        <div className="listItemContainer" key={dataNode.id}>
            <h4 className="listItemTitle">{dataNode.title}</h4>
            <p className="listItemSubtitle">{dataNode.description}</p>
        </div>
    )
}