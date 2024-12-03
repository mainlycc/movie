"use client";
import { useAuth } from "@/context/AuthContext";
import SignIn from "@/components/Auth/SignIn";
import SignUp from "@/components/Auth/SignUp";

export default function Home() {
  const { user, signOut } = useAuth();

  if (!user) {
    return (
      <div className="flex flex-col items-center gap-8 p-8">
        <h1 className="text-2xl font-bold">Witaj w aplikacji</h1>
        <div className="flex gap-8">
          <div>
            <h2 className="text-xl mb-4">Zaloguj się</h2>
            <SignIn />
          </div>
          <div>
            <h2 className="text-xl mb-4">Zarejestruj się</h2>
            <SignUp />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h1>Witaj, {user.email}</h1>
      <button
        onClick={signOut}
        className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 mt-4"
      >
        Wyloguj się
      </button>
      {/* Tutaj reszta zawartości dla zalogowanych użytkowników */}
    </div>
  );
}
