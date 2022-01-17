import Head from "next/head";

export default function Seo({ title, description }) {
  return (
    <Head>
      <title>{title}</title>
      <meta
        key="viewport"
        name="viewport"
        content="initial-scale=1.0, width=device-width"
      />
      <meta
        key="description"
        name="description"
        content={description}
      />

      <link rel="icon" href="/favicon.ico" />
    </Head>
  );
}
