import type { Metadata } from 'next';
import Script from 'next/script';
import { Inter, Quicksand, Libre_Caslon_Text } from 'next/font/google';
import '../../styles/globals.css';

export const inter = Inter({ subsets: ['latin'], variable: '--font-inter'});
export const quicksand = Quicksand({ subsets: ['latin'], variable: '--font-quicksand' });
export const libre_caslon_text = Libre_Caslon_Text({ subsets: ['latin'], weight: ['400'], variable: '--font-libre_caslon_text' });

export const metadata: Metadata = {
  title: 'Grounding Neurons',
  description: 'Official home of Grounding Neurons, a 501(c)(3) nonprofit organization.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${quicksand.variable} ${libre_caslon_text.variable} bg-white`}>{children}</body>
      {/* reCAPTCHA script load */}
      <Script src="https://www.google.com/recaptcha/api.js?render={6LchVUApAAAAAPOJ1Plh_LSUXYQG3DCQwffMVqac}"/>
    </html>
  )
};
