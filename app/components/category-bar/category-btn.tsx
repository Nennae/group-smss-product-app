'use client';

import { ReactElement } from "react";

export default function CategoryBtn({
  icon,
  categoryName,
  onSelect
}: {
  icon: ReactElement;
    categoryName: string;
  onSelect?: (category: string) => void;
}) {
  return (
    <button
      onClick={() => onSelect?.(categoryName)}
      className="
        flex flex-col items-center justify-center
        gap-2 p-10 sm:p-4 md:p-5 lg:p-6 xl:p-8
        text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl
        w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 xl:w-36 xl:h-36
        bg-white text-neutral-700 rounded-lg border-solid border-2 border-zinc-400
        hover:bg-red-400 active:bg-red-400 focus:outline-sky-700
        transition-all duration-300"
    >
      <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
        {icon}
      </span>
      {categoryName}
    </button>
  );
}




