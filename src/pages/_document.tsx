import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  const basePath = process.env.NODE_ENV === 'production' ? '/DannyCS_Portfolio' : '';
  
  return (
    <Html lang="en">
      <Head>
        {/* Ensure all assets are loaded with the correct base path */}
        <base href={`${basePath}/`} />
      </Head>
      <body>
        <Main />
        <NextScript />
        {/* Script to fix asset paths for GitHub Pages */}
        {process.env.NODE_ENV === 'production' && (
          <script src="/DannyCS_Portfolio/fix-paths.js" defer></script>
        )}
      </body>
    </Html>
  )
}
