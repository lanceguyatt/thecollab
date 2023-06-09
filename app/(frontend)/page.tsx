import { siteConfig } from '@/config/site'
import Video from '@/components/video'

const metadata = {
  title: siteConfig.name,
  description: siteConfig.description,
}

export default function Home() {
  return (
    <article>
      <Video videoId="UG6Nk25YVnA" />
    </article>
  )
}
