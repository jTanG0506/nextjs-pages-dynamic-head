import Head from "next/head";

interface MetadataProps {
  title?: string;
  url?: string;
  description?: string;
  image?: string;
}

const Metadata = ({ title, url, description, image }: MetadataProps) => (
  <Head>
    <meta name="robots" content="noindex" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="icon" href="/favicon.ico" />
    <title>{title ?? "BoomFi"}</title>

    {/* Open Graph */}
    <meta
      property="og:url"
      content={url || "https://app.boomfi.xyz"}
      key="og:url"
    />
    <meta property="og:type" content="website" key="og:type" />
    <meta
      property="og:title"
      content={title || "BoomFi - Accept Crypto Payments Seamlessly"}
      key="og:title"
    />
    <meta
      property="og:description"
      content={
        description ||
        "All-in-one solution to send, accept and convert crypto payments. Fast multi-chain crypto and fiat settlement. Get started today."
      }
      key="og:description"
    />
    <meta
      property="og:image"
      content={image || "/images/boomfi-banner.png"}
      key="og:image"
    />

    {/* Twitter Card */}
    <meta
      name="twitter:card"
      content="summary_large_image"
      key="twitter:card"
    />
    <meta
      property="twitter:domain"
      content="app.boomfi.xyz"
      key="twitter:domain"
    />
    <meta
      property="twitter:url"
      content={url || "https://app.boomfi.xyz"}
      key="twitter:url"
    />
    <meta
      name="twitter:title"
      content={title || "BoomFi - Accept Crypto Payments Seamlessly"}
      key="twitter:title"
    />
    <meta
      name="twitter:description"
      content={
        description ||
        "All-in-one solution to send, accept and convert crypto payments. Fast multi-chain crypto and fiat settlement. Get started today."
      }
      key="twitter:description"
    />
    <meta
      name="twitter:image"
      content={image || "/images/boomfi-banner.png"}
      key="twitter:image"
    />
  </Head>
);

export default Metadata;
