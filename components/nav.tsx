'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'

const nav = [
  {
    name: 'Menu',
    url: '/menu',
  },
  {
    name: 'Club',
    url: '/club',
  },
  {
    name: 'Book',
    url: '/book',
  },
]

export default function Nav() {
  const router = useRouter()
  // const currentRoute = router.pathname

  return (
    <nav>
      <ul className="flex items-center gap-3">
        {nav.map(({ name, url }) => (
          <li key={url}>
            <Link href={url}>{name}</Link>
          </li>
        ))}
      </ul>
    </nav>
  )
}
