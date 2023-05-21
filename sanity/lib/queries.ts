import { groq } from 'next-sanity'

const menuItemFields = groq`
  _id,
  name,
  description,
  "slug": slug.current,
`

export const getAllBeersQuery = groq`
*[_type == "beer"] {
  ${menuItemFields}
}
`

export const getAllBurgersQuery = groq`
*[_type == "burger"] {
  ${menuItemFields}
}
`

export const beerBySlugQuery = groq`
*[_type == "beer" && slug.current == $slug][0] {
  _id,
  name,
  description,
  "slug": slug.current,
  images,
  ibu,
  abv,
  veganFriendly,
}
`

export const burgerBySlugQuery = groq`
*[_type == "burger" && slug.current == $slug][0] {
  _id,
  name,
  description,
  "slug": slug.current,
}
`
