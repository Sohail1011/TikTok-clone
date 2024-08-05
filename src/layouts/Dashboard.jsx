import { useState } from 'react'
import { FaCamera, FaCompass, FaHeart, FaHome, FaTiktok } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'
import { Form } from '../components/Form'

export const Dashboard = ({ children }) => {

    const [login, setLogin] = useState(true)

    const handleClick = () => {
        setLogin(!login)
    }

    return (
        <>
            <article className='flex relative flex-row items-center'>
                <section className='bg-transparent min-w-[20rem] min-h-[59.4rem] sticky flex flex-col items-center gap-5'>
                    <div className='py-[2rem]'>
                        <FaTiktok size={150} />
                    </div>
                    <div className='flex flex-col btn-wide'>
                        <a href="/" className="btn border-none btn-ghost text-[1rem]">
                            <FaHome size={25} />
                            Home
                        </a>
                        <a href='/explore' className="btn border-none btn-ghost text-[1rem]">
                            <FaCompass size={25} />
                            Explore
                        </a>
                        <a href='/follow' className="btn border-none btn-ghost text-[1rem]">
                            <FaHeart size={25} />
                            Follow
                        </a>
                        <a href='/live' className="btn border-none btn-ghost text-[1rem]">
                            <FaCamera size={25} />
                            Live
                        </a>
                        <button className="btn border-none btn-ghost text-[1rem]" onClick={() => handleClick()}>
                            <FaPerson size={25} />
                            Profile
                        </button>
                    </div>
                </section>
                <section>
                    {children}
                </section>
                {
                    !login ? <Form event={() => handleClick()} /> : <article className='hidden'></article>
                }
            </article>
        </>
    )
}
