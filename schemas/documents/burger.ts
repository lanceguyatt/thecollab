// import { UserIcon } from '@sanity/icons'
import { defineField, defineType } from 'sanity'

export default defineType({
  name: 'burger',
  title: 'Burger',
  // icon: UserIcon,
  type: 'document',
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
      type: 'string',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Price £',
      type: 'number',
      // validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'allergens',
      title: 'Allergens',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'allergen' }] }],
    })
  ],
})
