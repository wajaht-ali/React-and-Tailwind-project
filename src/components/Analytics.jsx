import img from "../assets/react.svg";
const Analytics = () => {
  return (
    <div className="Analytics h-screen w-full bg-white text-black">
        <section className='h-full w-full p-5 flex flex-col justify-around md:flex-row md:justify-center md:items-center'>
            <div className="image w-full h-[40%] flex justify-center md:w-[50%]">
                <img src={img} alt="image" className='h-full'/>
            </div>
            <div className="content md:w-[50%]">
                <h3 className="text-lg text-[#00df9a] font-bold">Data Analytics Dashborad</h3>
                <h1 className="text-3xl font-bold my-1">Manage Data Analytics Centrally</h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid hic ullam ipsa culpa dignissimos maxime suscipit quia nam, est repellendus, perferendis, dolores exercitationem tenetur rerum deserunt quaerat incidunt reiciendis dolorem.</p>
                <button className="bg-[#000] text-[#00df9a] py-2 px-10 rounded my-4 font-bold hover:bg-[#46e8b4] hover:text-[#000]">Get Started</button>
            </div>
        </section>
    </div>
  )
}

export default Analytics