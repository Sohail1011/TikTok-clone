export function Header() {

  const menu = [
    { name: 'For You' },
    { name: 'Explore' },
    { name: 'Follow' },
    { name: 'LIVE' },
    { name: 'Profile' }
  ]

  return (
    <header className="h-10 px-3">
      <nav className="flex justify-end gap-2 items-center">
        {
          menu.map((m) => (
            <button className="btn border-none btn-ghost">{m.name}</button>
          ))
        }
      </nav>
    </header>
  )
}
