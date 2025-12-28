import type { Metadata } from "next";
import { Header, Footer } from "@atiissu/shared-ui";

export const metadata: Metadata = {
  title: "Atiissu Main",
  description: "Multi-zone test",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <main style={{ padding: "20px", minHeight: "400px" }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
