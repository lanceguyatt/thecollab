// https://nextjs.org/docs/app/api-reference/functions/generate-metadata

import { Metadata } from 'next';
import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getBeerBySlug } from '@/sanity/lib/client'

interface Props  {
  params: { slug: string };
};

export async function generateMetadata(
  { params }: Props,
): Promise<Metadata> {
  const beer = await getBeerBySlug(params.slug);

  const { name, description } = beer
  const url = `/menu/beers/${beer.slug}`

  return {
    title: name,
    description,
    openGraph: {
      title: name,
      description,
      url
    },
    twitter: {
      title: name,
      description,
    }
  };
}

export default async function BeerPage({
  params,
}: Props) {
  const beer = await getBeerBySlug(params.slug)

  if (!beer) {
    notFound()
  }

  return (
    <>
      <nav className='container'>
        <Link href="/menu/beers">Back</Link>
      </nav>
        <article>
          <h1>{beer.name}</h1>
          <div className="prose">
            <p>{beer.description}</p>
            <pre>{JSON.stringify(beer, null, 2)}</pre>
          </div>
        </article>
    </>
  )
}
