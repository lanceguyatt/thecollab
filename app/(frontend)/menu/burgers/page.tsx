import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import MenuItems from '@/components/menu-items'
import { getAllBurgers } from '@/sanity/lib/client'

const metadata: Metadata = {
  title: 'Burgers',
}

export default async function BurgersPage() {
  const burgers = await getAllBurgers()

  if (!burgers) {
    notFound()
  }

  return burgers && <MenuItems name="Burgers" url="/menu/burgers" items={burgers} />
}
