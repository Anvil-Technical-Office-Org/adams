import React, { useState } from 'react'
import { useRouter } from 'next/router'
import CreateContentModelsPresentation from './presentations'

export type StepObj = {
  current: number
  step1: Step1State
  step2: Step2State[]
}

export type Step1State = {
  id: string
  name: string
  description: string
}

export type Step2State = {
  id: string
  name: string
  description?: string
  type: number
  required: boolean
}

type Props = {}

const Container: React.VFC<Props> = ({}) => {
  const router = useRouter()
  const [stepObj, setStepObj] = useState<StepObj>({
    current: 1,
    step1: {
      id: '',
      name: '',
      description: ''
    },
    step2: [{
      id: '',
      name: '',
      type: 0,
      required: false,
    }]
  })

  const nextStep = () => {
    setStepObj(prev => ({
      ...prev,
      current: prev.current + 1
    }))
  }

  const backStep = () => {
    setStepObj(prev => ({
      ...prev,
      current: prev.current - 1
    }))
  }

  const removeField = (target: number) => {
    setStepObj(prev => ({
      ...prev,
      step2: prev.step2.filter((_, idx) => (target !== idx))
    }))
  }

  const addField = () => {
    setStepObj(prev => ({
      ...prev,
      step2: [...prev.step2, { id: '', name: '', type: 0, required: false }]
    }))
  }

  const updateField = (target: number, data: Step2State) => {
    setStepObj(prev => ({
      ...prev,
      step2: prev.step2.map((tmp, idx) => (target === idx ? data : tmp))
    }))
  }

  const create = async () => {
    console.log(stepObj)
  }

  return (
    <>
      <CreateContentModelsPresentation
        stepObj={stepObj}
        back={backStep}
        next={nextStep}
        create={create}
        addField={addField}
        removeField={removeField}
        updateField={updateField}
      />
    </>
  )
}

export default Container
