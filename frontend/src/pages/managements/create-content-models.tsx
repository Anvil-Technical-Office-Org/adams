import type { NextPage } from 'next'
import Head from 'next/head'
import CreateContentModels from '~/components/templates/managements/children/create-content-models'

const Page: NextPage = () => {
  return (
    <>
      <CreateContentModels />
    </>
  )
}

Page.layout = 'management'

export default Page
