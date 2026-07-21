import localFont from "next/font/local";
import "./globals.css";
import GlobalProviders from "./GlobalProviders";

const vazirFont = localFont({
  src: "../../public/fonts/Vazirmatn[wght].woff2",
});

export const metadata = {
  title: "Big Shopping Store",
  description: "Online Shopping Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fa" dir="rtl">
      <body className={vazirFont.className}>
        <GlobalProviders>{children}</GlobalProviders>
      </body>
    </html>
  );
}