import { Metadata } from 'next';

interface IMenuLayout {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Menu'
}

export default function MenuLayout({ children }: IMenuLayout) {
  return (
    <section className="py-6 bg-primary text-primary-foreground">
      <div className="container">
        <h1 className="text-4xl font-bold">Menu</h1>
        {children}
      </div>
    </section>
  )
}