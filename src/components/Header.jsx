import { Link } from "react-router-dom"

import Logo from "../assets/img/logo.svg"



const Header = () => {
    return (
        <>
            <header className="py-6 border-b bg-white w-full ">
                <div className="container mx-auto flex justify-between items-center">
                    {/* Logo */}
                    <Link to='/'>
                        <img src={Logo} alt="Logo" />
                    </Link>
                    <div className="flex items-center gap-6">
                        <Link
                            className='hover:text-violet-900 font-semibold border-2 border-violet-900 py-3 px-5 rounded-full  transition' to="/" >
                            Login
                        </Link>
                        <Link className='bg-violet-700 hover:bg-violet-800 text-white py-3 px-5 rounded-full transition ' to="/" >
                            Sing Up
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default Header