import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'beer',
  title: 'Beer',
  type: 'document',
  groups: [
    {
      name: 'seo',
      title: 'Seo'
    }, {
      name: 'brewsheet',
      title: 'Brewsheet'
    }
  ],
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      group: 'seo',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image' }],
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'awards',
      title: 'Awards',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'award' }] }],
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'abv',
      title: 'ABV',
      description: 'Alcohol by Volume',
      type: 'number',
      group: 'brewsheet',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'hops',
      title: 'Hops',
      type: 'array',
      group: 'brewsheet',
      of: [{ type: 'reference', to: [{ type: 'hops' }] }],
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'og',
      title: 'OG',
      type: 'number',
      group: 'brewsheet',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'ibu',
      title: 'IBU',
      description: 'International Bitterness Units',
      type: 'number',
      group: 'brewsheet',
      // validation: (rule) => rule.required(),
    }),
  ],
})
