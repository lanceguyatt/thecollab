import { Metadata } from 'next'

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

interface IMenuLayout {
  children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Menu',
}

export default function MenuLayout({ children }: IMenuLayout) {
  return (
    <section>
      <div className="container">
        <h1 className="text-4xl font-bold">Menu</h1>
        {children}
      </div>
    </section>
  )
}
