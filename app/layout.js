import "./globals.css";
import Navigation from './components/Navigation';
import ShareCoffee from './components/ShareCoffee';
import { Poppins } from 'next/font/google';
import Footer from "./components/Footer";
import Script from "next/script";


const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // adjust as needed
  variable: '--font-poppins',
  display: 'swap',
});

export const metadata = {
  title: "Talk to Krishna",
  description: "Ask Your Problems, Krishna will Answer 🦚",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={poppins.variable}>
      <head>
        {/* Google Tag Manager Head */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`
            (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
              new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
              j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
              'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-TLFSC286');
          `}
        </Script>
      </head>
      <body
        style={{ backgroundColor: '#212529', height: '100vh' }}
        className={`${poppins.variable} antialiased`}
      >
         {/* Google Tag Manager (noscript) */}
         <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TLFSC286"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          ></iframe>
        </noscript>
        <main className="font-sans">
        {children}
        </main>
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="talktokrishna" data-description="Support me on Buy me a coffee!" data-message="Support this project." data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        <Footer />
      </body>
    </html>
  );
}
