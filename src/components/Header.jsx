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
        <a href="/" className="btn border-none btn-ghost text-[1rem]">
          <FaHome size={25} />
          Home
        </a>
        <a href='/explore'  className="btn border-none btn-ghost text-[1rem]">
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
      </nav>
      {
        !login ? <Form event={() => handleClick()} /> : <article className='hidden'></article>
      }
    </header>
  )
}
