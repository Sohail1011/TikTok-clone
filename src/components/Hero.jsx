import { FaSearch, FaTiktok } from "react-icons/fa";

export function Hero() {
  return (
    <article className="flex flex-col justify-center items-center min-h-[55rem] gap-y-[2rem]">
      <FaTiktok size={200} />
      <label htmlFor="" className="input input-bordered flex justify-between items-center border-[0.2rem] w-[30rem] rounded-full">
        <input type="text" placeholder="Search" />
        <FaSearch />
      </label>
    </article>
  )
}
