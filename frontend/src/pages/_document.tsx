import NextDocument, { Html, Head, Main, NextScript } from "next/document"

class Document extends NextDocument {
  render () {
    return (
      <Html>
        <Head>
          <title>Adams</title>
          <meta name="description" content="Adams is japanese headless cms" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
