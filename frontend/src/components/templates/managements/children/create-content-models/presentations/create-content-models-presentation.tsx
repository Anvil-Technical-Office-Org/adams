import React from 'react'
import styles from './create-content-models.module.scss'
import {
  Button,
  Container,
  Grid,
  TextField,
  Select,
  MenuItem,
} from '@mui/material'
import { StepObj, Step2State } from '../create-content-models-container'

type Props = {
  stepObj: StepObj
  back: () => void
  next: () => void
  create: () => void
  addField: () => void
  removeField: (target: number) => void
  updateField: (target: number, data: Step2State) => void
}

const Component: React.VFC<Props> = ({
  stepObj,
  back,
  next,
  create,
  addField,
  removeField,
  updateField,
}) => (
  <Container maxWidth='md' className={styles.root}>
    {createMainContents(stepObj, addField, removeField, updateField)}
    <Grid container justifyContent='space-between'>
      {createFooter(stepObj, back, next, create)}
    </Grid>
  </Container>
)

export default Component

const createMainContents = (
  stepObj: StepObj,
  addField: () => void,
  removeField: (target: number) => void,
  updateField: (target: number, data: Step2State) => void,
) => {
  switch (stepObj.current) {
    case 1: return <Step1 />
    case 2: {
      return (
        <Step2
          fields={stepObj.step2}
          addField={addField}
          removeField={removeField}
          updateField={updateField}
        />
      )
    }
  }
}

const createFooter = (
  stepObj: StepObj,
  back: () => void,
  next: () => void,
  create: () => void,
) => {
  switch (stepObj.current) {
    case 1:
      return (
        <>
          <Button
            onClick={back}
          >戻る</Button>
          <Button
            onClick={next}
          >次へ</Button>
        </>
      )
    case 2:
      return (
        <>
          <Button
            onClick={back}
          >戻る</Button>
          <Button
            onClick={create}
          >作成</Button>
        </>
      )
  }
}

export const Step1: React.VFC = () => (
  <Grid container rowSpacing={4} justifyContent='center'>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label='コンテンツモデルID'
        placeholder='コンテンツモデルIDを入力してください。'
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label='コンテンツモデル名'
        placeholder='コンテンツモデル名を入力してください。'
      />
    </Grid>
    <Grid item xs={12}>
      <TextField
        fullWidth
        label='説明'
        placeholder='コンテンツモデルに関する説明を入力してください。'
      />
    </Grid>
  </Grid>
)

type Step2Props = {
  fields: Step2State[]
  addField: () => void
  removeField: (target: number) => void
  updateField: (target: number, data: Step2State) => void
}

export const Step2: React.VFC<Step2Props> = ({fields, addField, removeField, updateField}) => (
  <Grid container rowSpacing={4} columnSpacing={1} justifyContent='center'>
    {fields.map((field, idx) => (
      <>
        <Grid item xs={12}>
          <Button
           onClick={() => removeField(idx)}
          >
            削除
          </Button>
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label='コンテンツフィールドID'
            onChange={() => updateField(idx, field)}
          />
        </Grid>
        <Grid item xs={4}>
          <TextField
            fullWidth
            label='コンテンツフィールド名'
          />
        </Grid>
        <Grid item xs={4}>
          <Select
            label='種別'
            value={field.type}
            fullWidth
          >
            <MenuItem value={1}>テキスト</MenuItem>
            <MenuItem value={2}>数値</MenuItem>
            <MenuItem value={3}>画像</MenuItem>
          </Select>
        </Grid>
      </>
    ))}
    <Grid item xs={12}>
      <Button
        fullWidth
        onClick={addField}
      >
        フィールド追加
      </Button>
    </Grid>
  </Grid>
)
