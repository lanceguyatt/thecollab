import '@/styles/globals.css'

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head />
      <body>
        <main className="flex-auto">{children}</main>
      </body>
    </html>
  )
}
