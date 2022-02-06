import React from 'react'
import Link from 'next/link'
import { Button } from '@mui/material'
import styles from './header.module.scss'

type Props = {}

const Component: React.VFC<Props> = ({}) => {
  return (
    <header className={styles.root}>
      <Link href='/'>
        <a className={styles.logo}>Adams</a>
      </Link>
      <div>
        <Link href='/signin'>
          <Button>ログイン</Button>
        </Link>
        <Link href='/signup'>
          <Button>新規登録</Button>
        </Link>
      </div>
    </header>
  )
}

export default Component
