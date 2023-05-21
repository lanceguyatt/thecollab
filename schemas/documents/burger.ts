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
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
        isUnique: (value, context) => context.defaultIsUnique(value, context),
      },
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
    }),
    defineField({
      name: 'vegan',
      title: 'Vegan',
      type: 'boolean',
    }),
    defineField({
      name: 'vegetarian',
      title: 'Vegarian',
      type: 'boolean',
    }),
  ],
})
