import "./globals.css";
import { Poppins, Pacifico } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
});

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-title",
});

export const metadata = {
  title: "Christmas Gift 🎄",
  description: "A special Christmas website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${pacifico.variable}`}>
        <div className="snow"></div>
        {children}
      </body>
    </html>
  );
}
