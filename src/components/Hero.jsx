import { useState, useEffect } from "react";
import { FaSearch, FaTiktok } from "react-icons/fa";

export function Hero() {

  const [search, setSearch] = useState("");

  useEffect(() => {
  }, [search])

  function handleSearch(event) {
    event.preventDefault();
    setSearch(event.target.value);
  }

  return (
    <div className="flex flex-col justify-center items-center min-h-[55rem] gap-y-[2rem]">
      <FaTiktok size={200} />
      <label htmlFor="search" className="input input-bordered flex justify-between items-center border-[0.2rem] w-[30rem] rounded-full">
        <input type="text" placeholder="Search" value={search} onChange={handleSearch} id="search" />
        <FaSearch />
      </label>
    </div>
  )
}
