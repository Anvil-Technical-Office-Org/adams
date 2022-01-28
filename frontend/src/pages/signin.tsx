import type { NextPage } from 'next'
import Head from 'next/head'
import Signin from '~/components/templates/signin'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>サインイン</title>
      </Head>
      <Signin />
    </>
  )
}

export default Page
