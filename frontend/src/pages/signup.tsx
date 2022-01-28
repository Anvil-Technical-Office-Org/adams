import type { NextPage } from 'next'
import Head from 'next/head'
import Signup from '~/components/templates/signup'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>新規アカウント登録</title>
      </Head>
      <Signup />
    </>
  )
}

export default Page
