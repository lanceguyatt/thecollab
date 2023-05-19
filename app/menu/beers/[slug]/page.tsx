import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getBeerBySlug } from '@/sanity/lib/client'

export default async function BeerPage({
  params,
}: {
  params: { slug: string }
}) {
  const beer = await getBeerBySlug(params.slug)

  if (!beer) {
    notFound()
  }

  return (
    <>
      <nav className='container'>
        <Link href="/menu/beers">Back</Link>
      </nav>
      <main className="flex-auto">
        <article>
          <div className="container">
            <h1>{beer.name}</h1>
            {/* {beer.images.map((image) => (
              <Image
                key={image.value}
                src={urlBuilder().image(image.value).width(image.isInline ? 100 : 800).fit('max').auto('format').url()}
                width={image.isInline ? 100 : 800}
                height={300}
                alt={image.value.alt || ' '}
                loading="lazy"
                style={{
                  // Display alongside text if image appears inside a block text span
                  display: image.isInline ? 'inline-block' : 'block',
                  // Avoid jumping around with aspect-ratio CSS property
                  aspectRatio: image.width / image.height,
                }}
              />
            ))} */}

            <div className="prose">
              <p>{beer.description}</p>
              <pre>{JSON.stringify(beer, null, 2)}</pre>
            </div>
          </div>
        </article>
      </main>
    </>
  )
}
