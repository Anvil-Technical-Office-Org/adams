import type { NextComponentType, NextPage, NextPageContext } from 'next'
import type { AppProps } from 'next/app'
import type { Router } from 'next/router'
import type { AppInitialProps } from 'next/dist/shared/lib/utils'
// import type { NextRouter } from 'next/router'

declare module 'next' {
  type NextPage<P = {}, IP = P> = NextComponentType<NextPageContext, IP, P> & {
    layout?: 'default' | 'management' | 'create-space'
  }
}

declare module 'next/app' {
  type AppProps<P = {}> = AppInitialProps & {
    Component: NextComponentType<NextPageContext, any, P> & {
      layout?: 'default' | 'management' | 'create-space'
    }
    router: Router
    __N_SSG?: boolean | undefined
    __N_SSP?: boolean | undefined
    __N_RSC?: boolean | undefined
  }
}
