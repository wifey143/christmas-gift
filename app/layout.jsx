import "./globals.css";

export const metadata = {
  title: "Christmas Gift 🎄",
  description: "A special Christmas website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <div className="snow"></div>
        {children}
      </body>
    </html>
  );
}
