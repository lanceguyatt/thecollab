import { siteConfig } from "@/config/site";

const metadata = {
  title: siteConfig.name,
  description: siteConfig.description
}

export default function Home() {
  return (
    <article>
      <h1>{siteConfig.name}</h1>
    </article>
  )
}