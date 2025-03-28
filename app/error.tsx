'use client';

import { useEffect, useState } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const [clicked, setClicked] = useState(false);

  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col justify-center items-center min-h-screen text-center mt-25">
      <div className="bg-white p-8 rounded-2xl shadow-lg max-w-md">
        <h2 className="text-2xl font-bold mb-4">Something went wrong!</h2>
        <p className="text-gray-600 mb-6">Please try again.</p>
        <button
          onClick={() => {
            setClicked(true);
            setTimeout(() => {
              setClicked(false);
              reset();
            }, 300);
          }}
          className={`px-6 py-3 rounded-lg text-white font-semibold transition-all duration-300 ${clicked ? 'bg-green-600' : 'bg-red-500 hover:bg-green-500'}`}
        >
          Try Again
        </button>
      </div>
      <div className="mt-auto py-4 text-gray-500"></div>
    </div>
  );
}
