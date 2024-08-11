import path from 'path'

import { payloadCloud } from '@payloadcms/plugin-cloud'
import { mongooseAdapter } from '@payloadcms/db-mongodb'
import { webpackBundler } from '@payloadcms/bundler-webpack'
import { slateEditor } from '@payloadcms/richtext-slate'
import { buildConfig } from 'payload/config'

import Users from './collections/Users'
import Posts from './collections/Posts'
import Uploads from './collections/Uploads'
import Pages from './collections/Pages'
import {Docs} from './collections/Docs'
import { Media } from './collections/Media'
import Categories from './collections/Categories'
import Companies from './collections/Companies'
import Todos from './collections/Todos';

export default buildConfig({
  admin: {
    user: Users.slug,
    bundler: webpackBundler(),
  },
  editor: slateEditor({}),
  collections: 
  [
    Users,
    Posts,
    Uploads,
    Categories,
    Pages,
    Docs,
    Companies,
    Media,
    Todos,
  ],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
  plugins: [payloadCloud()],
  db: mongooseAdapter({
    url: process.env.DATABASE_URI,
  }),
  cors: '*'
})
