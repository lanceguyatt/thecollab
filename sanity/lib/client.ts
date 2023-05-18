import { createClient } from 'next-sanity'

import { apiVersion, dataset, projectId, useCdn } from '../env'
import {
  type MenuItem,
  burgerSlugsQuery,
} from './queries'

export const client = createClient({
  apiVersion,
  dataset,
  projectId,
  useCdn,
})

export async function getAllBurgers(): Promise<MenuItem[]> {
  if (client) {
    return (await client.fetch(burgerSlugsQuery)) || []
  }
  return []
}