import About from "@/components/About";
import Hero from "@/components/Hero";
import Testimonial from "@/components/Testimonial";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <link rel="icon" type="image/svg+xml" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/icons/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/icons/favicon-16x16.png"
        />
        <link
          rel="mask-icon"
          href="/icons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="robots" content="follow, index" />
        <meta name="google-site-verification" content="" />

        <meta name="facebook-domain-verification" content="" />
        <link rel="manifest" href="/manifest.json" />
        <meta
          name="description"
          content="Elevate your style with Gourge Sourcing, the premier buying house offering high-quality readymade garments tailored to perfection for global markets. From denim to T-shirts, jackets to trousers, explore our diverse collection for men, women, boys, and girls. Experience unmatched quality, exceptional service, and a rich heritage of excellence. Join us in weaving together fashion, quality, and passion to redefine elegance. Discover Gourge Sourcing today!"
          key="desc"
        />
        <meta content="#ca8a04" name="theme-color" />
        <meta content="" name="position" />
        <meta name="distribution" content="Global" />
        <meta name="coverage" content="Worldwide" />
        <meta name="rating" content="General" />
        <meta name="author" content="Gourge Sourcing" />
        <meta name="owner" content="Gourge Sourcing" />
        <meta name="robots" content="index,follow,noodp,noydir" />
        <meta name="googlebot" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta name="msvalidate.01" content="" />
        <meta property="og:site_name" content="Gourge Sourcing" />
        <meta
          property="og:description"
          content="Elevate your style with Gourge Sourcing, the premier buying house offering high-quality readymade garments tailored to perfection for global markets. From denim to T-shirts, jackets to trousers, explore our diverse collection for men, women, boys, and girls. Experience unmatched quality, exceptional service, and a rich heritage of excellence. Join us in weaving together fashion, quality, and passion to redefine elegance. Discover Gourge Sourcing today!"
        />
        <meta property="og:title" content="Gourge Sourcing" />
        <meta property="og:image" content="" />
        <meta property="fb:app_id" content="" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="628" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:site"
          content="Gourge Sourcing - RMG, Apparel Sourcing Around the World"
        />
        <meta name="twitter:title" content="Gourge Sourcing" />
        <meta
          name="twitter:description"
          content="Elevate your style with Gourge Sourcing, the premier buying house offering high-quality readymade garments tailored to perfection for global markets. From denim to T-shirts, jackets to trousers, explore our diverse collection for men, women, boys, and girls. Experience unmatched quality, exceptional service, and a rich heritage of excellence. Join us in weaving together fashion, quality, and passion to redefine elegance. Discover Gourge Sourcing today!"
        />
        <meta name="twitter:image" content="" />
        <meta name="keywords" content="" />
        <link href="https://gourgesourcing.com" rel="canonical" />
        <meta content="https://gourgesourcing.com/" property="og:url" />
        <meta content="Gourge Sourcing" name="author" />
        <meta content="Gourge Sourcing" name="application-name" />
        <title>Gourge Sourcing</title>
      </Head>
      <Hero />
      <About />
      <Testimonial />
    </>
  );
}
