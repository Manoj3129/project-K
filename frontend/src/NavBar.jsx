import React from "react"
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className=" w-[90%] flex justify-around  h-16 items-center border-b-1 border-black">
            <h1 className="text-xl font-bold">BlogVerse</h1>
            <Link to="/" className="text-gray-700 hover:bg-blue-300 px-5 py-2 rounded-lg cursor-pointer">Home</Link>
            <div className=" flex gap-6">
                <Link to="/SignIn" className=" px-4 py-2 font-semibold text-gray-700">Sign In</Link>
                <Link to="/SignUp" className=" bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer  ">Sign Up</Link>
            </div>
        </div>
    )
}

export default NavBar