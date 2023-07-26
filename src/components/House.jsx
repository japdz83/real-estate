// Importar iconos
import { BiBed, BiBath, BiArea } from "react-icons/bi";

const House = ({ house }) => {
    const { image, type, country, address, bedrooms, bathrooms, surface, price } = house;
    return (
        <div className="bg-white shadow-1 p-5 rounded-tl-[90px] w-full max-w-[352px] mx-auto cursor-pointer mb-4 hover:shadow-2xl transition">
            <img className="mb-8" src={image} alt="House Image" />
            <div className="mb-4 flex gap-x-2 text-sm">
                <div className="bg-green-500 rounded-full px-4 text-white">
                    {type}
                </div>
                <div className="bg-violet-500 rounded-full px-4 text-white">
                    {country}
                </div>
            </div>
            <div className="text-lg font-semibold max-w-[260px]">{address}</div>
            <div className="flex my-4 gap-x-4 justify-around" >

                <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                        <BiBed />
                    </div>
                    <div>{bedrooms}</div>
                </div>

                <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                        <BiBath />
                    </div>
                    <div>{bathrooms}</div>
                </div>

                <div className="flex items-center text-gray-600 gap-1">
                    <div className="text-[20px]">
                        <BiArea />
                    </div>
                    <div>{surface}</div>
                </div>
            </div>
            <div className="text-lg font-semibold mb-4 text-violet-600"> $ {price}</div>
        </div>
    );
};

export default House;
