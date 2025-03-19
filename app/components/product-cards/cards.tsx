"use client";
import { Product } from "@/interfaces/product-interfaces";
import Image from "next/image";
import Link from "next/link";

// Komponent för att visa listan med kort
export function CardList({ products }: { products: Product[] }) {
  return (
    <ul className="" role="list">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </ul>
  );
}

// Enskilt produktkort
export function Card({ product }: { product: Product }) {
  // Beräkna det rabatterade priset
  const discountedPrice = (product.price * (1 - product.discountPercentage / 100)).toFixed(2);

  return (
    <li className="bg-white w-full max-w-xs mb-11 p-4 mb-1 border-1 rounded-md shadow-md">

      <div className="bg-gray-100 w-full max-w-xs mb-11 p-4 mb-1 border-1 rounded-md shadow-md">
        <Link href={`/products/${product.id}`} >
        <Image
          className="w-full h-48 object-cover rounded mb-2"
          src={product.thumbnail} // Ändrat från images till thumbnail
          width={200}
          height={200}
          alt={`Bild ${product.title}`}
        />
        </Link>
      </div>
     <div className="items-center justify-between mb-2">
      <h2 className="text-xl font-bold text-black-300">{product.title}</h2>
       <div className="flex items-center justify-between mb-2">
      <p className="text-xl font-bold text-red-500 uppercase mb-1">${product.price} </p>
      <span> {product.discountPercentage}% </span>
      </div>
      </div>
    </li>
  );
}