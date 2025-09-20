import React from "react"
import { Link } from 'react-router-dom'
const NavBar = () => {
    return (
        <div className=" w-full flex justify-around h-16 items-center border-b-1 border-black">
            <h1 className="text-xl font-bold">BlogVerse</h1>
            <Link to="/Home" className="text-gray-700 hover:bg-blue-300 px-5 py-2 rounded-lg cursor-pointer">Home</Link>
            <div className=" flex gap-6">
                <Link to="/SignUp" className="font-semibold text-gray-700">Sign In</Link>
                <Link to="/SignIn" className=" bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer  ">Sign Up</Link>
            </div>
        </div>
    )
}

export default NavBar