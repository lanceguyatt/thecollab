import Header from 'components/Header'
import { Head, Html, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className="flex flex-col min-h-screen w-full">
        <Header />
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
