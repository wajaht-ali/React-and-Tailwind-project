
const Newsletter = () => {
    return (
        <div className="Newsletter h-[40vh] w-full flex flex-col items-center p-4 md:flex-row justify-center md:justify-around">
            <div className="content text-center w-full">
                <h2 className="text-xl md:text-2xl font-bold my-3">Want tips & tricks to optimize your flow?</h2>
                <p className='text-sm'>Sign up to our newsletter and stay up to date.</p>
            </div>
            <div className="right text-center my-2 md:my-0 w-full">
                <div >
                    <input type="text" className="p-1 rounded" placeholder="Enter your email..." />
                    <button className="bg-[#00df9a] text-black py-1 mx-2 px-2 rounded my-4 font-bold hover:bg-[#46e8b4]">Notify Me</button>
                </div>

                <p className="text-sm">We care about the protection of your data. Read our <br /> <span className="text-[#00df9a] underline">Privacy Policy</span></p>
            </div>
        </div>
    )
}

export default Newsletter