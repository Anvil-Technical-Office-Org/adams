import React, { useState } from 'react'
import Link from 'next/link'
import styles from './management-header.module.scss'
import {
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
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
      <div>
        {/* スペース管理サイドバー */}
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

        {/* その他メニュー */}
        <Link
          href='/managements/content-models'
        >
          <Button>コンテンツモデル</Button>
        </Link>
        <Link
          href='/managements/contents'
        >
          <Button>コンテンツ</Button>
        </Link>
        <Link
          href='/managements/media'
        >
          <Button>メディア</Button>
        </Link>
        <Link
          href='/managements/settings'
        >
          <Button>設定</Button>
        </Link>
      </div>
      <Avatar>
        <PersonIcon />
      </Avatar>
    </header>
  )
}

export default Component
