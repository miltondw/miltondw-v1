import Document, { Html, Head, Main, NextScript } from "next/document";
import Image from "next/image";
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="es">
        <Head>
          <meta
            name="description"
            content="milton estrada desarrollador web y analista freelancer"
          />
          <link
            rel="stylesheet"
            href="https://use.fontawesome.com/releases/v5.15.3/css/all.css"
            integrity="sha384-SZXxX4whJ79/gErwcOYf+zWLeJdY/qpuqC4cAa9rOGUstPomtqpuNWT9wdPEn2fk"
            crossOrigin="anonymous"
          ></link>

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-RY7X17QLHV`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RY7X17QLHV');`,
            }}
          />
          {/* Facebook Pixel Code  */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
              !function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '403484481197846');
fbq('track', 'PageView');`,
            }}
          />

          <noscript>
            <Image
              layout="responsive"
              src={
                "https://www.facebook.com/tr?id=403484481197846&ev=PageView&noscript=1"
              }
              alt={"facebook pixel"}
              width="1"
              height="1"
              style={{ display: "none" }}
            />
          </noscript>
          {/* <! End Facebook Pixel Code */}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
