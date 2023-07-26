// importar los datos
import { housesData } from '../data.js'

// importar los parametros
import { useParams, Link } from 'react-router-dom';

// importar los iconos
import { BiBed, BiBath, BiArea } from "react-icons/bi";


const PropertyDetails = () => {
    // Obtener la casas por id
    const { id } = useParams();
    // console.log(id)

    // obtener las casas en base a la id
    const house = housesData.find(house => {
        return house.id === parseInt(id)
    })

    console.log(house.name)

    return (
        <section className="py-5">
            <div className="container mx-auto min-h-[400px] mb-14">
                <div className='flex flex-col lg:flex-row lg:items-center lg:justify-between'>
                    <div className=''>
                        <h2 className='font-semibold text-2xl'>{house.name}</h2>
                        <h3 className='text-lg mb-4'>{house.address}</h3>
                    </div>
                    <div className='mb-4 lg:mb-0 flex gap-x-2 text-sm '>
                        <div className='bg-green-500 rounded-full px-4 text-white'>{house.type}</div>
                        <div className='bg-violet-500 rounded-full px-4 text-white'>{house.country}</div>
                    </div>
                    <div className='text-3xl font-semibold text-violet-600'> $ {house.price} </div>
                </div>
                {/* Imagen de propiedad */}
                <div className='flex flex-col items-start gap-8 lg:flex-row'>
                    <div className='max-w-[768px]'>
                        <div className='mb-8'>
                            <img src={house.imageLg} alt="House Image" />
                        </div>
                        <div className='flex gap-x-6 text-violet-700 mb-4'>
                            <div className='flex gap-x-2 items-center'>
                                <BiBed className='text-2xl' />
                                <div>{house.bedrooms}</div>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <BiBath className='text-2xl' />
                                <div>{house.bathrooms}</div>
                            </div>
                            <div className='flex gap-x-2 items-center'>
                                <BiArea className='text-2xl' />
                                <div>{house.surface}</div>
                            </div>
                        </div>
                        <div>{house.description}</div>
                    </div>
                    <div className='flex-1 bg-white w-full mb-8 border border-gray-300 rounded-lg px-6 py-8'>
                        <div className='flex items-center gap-x-4 mb-8'>
                            <div className='w-20 h-20 p-1 rounded-full border border-gray-300'>
                                <img src={house.agent.image} alt="Agente" />
                            </div>
                            <div>
                                <div className='font-bold text-lg'>{house.agent.name}</div>
                                <Link to='' className='text-violet-700 text-sm'> View Listings </Link>
                            </div>
                        </div>
                        {/* Formulario */}
                        <form className='flex flex-col gap-y-4'>
                            <input
                                className='border border-gray-300 focus:border-violet-700 outline-none px-4 h-14 rounded w-full text-sm'
                                type="text"
                                placeholder='Name*'
                            />
                            <input
                                className='border border-gray-300 focus:border-violet-700 outline-none px-4 h-14 rounded w-full text-sm'
                                type="text"
                                placeholder='Email*'
                            />
                            <input
                                className='border border-gray-300 focus:border-violet-700 outline-none px-4 h-14 rounded w-full text-sm'
                                type="text"
                                placeholder='Phone'
                            />

                            <textarea
                                className='border border-gray-300 focus:border-violet-700 outline-none resize-none p-4 h-36 rounded w-full text-sm'
                                placeholder='Message'
                                defaultValue={'Hello I am interested in [Modern Apartament]'}
                            ></textarea>
                            <div className='flex gap-x-2'>
                                <button
                                    className='bg-violet-700 hover:bg-violet-800 text-white p-4 rounded text-sm w-full transition'>
                                    Send message
                                </button>
                                <button
                                    className='border border-violet-700 text-violet-700 hover:border-violet-500 hover:text-violet-500 p-4 rounded text-sm w-full transition '
                                >
                                    Call
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PropertyDetails