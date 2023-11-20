/* eslint-disable no-unused-vars */
import Single from '../assets/Single.jpg';
import Double from '../assets/Double.jpg';
import Triple from '../assets/Triple.jpg';

const Cards = () => {
    return (
        <div className="Cards py-[10rem] px-4 w-full bg-white text-black">
            <div className="contaniner max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
                <div className="card shadow-xl rounded-lg p-4 my-4 flex flex-col w-full hover:scale-105 duration-300">
                    <img src={Single} alt="/" className="w-20 mt-[-3rem] mx-auto"/>
                    <h2 className="text-center text-2xl py-8 font-bold">Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className="text-center font-medium my-2">
                        <p className='border-b py-2 mx-8'>500 GB Storage</p>
                        <p className='border-b py-2 mx-8'>1 User Allocated</p>
                        <p className='border-b py-2 mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-[#00df9a] my-4 py-2 w-[30%] mx-auto rounded font-bold hover:bg-[#71fec8]'>Start Trial</button>
                </div>

                <div className="card bg-gray-100 shadow-xl rounded-lg p-4 md:my-0 my-8 flex flex-col w-full hover:scale-105 duration-300">
                    <img src={Double} alt="/" className="w-20 mt-[-3rem] mx-auto"/>
                    <h2 className="text-center text-2xl py-8 font-bold">Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className="text-center font-medium my-2">
                        <p className='border-b py-2 mx-8'>500 GB Storage</p>
                        <p className='border-b py-2 mx-8'>1 User Allocated</p>
                        <p className='border-b py-2 mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-[#000] text-[#00df9a] my-4 py-2 w-[30%] mx-auto rounded font-bold hover:bg-[#71fec8]'>Start Trial</button>
                </div>

                <div className="card shadow-xl rounded-lg p-4 my-4 flex flex-col w-full hover:scale-105 duration-300">
                    <img src={Triple} alt="/" className="w-20 mt-[-3rem] mx-auto"/>
                    <h2 className="text-center text-2xl py-8 font-bold">Single User</h2>
                    <p className='text-center text-4xl font-bold'>$149</p>
                    <div className="text-center font-medium my-2">
                        <p className='border-b py-2 mx-8'>500 GB Storage</p>
                        <p className='border-b py-2 mx-8'>1 User Allocated</p>
                        <p className='border-b py-2 mx-8'>Send up to 2GB</p>
                    </div>
                    <button className='bg-[#00fd9a] my-4 py-2 w-[30%] mx-auto rounded font-bold hover:bg-[#71fec8]'>Start Trial</button>
                </div>
            </div>
        </div>
    )
}

export default Cards