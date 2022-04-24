import React from 'react'
import styles from './create-space.module.scss'
import { State } from '../create-space-container'
import { Grid, TextField, Button, Container } from '@mui/material'
import {
  Controller,
  UseFormHandleSubmit,
  FieldErrors,
  Control,
} from 'react-hook-form'

type Props = {
  onSubmit: (data: State) => void
  onError: (data: FieldErrors<State>) => void
  handleSubmit: UseFormHandleSubmit<State>
  control: Control<State>
  errors: FieldErrors<State>
  isValid: boolean
}

const Component: React.VFC<Props> = ({
  onSubmit,
  onError,
  handleSubmit,
  control,
  errors,
  isValid,
}) => (
  <Container maxWidth='xs' className={styles.root}>
    <form onSubmit={handleSubmit(onSubmit, onError)}>
      <Grid container rowSpacing={4} justifyContent='center'>
        <Grid item xs={12}>
          <Controller
            name='id'
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label='スペースID'
                margin='dense'
                type='text'
                error={errors.id ? true : false}
                helperText={errors.id && errors.id.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label='スペース名'
                margin='dense'
                type='text'
                error={errors.name ? true : false}
                helperText={errors.name && errors.name.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Controller
            name='description'
            control={control}
            render={({ field }) => (
              <TextField
                fullWidth
                label='説明文'
                margin='dense'
                type='text'
                error={errors.description ? true : false}
                helperText={errors.description && errors.description.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12}>
          <Button
            fullWidth
            disabled={!isValid}
            type='submit'
          >
            作成
          </Button>
        </Grid>
      </Grid>
    </form>
  </Container>
)

export default Component
