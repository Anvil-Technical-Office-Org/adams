import React from 'react'
import type { AppProps } from 'next/app'
// Style読み込み
import '../styles/styles.scss'
// TODO : デフォルト用と管理画面用のレイアウト切り替え
import Default from '~/components/layouts/default'
import Management from '~/components/layouts/management'
import { RecoilRoot } from 'recoil'
import CssBaseline from '@mui/material/CssBaseline'

const layouts = {
  'default': Default,
  'management': Management,
}
const MyApp: React.VFC<AppProps> = ({ Component, pageProps }) => {
  const Layout = layouts[Component.layout || 'default']
  return (
    <RecoilRoot>
      <CssBaseline />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </RecoilRoot>
  )
}

export default MyApp
