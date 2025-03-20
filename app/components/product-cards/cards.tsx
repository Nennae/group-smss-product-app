"use client";
import { Product } from "@/interfaces/product-interfaces";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

// Enskilt produktkort
export function Card({ product }: { product: Product }) {
  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <li className="bg-white w-full max-w-xs mb-11 p-4 border rounded-md shadow-md">
      <div className="bg-gray-100 w-full max-w-xs p-4 mb-6 rounded-md shadow-md">
        <Link href={`/products/${product.id}`}>
          <Image
            className="w-full h-48 object-cover mb-2"
            src={product.thumbnail}
            width={200}
            height={200}
            alt={`Bild ${product.title}`}
          />
        </Link>
      </div>
      <div className="items-center justify-between mb-2">
        <h2 className="text-xl font-bold text-black-300">{product.title}</h2>
        <div className="flex items-center justify-between mt-6">
          <p className="text-xl font-bold text-red-500 uppercase">${product.price}</p>
          <span className="text-sm font-semibold text-green-600">{product.discountPercentage}%</span>
        </div>
      </div>
    </li>
  );
}

// Lista med produkter
export function CardList({ products, totalProducts }: { products: Product[]; totalProducts: number }) {
  const router = useRouter();
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 24; // fixa till 24 ..men nu testa 8 för att vissa funkar bra eller inte
  const totalPages = Math.ceil(totalProducts / productsPerPage);

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    router.push(`/?page=${newPage}`);
  };

  return (
    <div>
      <ul className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
        {products.map((product) => (
          <Card key={product.id} product={product} />
        ))}
      </ul>

      {/* Paginering */}
      <div className="flex justify-center mt-6 space-x-4">
        <button
          className={`px-4 py-2 border rounded ${currentPage === 1 ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
              <Image src="/icons/chevron-left.png" alt="Previous Page" width={24} height={24} />

        </button>
        <span className="px-4 py-2 border rounded bg-gray-200">Sida {currentPage} av {totalPages}</span>
        <button
          className={`px-4 py-2 border rounded ${currentPage === totalPages ? "opacity-50 cursor-not-allowed" : ""}`}
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
           <Image src="/icons/chevron-right.png" alt="Next Page" width={24} height={24} />

        </button>
      </div>
    </div>
  );
}
