import React from 'react'
import styles from './create-space.module.scss'
import { Container, Grid, TextField, Button } from '@mui/material'

type Props = {}

const Component: React.VFC<Props> = ({}) => (
  <Container maxWidth={false}>
    <Grid container>
      <Grid item xs={2}>
        <Button>コンテンツモデル１</Button>
        <Button>コンテンツモデル２</Button>
        <Button>コンテンツモデル３</Button>
      </Grid>
      <Grid item xs={2}>
        <Button>基本情報</Button>
        <Button>コンテンツフィールド</Button>
      </Grid>
      <Grid item xs={8}>
        <TextField/>
        <TextField/>
        <TextField/>
      </Grid>
    </Grid>
  </Container>
)

export default Component
