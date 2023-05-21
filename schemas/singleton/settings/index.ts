import { CogIcon } from '@sanity/icons'
// import * as demo from 'lib/demo.data'
import { defineArrayMember, defineField, defineType } from 'sanity'

// import OpenGraphInput from './OpenGraphInput'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  icon: CogIcon,
  preview: { select: { title: 'title', subtitle: 'description' } },
  groups: [
    {
      name: 'social',
      title: 'Social',
    },
  ],
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  fields: [
    defineField({
      name: 'title',
      description: 'This field is the title of your blog.',
      title: 'Title',
      type: 'string',
      // initialValue: 'Foo',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      description:
        'Used both for the <meta> description tag for SEO, and the blog subheader.',
      title: 'Description',
      type: 'array',
      // initialValue: 'Bar',
      of: [
        defineArrayMember({
          type: 'block',
          options: {},
          styles: [],
          lists: [],
          marks: {
            decorators: [],
            annotations: [
              defineField({
                type: 'object',
                name: 'link',
                fields: [
                  {
                    type: 'string',
                    name: 'href',
                    title: 'URL',
                    validation: (rule) => rule.required(),
                  },
                ],
              }),
            ],
          },
        }),
      ],
      validation: (rule) => rule.max(155).required(),
    }),
    defineField({
      name: 'instagram',
      title: 'Instagram',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'twitter',
      title: 'Twitter',
      type: 'url',
      group: 'social',
    }),
    defineField({
      name: 'facebook',
      title: 'Facebook',
      type: 'url',
      group: 'social',
    }),
    // defineField({
    //   name: 'ogImage',
    //   title: 'Open Graph Image',
    //   description:
    //     'Used for social media previews when linking to the index page.',
    //   type: 'object',
    //   components: {
    //     input: OpenGraphInput as any,
    //   },
    //   fields: [
    //     defineField({
    //       name: 'title',
    //       title: 'Title',
    //       type: 'string',
    //       // initialValue: demo.ogImageTitle,
    //     }),
    //   ],
    // }),
  ],
})
