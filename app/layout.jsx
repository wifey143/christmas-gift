import "./globals.css";
import { Dancing_Script } from "next/font/google";

const dancing = Dancing_Script({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata = {
  title: "Christmas Gift 🎄",
  description: "A special Christmas website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={dancing.className}>
        <div className="snow"></div>
        {children}
      </body>
    </html>
  );
}
