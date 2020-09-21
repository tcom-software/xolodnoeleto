import Document, { Html, Head, Main, NextScript } from "next/document";
import { ServerStyleSheet } from "styled-components";

// import theme from "@styles/theme";
// import GTAG from "utils/gtag";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const isProduction = process.env.NODE_ENV === "production";
      const initialProps = await Document.getInitialProps(ctx);

      return {
        ...initialProps,
        isProduction,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html lang="ru">
        <Head>
          <meta charSet="utf-8" />
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
          <meta property="og:url" content="https://www.laitklimat.ru/" />
          {/*<meta name="theme-color" content={theme.colors.secondary} />*/}

          <meta
            property="og:title"
            content="Стандартная установка кондиционеров"
          />
          <meta
            name="description"
            content="Стандартная установка кондиционеров"
          />
          <meta
            nema="keywords"
            content="Кондиционирование, Вентиляция, Холодильное оборудование, Обогреватели и камины, Отопление и водоснабжение, Расходные материалы"
          />
        </Head>
        <body>
          <Main />
          <div id="portal"></div>
          <NextScript />
        </body>
      </Html>
    );
  }
}
