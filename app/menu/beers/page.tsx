import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getAllBeers } from '@/sanity/lib/client'

const metadata: Metadata = {
  title: 'Beers'
}

export default async function BeerPage() {
  const beers = await getAllBeers()

  if (!beers) {
    notFound()
  }

  return (
    <section>
      <h2>Beer</h2>
      <div className="grid auto-cols-fr">
        <div className="grid gap-6 grid-cols-4">
          {beers.map((beer) => (
            <article key={beer._id} className="bg-card text-foreground flex flex-col p-6">
              <h2>
                <Link href={`/menu/beers/${beer.slug}`}>{beer.name}</Link>
              </h2>
              <p>{beer.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
