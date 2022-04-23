import React, { useState } from 'react'
import styles from './create-space-header.module.scss'
import {
  Avatar,
  Button,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import MenuOpenIcon from '@mui/icons-material/MenuOpen'
import SideDrawer from '~/components/organisms/side-drwer'
import { useSideDrawer } from '~/hooks/use-side-drawer'

type Props = {}

const Component: React.VFC<Props> = ({}) => {
  const { isOpen, open, close, spaces } = useSideDrawer()
  return (
    <header className={styles.root}>
      <Button
        onClick={() => { open() }}
      >
        スペース名
        <MenuOpenIcon />
      </Button>
      <SideDrawer
        isOpen={isOpen}
        handleClose={close}
        spaces={spaces}
      />
      <Avatar>
        <PersonIcon />
      </Avatar>
    </header>
  )
}

export default Component
