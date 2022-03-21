import React from 'react'
import CreateSpacePresentation from './presentations'
import { useForm, SubmitHandler, SubmitErrorHandler } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Space } from '~/core/entities'
import SpaceUseCase from '~/core/usecases/space-user-case'
import SpaceRepository from '~/core/repositories/space-repository'
import SpaceDriver from '~/core/drivers/space-driver'
import { useRouter } from 'next/router'

export type State = {
  id: string
  name: string
  description: string,
}

type Props = {}

const Container: React.VFC<Props> = ({}) => {
  const router = useRouter()
  const initialValues: State = {
    id: '',
    name: '',
    description: '',
  }
  const methods = useForm<State>({
    defaultValues: initialValues,
    resolver: yupResolver(Space.validationSchema),
    mode: 'onChange',
  })
  const { errors, isValid } = methods.formState

  const create: SubmitHandler<State> = async data => {
    console.log('create')
    const usecase = new SpaceUseCase(new SpaceRepository(new SpaceDriver))
    const space = await usecase.create(data.id, data.name, data.description)
    router.push('/managements/content-models')
  }

  const onError: SubmitErrorHandler<State> = data => {
    console.log('バリデーションエラー:', data)
  }

  return (
    <>
      <CreateSpacePresentation
        onSubmit={create}
        onError={onError}
        handleSubmit={methods.handleSubmit}
        control={methods.control}
        errors={errors}
        isValid={isValid}
      />
    </>
  )
}

export default Container
