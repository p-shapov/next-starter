import type { Metadata } from "next";
import { Montserrat } from "next/font/google";

const montserrat = Montserrat({ subsets: ["latin"] });

const metadata: Metadata = {
  title: "CHANGE ME",
};

function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <main>{children}</main>
      </body>
    </html>
  );
}

export { metadata };
export default RootLayout;
