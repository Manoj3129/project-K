import React from "react"

const NavBar = ()=>{
    return(
        <div className="flex justify-around h-16 items-center border-2 border-black">
            <h1 className="text-xl font-bold">BolgVerse</h1>
            <button className="text-gray-700 hover:bg-blue-300 px-5 py-2 rounded-lg cursor-pointer">Home</button>
            <div className=" flex gap-6">
                <button className="font-semibold text-gray-700">Sign In</button>
                <button className=" bg-blue-600 text-white px-4 py-2 rounded-lg cursor-pointer  ">Sign Up</button>
            </div>
        </div>
    )
}

export default NavBar