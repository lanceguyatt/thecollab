import { Metadata } from 'next'

import { Input } from '@/components/ui/input'

export const metadata: Metadata = {
  title: 'Book a table',
}

export default function BookPage() {
  return (
    <article>
      <div className="container">
        <h1>Book a table</h1>
        <form>
          <Input type="email" placeholder="Email" />
        </form>
      </div>
    </article>
  )
}
