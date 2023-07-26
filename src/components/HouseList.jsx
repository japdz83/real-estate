import { useContext } from "react";


// Importar el Context
import { HouseContext } from "./HouseContext";

// Importar componentes
import House from "./House";

// Importar Link
import { Link } from "react-router-dom";

// Importar iconos
import { ImSpinner2 } from "react-icons/im";

const HouseList = () => {

    const { houses, loading } = useContext(HouseContext)

    // console.log(houses)
    if (loading) {
        return (<ImSpinner2 className="mx-auto animate-spin text-violet-700 text-4xl mt-[200px]" />)
    }

    if (houses.length < 1) {
        return (<div className="text-center text-gray-400 text-4xl mt-40 md:mt-64" > Sorry, nothing found </div>)
    }

    return (
        <>
            <section className="mb-20 md:mt-[150px] lg:mt-[200px]">
                <div className="contaier mx-auto ">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14">
                        {
                            houses.map((house, index) => {
                                return (
                                    <Link to={`/property/${house.id}`} key={index}>
                                        <House house={house} />
                                    </Link>
                                )
                            })
                        }
                    </div>
                </div>
            </section>
        </>
    );
};

export default HouseList;
