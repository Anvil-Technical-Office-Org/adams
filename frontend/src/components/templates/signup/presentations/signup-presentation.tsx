import React from 'react'
import styles from './signup.module.scss'
import {
  Container,
  Grid,
  Button,
  TextField,
  FormControl,
  FormControlLabel,
  Checkbox,
  FormHelperText,
} from '@mui/material'
import {
  Controller,
  UseFormHandleSubmit,
  FieldErrors,
  Control,
} from 'react-hook-form'
import { AuthFormState } from '~/hooks/use-auth'

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
          <Controller
            name='isAgreement'
            control={control}
            render={({ field }) => (
              <FormControl error={errors.isAgreement ? true : false}>
                <FormControlLabel
                  control={<Checkbox {...field} />}
                  label='利用規約及びプライバシポリシーに同意します。'
                />
                {errors.isAgreement && (
                  <FormHelperText>{errors.isAgreement.message}</FormHelperText>
                )}
              </FormControl>
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button fullWidth disabled={!isSendable} type='submit'>
            新規登録
          </Button>
        </Grid>
      </Grid>
    </form>
  </Container>
)

export default Component
