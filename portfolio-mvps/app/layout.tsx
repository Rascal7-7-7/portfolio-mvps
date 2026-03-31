import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "業務改善・MVP開発 | フリーランスエンジニア",
  description:
    "非効率な業務を、最短で使えるシステムに落とし込む。小規模事業者・チーム向けに、課題ヒアリング〜設計〜実装まで対応します。",
  openGraph: {
    title: "業務改善・MVP開発 | フリーランスエンジニア",
    description:
      "非効率な業務を、最短で使えるシステムに落とし込む。",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body className="bg-surface-950 text-surface-50 antialiased">
        {children}
      </body>
    </html>
  );
}
