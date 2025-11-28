import GridListContainer from "@/components/custom/grids/grids-list-container"
import HomeHeader from "@/components/custom/home-header"

type Props = {}

export default function Home({ }: Props) {
    return (
        <main className="main-content p-6 flex flex-col gap-6">
            <HomeHeader />
            <GridListContainer />
        </main>
    )
}