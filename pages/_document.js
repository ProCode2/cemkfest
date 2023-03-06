import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <title>ResonanceXII</title>
        <meta
          name="description"
          content="Resonance XII is a technical fest organized by students of College of Engineering and Management, Kolaghat. This techno-cultural fest is also called the Durga Puja of CEMKians."
        />
        <meta
          name="keyword"
          content="Tech fest, Resonance, resonance xii, coding, robotics, IOT, CEMK"
        />
        <meta
          property="og:title"
          content="Resonance XII - Unleash The Matrix"
        />
        <meta
          property="og:description"
          content="Resonance XII is a technical fest organized by students of College of Engineering and Management, Kolaghat. This techno-cultural fest is also called the Durga Puja of CEMKians."
        />
        <meta property="og:image" content="/images/meta_logo.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="font-lato">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
