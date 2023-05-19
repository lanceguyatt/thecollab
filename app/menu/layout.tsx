import { Metadata } from 'next';

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

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
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Do we need to book a table?</AccordionTrigger>
            <AccordionContent>
              <p>We would thoroughly recommend it, its a guaranteed avenue to instant happiness!   We operate a waiting list at busy periods so you can join the queue and be notified when a table is available. We always try to accommodate everyone in a timely fashion. If you would like to book a table, just follow the link above.</p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}