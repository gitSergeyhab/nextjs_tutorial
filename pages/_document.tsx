import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDoc extends Document {
  render() {
    return (
        <Html lang="ru">
        <Head/>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDoc;