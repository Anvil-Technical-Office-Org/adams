import type { NextPage } from "next"
import Head from 'next/head'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>管理画面トップ</title>
      </Head>
      <h1>Management Top Page</h1>
    </>
  )
}

Page.layout = 'management'

export default Page
