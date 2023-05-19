import { groq } from 'next-sanity'

export const beerBySlugQuery = groq`
*[_type == "beer" && slug.current == $slug][0] {
  _id,
  name,
  description,
  "slug": slug.current,
  images,
  ibu,
  abv
}
`

export const burgerBySlugQuery = groq`
*[_type == "burger" && slug.current == $slug][0] {
  _id,
  name,
  description,
  "slug": slug.current,
  images,
}
`

export const getAllBeersQuery = groq`
*[_type == "beer"] {
  _id,
  name,
  description,
  "slug": slug.current,
  images,
  ibu,
  abv,
  hops,
}
`

export interface Beer {
  _id: string
  name: string
  description: string
  slug: string
  hops?: string
  abv?: string
  ibu?: string
  images?: {}
}

export interface Burger {
  name: string
  description?: string
}