import type { NextPage } from 'next'
import Head from 'next/head'
import ForgetPassword from '~/components/templates/forget-password'

const Page: NextPage = () => {
  return (
    <>
      <Head>
        <title>パスワードをお忘れの方</title>
      </Head>
      <ForgetPassword />
    </>
  )
}

export default Page
