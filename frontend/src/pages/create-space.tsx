import type { NextPage } from 'next'
import Head from 'next/head'
import CreateSpace from '~/components/templates/create-space'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>スペース作成</title>
      </Head>
      <CreateSpace />
    </>
  )
}

export default Page
