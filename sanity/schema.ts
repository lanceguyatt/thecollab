import { SchemaTypeDefinition } from 'sanity'
import allergen from 'schemas/documents/allergen'
import award from 'schemas/documents/award'
import beer from 'schemas/documents/beer'
import burger from 'schemas/documents/burger'
import home from 'schemas/documents/home'
import hops from 'schemas/documents/hops'
import menu from 'schemas/documents/menu'
import partner from 'schemas/documents/partner'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [allergen, award, beer, burger, home, hops, menu, partner],
}
