import { Inter, Roboto, Zen_Dots } from "next/font/google";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });
const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});
const zenDots = Zen_Dots({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-zen-dots",
});

export const metadata = {
  title: "Kasteh DEV",
  description: "Bem vindo ao meu portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={zenDots.variable}>{children}</body>
    </html>
  );
}
