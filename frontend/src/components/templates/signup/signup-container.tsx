import React from 'react'
import SignupPresentation from './presentations'
import { useAuth, AuthFormState } from '~/hooks/use-auth'
import AuthUseCase from '~/core/usecases/auth-use-case'
import AuthRepository from '~/core/repositories/auth-repository'
import AuthDriver from '~/core/drivers/auth-driver'
import { useRouter } from 'next/router'
import { SubmitErrorHandler, SubmitHandler } from 'react-hook-form'

type Props = {}

const Container: React.FC<Props> = ({}) => {
  const { methods, isSendable, setUser } = useAuth()
  const { errors } = methods.formState
  const router = useRouter()
  const signup: SubmitHandler<AuthFormState> = async data => {
    console.log('signup', data)
    // TODO : DIフレームワーク使用
    const usecase = new AuthUseCase(new AuthRepository(new AuthDriver()))
    const auth = await usecase.signup(data.email, data.password)
    console.log('認証結果', auth)
    if (auth) {
      setUser(auth.user)
      router.push('/create-space')
    }
  }

  const onError: SubmitErrorHandler<AuthFormState> = data => {
    console.log('バリデーションエラー:', data)
  }

  return (
    <>
      <SignupPresentation
        onSubmit={signup}
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
