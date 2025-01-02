import "./globals.css";

export const metadata = {
  title: "Kasteh DEV",
  description: "Bem vindo ao meu portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
