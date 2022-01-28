import type { AppProps } from 'next/app'
// Style読み込み
import '../styles/styles.scss'
// TODO : デフォルト用と管理画面用のレイアウト切り替え
import Default from '~/components/layouts/default'
import Management from '~/components/layouts/management'
import { RecoilRoot } from 'recoil'
import CssBaseline from '@mui/material/CssBaseline'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <CssBaseline />
      <Default>
        <Component {...pageProps} />
      </Default>
    </RecoilRoot>
  )
}

export default MyApp
