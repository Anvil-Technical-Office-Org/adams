import React from "react"
import styles from './default.module.scss'
import Header from '~/components/organisms/header'
import Footer from '~/components/organisms/footer'
import { Container } from '@mui/material'

type Props = {};

const Component: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <main className={styles.main}>{children}</main>
      </Container>
      <Footer />
    </>
  )
}

export default Component
