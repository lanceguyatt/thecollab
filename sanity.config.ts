/**
 * This config is used to set up Sanity Studio that's mounted on the `/pages/studio/[[...index]].tsx` route
 */

// see https://www.sanity.io/docs/api-versioning for how versioning works
import { apiVersion, dataset, projectId } from '@/sanity/env'
import { schema } from '@/sanity/schema'
import settings from '@/schemas/singleton/settings'
import { visionTool } from '@sanity/vision'
import { settingsPlugin, settingsStructure } from 'plugins/settings'
import { defineConfig } from 'sanity'
import { media, mediaAssetSource } from 'sanity-plugin-media'
import { deskTool } from 'sanity/desk'

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  //edit schemas in './sanity/schema'
  schema,
  plugins: [
    deskTool({
      structure: settingsStructure(settings),
      // `defaultDocumentNode` is responsible for adding a “Preview” tab to the document pane
    }),
    settingsPlugin({ type: 'settings' }),
    // Vision lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    media(),
  ],
  form: {
    // Don't use this plugin when selecting files only (but allow all other enabled asset sources)
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource
        )
      },
    },
  },
})
