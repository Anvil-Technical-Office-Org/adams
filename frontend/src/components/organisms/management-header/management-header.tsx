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

type Props = {}

const Component: React.VFC<Props> = ({}) => {
  const [open, setOpen] = useState<boolean>(false)
  const toggleDrawer = (flg: boolean) => {
    setOpen(flg)
  }

  return (
    <header className={styles.root}>
      <div>
        {/* スペース管理サイドバー */}
        <Button
          onClick={() => { toggleDrawer(true) }}
        >
          スペース名
          <MenuOpenIcon />
        </Button>
        <Drawer
          onClose={() => { toggleDrawer(false) }}
          anchor='left'
          open={open}
        >
          <List>
            {['Space1', 'Space2'].map((text, index) => (
              <ListItem key={index}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
            <ListItem>
              <Button>
                スペースを作成
              </Button>
            </ListItem>
          </List>
        </Drawer>

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
