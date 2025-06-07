"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="relative w-full h-screen text-white overflow-hidden font-sans">
      {/* Arka Plan */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://image.tmdb.org/t/p/original/iQFcwSGbZXMkeyKrxbPnwnRo5fl.jpg"
          alt="Background"
          className="w-full h-full object-cover scale-110 filter blur-md brightness-50"
        />
      </div>

      {/* İçerik */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <SignedIn>
          <h1 className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full text-lg font-semibold shadow-lg hover:scale-105 animate-fade-in">
            Tekrar Hoş Geldin!
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6 animate-fade-in">
            Yepyeni filmler ve diziler seni bekliyor. Keşfetmeye hazır mısın?
          </p>
          <UserButton afterSignOutUrl="/" />
          <button
            onClick={() => router.push("/browse")}
            className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full text-lg font-semibold shadow-lg hover:scale-105 animate-fade-in"
          >
            🎬 Devam Et
          </button>
        </SignedIn>

        <SignedOut>
          <h1 className="mt-6 px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full text-lg font-semibold shadow-lg hover:scale-105 animate-fade-in">
            Netflix'e Hoş Geldiniz
          </h1>
          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-6 animate-fade-in">
            Sınırsız film, dizi ve çok daha fazlası. Her yerde izle.
          </p>
          <SignInButton mode="modal">
            <button className="px-8 py-3 bg-red-600 hover:bg-red-700 transition-all duration-300 rounded-full text-lg font-semibold shadow-lg hover:scale-105 animate-fade-in">
              🚀 Giriş Yap / Kayıt Ol
            </button>
          </SignInButton>
        </SignedOut>
      </div>
    </main>
  );
}
