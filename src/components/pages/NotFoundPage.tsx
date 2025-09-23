// src/components/pages/NotFoundPage.tsx
import React from "react";

export function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">404</h1>
      <p className="text-xl text-gray-400 mb-6">
        Oops! Page not found.
      </p>
      <button
        onClick={() => window.location.href = "/"}
        className="px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition"
      >
        Go Home
      </button>
    </div>
  );
}
