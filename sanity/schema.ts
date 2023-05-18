import { SchemaTypeDefinition } from 'sanity'
import allergen from 'schemas/documents/allergen'
import award from 'schemas/documents/award'
import beer from 'schemas/documents/beer'
import burger from 'schemas/documents/burger'
import hops from 'schemas/documents/hops'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [allergen, award, beer, burger, hops],
}
