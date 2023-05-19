import { SiteConfig } from 'types'

import { env } from "@/env.mjs"

const url = env.NEXT_PUBLIC_APP_URL


export const siteConfig: SiteConfig = {
  name: 'The Collab',
  description:
    'Signature Brew & We Serve Humans',
  url,
  ogImage: `${url}/og.jpg`,
  links: {
    twitter: 'https://twitter.com/lanceguyatt',
    github: 'https://github.com/lanceguyatt',
  },
}