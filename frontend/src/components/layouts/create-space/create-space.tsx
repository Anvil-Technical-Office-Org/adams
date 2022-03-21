import React from 'react'
import styles from './create-space.module.scss'
import Header from '~/components/organisms/create-space-header'
import { Container } from '@mui/material'

type Props = {}

const Component: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <Container>
        <main>{children}</main>
      </Container>
    </>
  )
}

export default Component
