import {
    FaDribbbleSquare,
    FaFacebookSquare,
    FaGithubSquare,
    FaInstagramSquare,
    FaTwitterSquare
} from 'react-icons/fa';
const Footer = () => {
    return (
        <div className="Footer max-w-[1240px] mx-auto py-16 px-4 grid lg:grid-cols-3 gap-8 text-gray-300">
            <div>
                <h1 className="w-full text-3xl font-bold text-[#00df9a]">React.</h1>
                <p className='py-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus repudiandae libero, quis ex voluptatum obcaecati distinctio impedit sint aut unde.</p>
                <div className='flex justify-between md:w-[75%] my-6'>
                    <FaFacebookSquare size={30}/>
                    <FaInstagramSquare size={30}/>
                    <FaGithubSquare size={30}/>
                    <FaTwitterSquare size={30}/>
                    <FaDribbbleSquare size={30}/>
                </div>
            </div>
        </div>
    )
}

export default Footer