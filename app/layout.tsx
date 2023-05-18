import 'styles/global.css'

import { Footer, Header } from 'components'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col min-h-screen w-full bg-background text-foreground'>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
