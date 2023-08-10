import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={`
        bg-white dark:bg-black text-[#0e0e0e] dark:text-[#a0a0a0] 
        selection:text-[#fff] selection:bg-[#0e0e0e]
        dark:selection:text-[#0e0e0e]  dark:selection:bg-[#fff]
      `}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
