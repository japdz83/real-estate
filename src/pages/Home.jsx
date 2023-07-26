import Banner from "../components/Banner"
import HouseList from "../components/HouseList"

const Home = () => {
    return (
        <>
            <div className=" mx-auto py-3 min-h-[1800px] bg-white">
                <Banner />
                <HouseList />
            </div>
        </>
    )
}

export default Home