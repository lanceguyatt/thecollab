import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'hops',
  title: 'Hops',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
  ]
})