import React from "react";
import styles from './footer.module.scss'
type Props = {};

const index: React.FC<Props> = ({}) => {
  return (
    <footer className={styles.root}>
      <p className={styles.logo}>Adams</p>
    </footer>
  )
}

export default index
