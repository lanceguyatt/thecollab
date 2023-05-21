import { type Beer, type Burger } from '@/types'
import { createClient } from 'next-sanity'

// import { cache } from 'react'
import { apiVersion, dataset, projectId, useCdn } from '../env'
import {
  beerBySlugQuery,
  burgerBySlugQuery,
  getAllBeersQuery,
  getAllBurgersQuery,
} from './queries'

export const client = createClient({
  projectId,
  dataset,
  apiVersion,
  useCdn,
})

// Wrap the cache function in a way that reuses the TypeScript definitions
// const clientFetch = cache(client.fetch.bind(client))

// // Now use it just like before, fully deduped, cached and optimized by react
// const data = await clientFetch(groq`*[]`)

// // You can use the same generics as before
// const total = await clientFetch<number>(groq`count*()`)

export async function getBurgerBySlug(slug: string): Promise<Burger> {
  if (client) {
    return (await client.fetch(burgerBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getBeerBySlug(slug: string): Promise<Beer> {
  if (client) {
    return (await client.fetch(beerBySlugQuery, { slug })) || ({} as any)
  }
  return {} as any
}

export async function getAllBeers(): Promise<Beer[]> {
  if (client) {
    return (await client.fetch(getAllBeersQuery)) || []
  }
  return []
}

export async function getAllBurgers(): Promise<Burger[]> {
  if (client) {
    return (await client.fetch(getAllBurgersQuery)) || []
  }
  return []
}
