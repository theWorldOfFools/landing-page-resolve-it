import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Resolve IT - Sistem Helpdesk Ticketing",
  description:
    "Resolve IT adalah sistem helpdesk ticketing untuk mengelola laporan kendala, permintaan layanan, SLA, teknisi, dan laporan performa IT.",
  keywords: [
    "helpdesk",
    "ticketing system",
    "sistem helpdesk",
    "aplikasi helpdesk",
    "IT support",
    "Resolve IT",
  ],
  authors: [{ name: "Resolve IT Team" }],
  creator: "Resolve IT Team",
  publisher: "Resolve IT",
  metadataBase: new URL("https://resolve.tsany.web.id"),
  alternates: {
    canonical: "https://resolve.tsany.web.id",
  },
  openGraph: {
    title: "Resolve IT - Sistem Helpdesk Ticketing",
    description:
      "Kelola tiket IT, SLA, teknisi, prioritas layanan, dan laporan performa dalam satu sistem.",
    url: "https://resolve.tsany.web.id",
    siteName: "Resolve IT",
    locale: "id_ID",
    type: "website",

    // 🔥 INI YANG KAMU TAMBAH
    images: [
      {
        url: "https://resolve.tsany.web.id/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Resolve IT - Sistem Helpdesk Ticketing",
    description:
      "Sistem helpdesk ticketing untuk layanan IT yang lebih cepat, rapi, dan terukur.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}