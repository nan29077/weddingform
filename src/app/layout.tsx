import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "웨딩폼 | 결혼식 이벤트 영상 QR 판매",
  description:
    "연애 이야기, 부모님 영상, 어린 시절 앨범까지. 결혼식 날 QR 하나로 하객이 영상을 구매하고, 구매한 하객에게 추첨 경품을 드립니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        {/* eslint-disable-next-line @next/next/no-page-custom-font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@400;500;600;700&family=Noto+Serif+KR:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
