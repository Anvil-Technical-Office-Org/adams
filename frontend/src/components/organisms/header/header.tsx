import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import styles from './header.module.scss'
import { VIEW_URLS } from '~/common/const'

type Props = {}

const Component: React.VFC<Props> = ({}) => {
  return (
    <header className={styles.root}>
      <Link href={VIEW_URLS.INDEX}>
        <a className={styles.logo}>Adams</a>
      </Link>
      <div>
        <Link href={VIEW_URLS.SIGN_IN} passHref>
          <Button>ログイン</Button>
        </Link>
        <Link href={VIEW_URLS.SIGN_UP} passHref>
          <Button>新規登録</Button>
        </Link>
      </div>
    </header>
  )
}

export default Component
