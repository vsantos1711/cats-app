"use client";

export default function UserPage({ params }: { params: { user: string } }) {
  return (
    <main className="min-h-screen py-5 transition duration-300 dark:bg-slate-700">
      <nav>
        <h1>
          Olá, <span>{params.user}</span>
        </h1>
      </nav>
    </main>
  );
}
