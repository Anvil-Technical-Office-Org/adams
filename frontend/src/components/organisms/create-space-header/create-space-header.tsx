import React, { useState } from 'react'
import styles from './create-space-header.module.scss'
import {
  Avatar,
  Button,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@mui/material'
import PersonIcon from '@mui/icons-material/Person'
import MenuOpenIcon from '@mui/icons-material/MenuOpen';

type Props = {}

const Component: React.VFC<Props> = ({}) => {
  const [open, setOpen] = useState<boolean>(false)
  const toggleDrawer = (flg: boolean) => {
    setOpen(flg)
  }
  return (
    <header className={styles.root}>
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
      <Avatar>
        <PersonIcon />
      </Avatar>
    </header>
  )
}

export default Component
