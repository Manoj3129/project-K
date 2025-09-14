const ProductCart = ()=>{
    //  border:1px solid black
    // width:300px;
    // display:flex;
    // flex-direction
    // small-sm
    // medium-md
    // large-lg
    // padding-top:4px
    // border-radius
    return (
        <div className="border-4 border-black w-[300px] flex flex-col  justify-center items-center gap-10 p-4 rounded-lg bg-linear">
            <img src="vite.svg"alt="" className="w-[200px] h-[200px] border-4 border-blue-600 rounded-full"/>
          <div className="flex flex-col gap-4 items-center">
            <h2 className="font-bold text-lg text-blue-700">Product 1</h2>
            <p className="text-x1 text-green-600 text-center">This is Your Sample Product and you can also try this product</p>
            <p className="text-2xl font-bold text-pink-500">$12.99</p>
          </div>
            <button className="bg-pink-600 text-white w-[90%] py-4 rounded-2xl cursor-pointer hover:bg-gray-500">Buy Now</button>
        </div>
        
    )
}

export default ProductCart;