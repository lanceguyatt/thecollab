import Link from 'next/link'

import Nav from '@/components/nav'

export default function Header() {
  return (
    <div className="py-3">
      <div className="container">
        <div className="flex items-center justify-between">
          <Link href="/">The Collab</Link>
          <Nav />
        </div>
      </div>
    </div>
  )
}
