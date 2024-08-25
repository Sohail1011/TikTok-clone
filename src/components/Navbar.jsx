import { FaBars, FaSearch } from "react-icons/fa"
import { Theme } from "./Theme"

export const Navbar = () => {
  return (
    <div className="navbar flex justify-between px-7">
      <button className="btn btn-ghost"><FaBars size={25} /></button>
      <label htmlFor="video" className="input input-bordered rounded-full">
        <input type="text" id="video" />
        <FaSearch />
      </label>
      <Theme />
    </div>
  )
}
