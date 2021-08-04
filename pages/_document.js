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

          {/* Facebook Pixel Code  */}
          <script
            dangerouslySetInnerHTML={{
              __html: ` !function(f,b,e,v,n,t,s)
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

          {/* Global Site Tag (gtag.js) - Google Analytics */}
          <script
            async
            src={`https://www.googletagmanager.com/gtag/js?id=G-RY7X17QLHV`}
          />
          <script
            dangerouslySetInnerHTML={{
              __html: `window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-RY7X17QLHV');`,
            }}
          />
          {/* Global Site smartlook */}
          <script
            dangerouslySetInnerHTML={{
              __html: ` window.smartlook||(function(d) {
                var o=smartlook=function(){ o.api.push(arguments)},h=d.getElementsByTagName('head')[0];
                var c=d.createElement('script');o.api=new Array();c.async=true;c.type='text/javascript';
                c.charset='utf-8';c.src='https://rec.smartlook.com/recorder.js';h.appendChild(c);
                })(document);
                smartlook('init', '8878ef53d60cabbdce7d7ec20573ed1037d774d5');`,
            }}
          />
          {/* <!-- GetButton.io widget --> */}
          <script
            dangerouslySetInnerHTML={{
              __html: `    (function () {
              var options = {
                  whatsapp: "+573229444460", // WhatsApp number
                  call_to_action: "Envíanos un mensaje", // Call to action
                  position: "right", // Position may be 'right' or 'left'
              };
              var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
              var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
              s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
              var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
              })();`,
            }}
          />
          {/* <!-- /GetButton.io widget --> */}
        </Head>
        <body>
          <noscript>
            <Image
              layout="responsive"
              src={
                "https://www.facebook.com/tr?id=403484481197846&ev=PageView&noscript=1"
              }
              alt={"facebook pixel"}
              width="1"
              height="1"
              className="facebook-pixel"
            />
          </noscript>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
