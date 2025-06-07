// app/layout.tsx
import "@/styles/globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Netflix Clone",
  description: "TMDB ve Clerk ile geliştirilen Next.js projesi",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="tr">
        <body className={inter.className}>
          <Navbar />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
