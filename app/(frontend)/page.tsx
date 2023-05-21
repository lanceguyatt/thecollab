import { siteConfig } from '@/config/site'

const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function Home() {
  return (
    <article>
      <div className="container">
        <h1 className="text-center">{siteConfig.name}</h1>
      </div>
    </article>
  )
}
