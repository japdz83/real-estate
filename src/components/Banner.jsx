import Image from '../assets/img/house-banner.png'
import Search from './Search';

const Banner = () => {
    return (
        <section className='h-full py-2 mt-5 max-h-[640px] mb-8 xl:mb-24 w-full'>
            <div className="flex flex-col md:flex-row lg:flex-row justify-between lg:justify-around gap-8">
                <div className=" flex flex-col items-center lg:items-start text-center lg:text-left justify-center flex-1 px-6 lg:pl-10">
                    <h1 className='text-4xl lg:text-[58px] font-semibold leading-none mb-6'>
                        <span className='text-violet-700'>Rent</span>Your Dream House With Us.
                    </h1>
                    <p className='max-w-[480px] text-gray-600 dark mb-8'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi facilis provident repellat dolore? Quia, placeat excepturi ipsam porro quo voluptatem.
                    </p>
                </div>
                <div className="hidden flex-1 lg:flex justify-end items-end ">
                    <img src={Image} alt="Banner Principal" />
                </div>
            </div>
            <Search />
        </section>
    )
}

export default Banner