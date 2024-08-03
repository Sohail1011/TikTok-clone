import { FaCamera, FaCompass, FaHeart, FaHome } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'
import { useState } from 'react'
import { Form } from './Form'
import { Theme } from './Theme'

export function Header() {

  const [login, setLogin] = useState(true)

  const handleClick = () => {
    setLogin(!login)
  }

  return (
    <header className="h-10 px-3 py-2">
      <nav className="flex justify-end gap-2 items-center">
        <Theme />
        <button className="btn border-none btn-ghost text-[1rem]">
          <FaHome size={25} />
          For You
        </button>
        <button className="btn border-none btn-ghost text-[1rem]">
          <FaCompass size={25} />
          Explore
        </button>
        <button className="btn border-none btn-ghost text-[1rem]">
          <FaHeart size={25} />
          Follow
        </button>
        <button className="btn border-none btn-ghost text-[1rem]">
          <FaCamera size={25} />
          Live
        </button>
        <button className="btn border-none btn-ghost text-[1rem]" onClick={() => handleClick()}>
          <FaPerson size={25} />
          Profile
        </button>
      </nav>
      {
        !login ? <Form event={() => handleClick()} /> : <article className='hidden'></article>
      }
    </header>
  )
}
