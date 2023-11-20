
const Hero = () => {
  return (
    <div className="Hero h-[100vh]">
        <div className="container w-full h-[80vh] p-4 flex flex-col place-items-center justify-center text-center">
            <h3 className='font-bold text-[#00df9a] uppercase'>Lorem ipsum dolor sit amet.</h3>
            <h1 className='text-5xl font-bold my-2'>Grow with data </h1>
            <h2 className="text-2xl my-2">Fast, flexible for financing <span className="text-gray-600 font-bold">D2D</span></h2>
            <h3 className="text-lg text-gray-600">Monitor your data analytics to increase your revenue of <span className="font-bold">BTB, BTC</span> platforms.</h3>
            <button className="bg-[#00df9a] text-black py-2 px-10 rounded my-4 font-bold hover:bg-[#46e8b4]">Get Started</button>
        </div>
    </div>
  )
}

export default Hero