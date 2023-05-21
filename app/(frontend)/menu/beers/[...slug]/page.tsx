// https://nextjs.org/docs/app/api-reference/functions/generate-metadata

import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { Badge } from '@/components/ui/badge'
import { getBeerBySlug } from '@/sanity/lib/client'

interface Props {
  params: { slug: string }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const beer = await getBeerBySlug(params.slug)

  const { name, description } = beer
  const url = `/menu/beers/${beer.slug}`

  return {
    title: name,
    description,
    openGraph: {
      title: name,
      description,
      url,
    },
    twitter: {
      title: name,
      description,
    },
  }
}

export default async function BeerPage({ params }: Props): Promise<any> {
  const { slug } = params
  const beer = await getBeerBySlug(slug[0])

  console.log(params)

  if (!beer) {
    notFound()
  }

  return (
    <>
      <nav>
        <Link href="/menu/beers">Back</Link>
      </nav>

      <article>
        <h1>
          {beer.name}{' '}
          {beer.veganFriendly && (
            <Badge className="bg-[green]">Vegan friendly</Badge>
          )}
        </h1>
        <dl>
          <dt>IBU</dt>
          <dd>{beer.ibu}</dd>
        </dl>
        <div className="prose">
          <p>{beer.description}</p>
          <pre>{JSON.stringify(beer, null, 2)}</pre>
        </div>
      </article>
    </>
  )
}
