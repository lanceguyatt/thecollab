import { Metadata } from 'next'
import { notFound } from 'next/navigation'

import MenuItems from '@/components/menu-items'
import { getAllBeers } from '@/sanity/lib/client'

const metadata: Metadata = {
  title: 'Beers',
}

export default async function BeerPage() {
  const beers = await getAllBeers()

  if (!beers) {
    notFound()
  }

  return beers && <MenuItems name="Beers" items={beers} />
}
