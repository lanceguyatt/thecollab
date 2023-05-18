import { groq } from 'next-sanity'

export const burgerSlugsQuery = groq`
*[_type == "burger" && defined(slug.current)][].slug.current
`

export interface MenuItem {
  name: string
  description?: string
}