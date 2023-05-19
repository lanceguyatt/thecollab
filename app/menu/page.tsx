import Link from 'next/link'

export default function MenuPage() {
  return (
    <main className="flex-auto">
      <article>
        <section className="py-6">
          <div className="container">
            <h2>
              <Link href="/menu/burgers">Burgers</Link>
            </h2>
            <h2>
              <Link href="/menu/beers">Beers</Link>
            </h2>
          </div>
        </section>
      </article>
    </main>
  )
}
