import React from 'react'
import styles from './footer.module.scss'
type Props = {}

const Component: React.VFC<Props> = ({}) => {
  return (
    <footer className={styles.root}>
      <p className={styles.logo}>Adams</p>
    </footer>
  )
}

export default Component
