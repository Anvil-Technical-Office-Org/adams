import React from 'react'
import styles from './management.module.scss'
import Header from '~/components/organisms/management-header'
import { Container } from '@mui/material'

type Props = {}

const Component: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Component
