# TODO : 本番・開発・テスト環境でDockerfile切り分け
FROM golang:1.17.5-alpine

WORKDIR /workspace

RUN apk update && \
    apk add --no-cache \
    alpine-sdk

RUN go get -u golang.org/x/tools/gopls \
    github.com/uudashr/gopkgs/v2/cmd/gopkgs \
    github.com/ramya-rao-a/go-outline \
    github.com/cweill/gotests/... \
    github.com/fatih/gomodifytags \
    github.com/haya14busa/goplay/cmd/goplay \
    honnef.co/go/tools/cmd/staticcheck \
    github.com/josharian/impl \
    github.com/go-delve/delve/cmd/dlv \
    github.com/cosmtrek/air
