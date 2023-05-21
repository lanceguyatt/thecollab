import Link from 'next/link'
import { notFound } from 'next/navigation'

import { getBurgerBySlug } from '@/sanity/lib/client'

export default async function BurgerPage({
  params,
}: {
  params: { slug: string }
}) {
  const burger = await getBurgerBySlug(params.slug)

  if (!burger) {
    notFound()
  }

  return (
    <main className="flex-auto">
      <nav>
        <Link href="/">Back</Link>
      </nav>
      <article>
        <div className="container">
          <div className="prose">
            <h1>{burger.name}</h1>
            <pre>{JSON.stringify(burger, null, 2)}</pre>
          </div>
        </div>
      </article>
    </main>
  )
}
