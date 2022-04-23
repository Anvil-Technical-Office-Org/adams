#!/bin/bash

# 引数存在チェック
function isExistsArgs () {
  if [ $# = 0 ]; then
    echo "引数を渡してください。"
    exit 1
  fi
}

# ケバブケース to パスカルケース変換
function convertKebabcaseToPascalcase () {
  echo $1 | sed -r 's/(\b|_|-)(.)/\u\2/g'
}
