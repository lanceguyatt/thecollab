import Layout from 'components/BlogLayout'
import Container from 'components/Container'
import PostBody from 'components/PostBody'
import PostHeader from 'components/PostHeader'
import PostPageHead from 'components/PostPageHead'
import * as demo from 'lib/demo.data'
import type { MenuItem, Settings } from 'lib/sanity.queries'
import { notFound } from 'next/navigation'

export interface PostPageProps {
  preview?: boolean
  loading?: boolean
  post: MenuItem
  settings: Settings
}

export default function PostPage(props: PostPageProps) {
  const { preview, loading, post, settings } = props
  const slug = post?.slug

  if (!slug && !preview) {
    notFound()
  }

  return (
    <>
      <PostPageHead settings={settings} post={post} />

      <Layout preview={preview} loading={loading}>
        <Container>
          {preview && !post ? (
            <h1>Loading…</h1>
          ) : (
            <article>
              <div className="prose">
                <pre>{JSON.stringify(post, null, 2)}</pre>
              </div>
            </article>
          )}
        </Container>
      </Layout>
    </>
  )
}
