import React from 'react'
import ContentModelsPresentation from './presentations'

type Props = {}

const Container: React.VFC<Props> = ({}) => {
  // コンテンツモデル一覧取得処理

  // 現在表示しているコンテンツモデルの詳細な情報取得
  return (
    <>
      <ContentModelsPresentation />
    </>
  )
}

export default Container
