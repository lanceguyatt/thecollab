import { siteConfig } from "@/config/site";

export default function Home() {
  return (
    <article>
      <h1>{siteConfig.name}</h1>
    </article>
  )
}