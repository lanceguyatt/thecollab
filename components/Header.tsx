import Link from 'next/link'

const nav = [
  {
    name: 'Menu',
    url: '/menu',
  },
  {
    name: 'Book',
    url: '/book',
  },
  {
    name: 'Club',
    url: '/club',
  },
]

export default function Header() {
  return (
    <div className="py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">The Collab</Link>
          <nav>
            <ul className="flex items-center gap-3">
              {nav.map(({ name, url }) => (
                <li key={url}>
                  <Link href={url}>{name}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}
