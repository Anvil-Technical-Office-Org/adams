import React from "react"
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
        <Link href='/signup'>
          <Button>Signup</Button>
        </Link>
        <Link href='/signin'>
          <Button>Signin</Button>
        </Link>

      </div>
    </header>
  )
}

export default Component
