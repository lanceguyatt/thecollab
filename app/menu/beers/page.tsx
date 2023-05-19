import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getAllBeers } from '@/sanity/lib/client'

export default async function BeerPage() {
  const beers = await getAllBeers()

  if (!beers) {
    notFound()
  }

  return (
    <main className="flex-auto">
      <section>
        <div className="container">
          <h1>Beer</h1>
          <div className="grid auto-cols-fr">
            <pre>{JSON.stringify(beers, null, 2)}</pre>
            <div className="grid gap-6 grid-cols-4">
              {beers.map((beer) => (
                <article key={beer._id} className="bg-card flex flex-col bg-slate-200 p-6">
                  <h2>
                    <Link href={`/menu/beers/${beer.slug}`}>{beer.name}</Link>
                  </h2>
                  <p>{beer.description}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
