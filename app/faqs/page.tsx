import { Metadata } from 'next';



import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';





const faqs = [
  {
    question: 'Do we need to book a table?',
    answer: 'We would thoroughly recommend it, its a guaranteed avenue to instant happiness! We operate a waiting list at busy periods so you can join the queue and be notified when a table is available. We always try to accommodate everyone in a timely fashion. If you would like to book a table, just follow the link above.'
  },
]


export const metadata: Metadata = {
  title: 'Frequently asked Questions',
}

export default function FAQPage() {
  return (
    <section className="">
      <div className="container">
        <h1 className="text-4xl font-bold">Frequently asked Questions</h1>
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger>Do we need to book a table?</AccordionTrigger>
            <AccordionContent>
              <p>
                We would thoroughly recommend it, its a guaranteed avenue to
                instant happiness! We operate a waiting list at busy periods so
                you can join the queue and be notified when a table is
                available. We always try to accommodate everyone in a timely
                fashion. If you would like to book a table, just follow the link
                above.
              </p>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}