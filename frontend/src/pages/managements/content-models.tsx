import type { NextPage } from 'next'
import Head from 'next/head'
import ContentModels from '~/components/templates/managements/children/content-models'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>コンテンツ一覧</title>
      </Head>
      <ContentModels />
    </>
  )
}

Page.layout = "management"

export default Page
