import React from 'react'
import Link from 'next/link'
import styles from './create-space.module.scss'
import {
  Container,
  Grid,
  TextField,
  Button,
  List,
  ListItem,
} from '@mui/material'
import { VIEW_URLS } from '~/common/const'

type Props = {}

const Component: React.VFC<Props> = ({}) => (
  <Container maxWidth={false}>
    <Grid container>
      <Grid item xs={2}>
        <List>
          <ListItem>
            <Link href={VIEW_URLS.MNG_CREATE_CONTENT_MODELS} passHref>
              <Button>コンテンツモデルを作成</Button>
            </Link>
          </ListItem>
          <ListItem>
            <Button>コンテンツモデル１</Button>
          </ListItem>
          <ListItem>
            <Button>コンテンツモデル２</Button>
          </ListItem>
          <ListItem>
            <Button>コンテンツモデル３</Button>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={2}>
        <List>
          <ListItem>
            <Button>基本情報</Button>
          </ListItem>
          <ListItem>
            <Button>コンテンツフィールド</Button>
          </ListItem>
        </List>
      </Grid>
      <Grid item xs={8}>
        <TextField placeholder='コンテンツモデルIDを入力してください'/>
        <TextField/>
        <TextField/>
      </Grid>
    </Grid>
  </Container>
)

export default Component
