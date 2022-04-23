#!/bin/bash
set -eu

# ====================================
# ファイルインポート
# ====================================
. ./scripts/utils.sh


# ====================================
# グローバス変数の定義
# ====================================
# 作成するページ名
# pagesディレクトリの相対パス
PAGES_DIR_PATH="./src/pages"
# templatesディレクトリの相対パス
TEMPLATES_DIR_PATH="./src/components/templates"
# templatesディレクトリの絶対パス(tsconfig.jsonによって解釈)
TEMPLATES_DIR_ABSOLUTE_PATH="~/components/templates"
# パス指定オプションフラグ
isTargetPath=false

# ====================================
# 汎用関数の定義
# ====================================
# ページ存在確認
function isExistsPage () {
  # pagesディレクトリのみ検証
  if [ -f $PAGES_DIR_PATH/$CREATE_NAME.tsx ]; then
    echo -en "作成しようとしてページは既に存在しています。\nこのまま実行する場合は、既に存在しているファイルが上書きされます。\n実行しますか？ y/N : "
    read selected

    case "$selected" in
      # y, Y, yes, Yes, YES
      y | Y | [yY]es | YES ) ;;

      # n, N, no, No, NO
      n | N | [nN]o | NO )
        echo "ページの作成を中止します。"
        exit 0 ;;

      # default
      * )
        echo "ページの作成を中止します。"
        exit 0 ;;
    esac
  fi
}

# 当スクリプトの使用方法を出力
function usage () {
  echo "第一引数に作成したいページ名を渡してください。"
  echo "-p, --path: 第２階層以降のページを作成したい場合に、使用します。"
  echo "-h, --help: 使用可能なオプション一覧を表示します。"
}

# ====================================
# 処理開始
# ====================================
# -----------オプション解析----------- #
while getopts "hp:-:" opt; do
  # ロングオプション対応
  if [ $opt = "-" ]; then
		opt=`echo ${OPTARG} | awk -F'=' '{print $1}'`
		OPTARG=`echo ${OPTARG} | awk -F'=' '{print $2}'`
  fi

  case "$opt" in
    p | path )
      PAGES_DIR_PATH+="/${OPTARG}"
      TEMPLATES_DIR_PATH+="/${OPTARG}/children"
      TEMPLATES_DIR_ABSOLUTE_PATH+="/${OPTARG}/children"
      isTargetPath=true
      ;;
    h | help )
      usage
      exit 0
      ;;
    * )
      echo "invalid option => $opt"
      exit 1
    esac
done
shift $((OPTIND - 1))

# 引数存在チェック
isExistsArgs $@

# -----------引数を変数に格納----------- #
CREATE_NAME=$1

# ページの存在確認
isExistsPage

echo "==============Create $CREATE_NAME page start!=============="

# -----------pages内ファイル生成処理----------- #
# pagesファイル用意
if "${isTargetPath}" && [ ! -d $PAGES_DIR_PATH ]; then
  mkdir $PAGES_DIR_PATH
fi
touch $PAGES_DIR_PATH/$CREATE_NAME.tsx

# pagesのファイル内容を生成
function createPage () {
  tmpPageTitle=`convertKebabcaseToPascalcase $CREATE_NAME`
  echo "import type { NextPage } from 'next'"
  echo "import Head from 'next/head'"
  echo "import $tmpPageTitle from '$TEMPLATES_DIR_ABSOLUTE_PATH/$CREATE_NAME'"
  echo ""
  echo "const Page: NextPage = () => {"
  echo "  return ("
  echo "    <>"
  echo "      <$tmpPageTitle />"
  echo "    </>"
  echo "  )"
  echo "}"
  echo ""
  echo "export default Page"
}

createPage > $PAGES_DIR_PATH/$CREATE_NAME.tsx


# -----------templates内ファイル生成処理----------- #
# templatesディレクトリ用意
TARGET_DIR_PATH=$TEMPLATES_DIR_PATH/$CREATE_NAME
# TODO : 再帰的にディレクトリを作成する方法を検討
mkdir $TARGET_DIR_PATH

# Container: index.ts生成
touch $TARGET_DIR_PATH/index.ts
echo "export { default } from './$CREATE_NAME-container'" > $TARGET_DIR_PATH/index.ts

# Container: TSX生成
function createContainer () {
  tmpPresentationTitle=`convertKebabcaseToPascalcase $CREATE_NAME`
  tmpPresentationTitle+="Presentation"
  echo "import React from 'react'"
  echo "import $tmpPresentationTitle from './presentations'"
  echo ""
  echo "type Props = {}"
  echo ""
  echo "const Container: React.VFC<Props> = ({}) => {"
  echo "  return ("
  echo "    <>"
  echo "      <$tmpPresentationTitle />"
  echo "    </>"
  echo "  )"
  echo "}"
  echo ""
  echo "export default Container"
}
touch $TARGET_DIR_PATH/$CREATE_NAME-container.tsx
createContainer > $TARGET_DIR_PATH/$CREATE_NAME-container.tsx

# presentationsディレクトリ用意
PRESENTATION_DIR_PATH=$TARGET_DIR_PATH/presentations
mkdir $PRESENTATION_DIR_PATH

# Presentation: index.ts生成
touch $PRESENTATION_DIR_PATH/index.ts
echo "export { default } from './$CREATE_NAME-presentation'" > $TARGET_DIR_PATH/presentations/index.ts

# Presentation: TSX生成
function createPresentation () {
  echo "import React from 'react'"
  echo "import styles from './$CREATE_NAME.module.scss'"
  echo ""
  echo "type Props = {}"
  echo ""
  echo "const Component: React.VFC<Props> = ({}) => ("
  echo "  <>"
  echo "  </>"
  echo ")"
  echo ""
  echo "export default Component"
}
touch $TARGET_DIR_PATH/presentations/$CREATE_NAME-presentation.tsx
createPresentation > $TARGET_DIR_PATH/presentations/$CREATE_NAME-presentation.tsx

# Presentation: SCSS Module生成
touch $TARGET_DIR_PATH//presentations/$CREATE_NAME.module.scss

echo "==============Create $CREATE_NAME page complete!=============="

exit 0
