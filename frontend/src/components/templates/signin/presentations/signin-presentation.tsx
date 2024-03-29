import React from 'react'
import styles from './signin.module.scss'
import { Grid, TextField, Button, Container } from '@mui/material'
import Link from 'next/link'
import {
  Controller,
  UseFormHandleSubmit,
  FieldErrors,
  Control,
} from 'react-hook-form'
import { AuthFormState } from '~/hooks/use-auth'
import { VIEW_URLS } from '~/common/const'

type Props = {
  onSubmit: (data: AuthFormState) => void
  onError: (data: FieldErrors<AuthFormState>) => void
  handleSubmit: UseFormHandleSubmit<AuthFormState>
  control: Control<AuthFormState>
  isSendable: boolean
  errors: FieldErrors<AuthFormState>
}

const Component: React.VFC<Props> = ({
  onSubmit,
  onError,
  handleSubmit,
  control,
  errors,
  isSendable,
}) => (
  <Container maxWidth='xs' className={styles.root}>
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Grid container rowSpacing={4} justifyContent='center'>
        <Grid item xs={12}>
          <Controller
            name='email'
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label='メールアドレス'
                margin='dense'
                type='email'
                error={errors.email ? true : false}
                helperText={errors.email && errors.email.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name='password'
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label='パスワード'
                margin='dense'
                type='password'
                error={errors.password ? true : false}
                helperText={errors.password && errors.password.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth type='submit' disabled={!isSendable}>
            ログイン
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Link href={VIEW_URLS.FGT_PASS} passHref>
            <a className={styles.link}>パスワードをお忘れの方</a>
          </Link>
          <Link href={VIEW_URLS.SIGN_UP} passHref>
            <a className={styles.link}>アカウントをお持ちでない方</a>
          </Link>
        </Grid>
      </Grid>
    </form>
  </Container>
)

export default Component
