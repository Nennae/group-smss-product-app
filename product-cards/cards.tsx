"use client";
import Image from "next/image";
import { Product } from "@/data-access/actions";

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
    <li className="">

      <div className="">
        <Image
          className=""
          src={product.thumbnail} // Ändrat från images till thumbnail
          width={200}
          height={200}
          alt={`Bild ${product.title}`}
        />
      </div>

      <h2>{product.title}</h2>

      <h3>Price:</h3>
      <p className="">
        <span className="">${product.price}</span>
      </p>

    </li>
  );
}