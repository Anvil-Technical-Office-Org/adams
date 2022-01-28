import React from 'react'
import SigninPresentation from './presentations'
import { useAuth, AuthFormState } from '~/hooks/use-auth'
import AuthUseCase from '~/core/usecases/auth-use-case'
import AuthRepository from '~/core/repositories/auth-repository'
import AuthDriver from '~/core/drivers/auth-driver'
import { useRouter } from 'next/router'
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'

type Props = {}

const Container: React.FC<Props> = ({}) => {
  const { methods, isSendable, setUser } = useAuth(false)
  const { errors } = methods.formState
  const router = useRouter()
  const signin: SubmitHandler<AuthFormState> = async data => {
    console.log('signin:', data)
    const usecase = new AuthUseCase(new AuthRepository(new AuthDriver()))
    const auth = await usecase.signin(data.email, data.password)
    if (auth) {
      setUser(auth.user)
      router.push('/managements')
    }
  }

  const onError: SubmitErrorHandler<AuthFormState> = data => {
    console.log('バリデーションエラー:', data)
  }

  return (
    <>
      <SigninPresentation
        onSubmit={signin}
        onError={onError}
        handleSubmit={methods.handleSubmit}
        control={methods.control}
        errors={errors}
        isSendable={isSendable}
      />
    </>
  )
}

export default Container
