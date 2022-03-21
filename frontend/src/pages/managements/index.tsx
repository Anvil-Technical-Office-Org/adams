import type { NextPage } from 'next'
import Head from 'next/head'
import Managements from '~/components/templates/managements'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>管理画面トップ</title>
      </Head>
      <Managements />
    </>
  )
}

Page.layout = 'management'

export default Page
