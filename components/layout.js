import Head from "next/head";
import Navbar from "./navbar";
import Body from "./body";

export const siteTitle = "OnlyDans";

export default function Layout({ children, pageName }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="The best place one the 'net for Dan content"
        />
        <meta name="og:title" content={siteTitle} />
        <script
          src="https://kit.fontawesome.com/fbb51231af.js"
          crossOrigin="anonymous"
        ></script>
      </Head>
      <header className="w-screen fixed">
        <Navbar></Navbar>
      </header>
      <main className="content">
        <Body pageName={pageName}>{children}</Body>
      </main>
    </div>
  );
}
