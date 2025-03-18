import Image from "next/image";
import { fetchProducts } from "../data-access/fetch-products";
import { CardList } from "@/app/components/product-cards/cards";

export default async function Home() {

  const { products } = await fetchProducts();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">

      <h1 className="text-center text-black-300 mt-10 items-center justify-between mb-2">MIN Products Store <br></br> <span>Totalt är: {products.length} </span></h1>
        
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            <div>
            <CardList products={products} />
            </div>
        </ol>

      </main>
    </div>
  );
}
