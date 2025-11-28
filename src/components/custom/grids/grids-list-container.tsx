import Empty from "../empty"
import { GridList } from "./grid-list"
import GridListToolbar from "./grid-list-toolbar"

type Props = {}

export default function GridListContainer({ }: Props) {
    return (
        <div className="grid-list-container flex flex-col gap-4">
            <GridListToolbar
                mygrids={<GridList />}
                starred={<Empty />}
            />
        </div>
    )
}