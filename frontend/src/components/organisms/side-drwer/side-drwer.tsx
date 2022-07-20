import React, { useState } from 'react'
import Link from 'next/link'
import styles from './side-drwer.module.scss'
import {
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import { Space } from '~/core/entities'

type Props = {
  // スペース一覧
  spaces: Space[]
  // メニュー開閉のフラグとイベント
  isOpen: boolean
  handleClose: () => void
}

const Component: React.VFC<Props> = ({ spaces, isOpen, handleClose }) => {
  return (
    <Drawer
      onClose={() => { handleClose() }}
      anchor='left'
      open={isOpen}
    >
      <List>
        {spaces.map((space, idx) => (
          <ListItem key={idx}>
            <ListItemText primary={space.name} />
          </ListItem>
        ))}
        <ListItem>
          <Link href='/managements/create-space'>
            <Button>
              スペースを作成
            </Button>
          </Link>
        </ListItem>
      </List>
    </Drawer>
  )
}

export default Component
