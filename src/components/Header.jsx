import { FaCamera, FaCompass, FaHeart, FaHome } from 'react-icons/fa'
import { FaPerson } from 'react-icons/fa6'

export function Header() {

  const menu = [
    { name: 'For You', icon: <FaHome size={25} /> },
    { name: 'Explore', icon: <FaCompass size={25} /> },
    { name: 'Follow', icon: <FaHeart size={25} /> },
    { name: 'LIVE', icon: <FaCamera size={25} /> },
    { name: 'Profile', icon: <FaPerson size={25} /> }
  ]

  return (
    <header className="h-10 px-3 py-2">
      <nav className="flex justify-end gap-2 items-center">
        {
          menu.map((m) => (
            <button className="btn border-none btn-ghost text-[1rem]">
              {m.icon}
              {m.name}
            </button>
          ))
        }
      </nav>
    </header>
  )
}
