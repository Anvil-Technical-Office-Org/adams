import { useEffect, useState } from 'react'
import { parseCookies } from 'nookies'
import { useSetRecoilState } from 'recoil'
import { stateUser } from '~/states'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { Auth } from '~/core/entities'

export type AuthFormState = {
  email: string
  password: string
  isAgreement?: boolean
}

export const useAuth = (isRequirePolicy: boolean = true) => {
  const setUser = useSetRecoilState(stateUser)
  const initialValues: AuthFormState = {
    email: '',
    password: '',
  }
  // サインアップ時とサインイン時でバリデーションの内容が微妙に違うので切り替え
  // ライブラリの仕様上この方法でやったけど、もっといい方法があればリファクタしたい
  if (isRequirePolicy) initialValues.isAgreement = false
  const methods = useForm<AuthFormState>({
    defaultValues: initialValues,
    resolver: yupResolver(Auth.validationSchema),
    // mode: onChangeは公式ドキュメントによるとパフォーマンスが良くないらしいので、気になるようであれば変更を検討する
    mode: 'onChange',
    // reValidateMode: 'onChange'
  })
  const { isDirty, isValid } = methods.formState
  /** 送信可能か */
  const isSendable = isDirty && isValid

  useEffect(() => {
    const cookie = parseCookies()
    // TODO : 認証情報確認
    // 認証済みならそのまま管理画面へ遷移
    // スペースが作成されていなければ先にスペース作成画面へ
    // スペースが存在している場合は、コンテンツモデルの画面へ？
    console.log(cookie)
  }, [])

  return {
    setUser,
    methods,
    isSendable,
  }
}
