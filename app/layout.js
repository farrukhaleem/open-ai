import "./globals.css";
import Navigation from './components/Navigation';
import ShareCoffee from './components/ShareCoffee';
import { Poppins } from 'next/font/google';
import Footer from "./components/Footer";

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
      <body
        style={{ backgroundColor: '#212529', height: '100vh' }}
        className={`${poppins.variable} antialiased`}
      >
        <main className="font-sans">
        {children}
        </main>
        <script data-name="BMC-Widget" data-cfasync="false" src="https://cdnjs.buymeacoffee.com/1.0.0/widget.prod.min.js" data-id="talktokrishna" data-description="Support me on Buy me a coffee!" data-message="Support this project." data-color="#40DCA5" data-position="Right" data-x_margin="18" data-y_margin="18"></script>
        <Footer />
      </body>
    </html>
  );
}
