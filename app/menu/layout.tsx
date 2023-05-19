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
    <AccordionTrigger>Is it accessible?</AccordionTrigger>
    <AccordionContent>
      Yes. It adheres to the WAI-ARIA design pattern.
    </AccordionContent>
  </AccordionItem>
</Accordion>
      </div>
    </section>
  )
}