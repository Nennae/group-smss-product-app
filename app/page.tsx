import Image from "next/image";
import { fetchProduct } from "./actions";
import { CardList } from "@/product-cards/cards";

export default async function Home() {

  const { products } = await fetchProduct();

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
      <h1>MIN Proucts Store ..Totalt är: {products.length}</h1>
        
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
        <div>
        <CardList products={products} />

        </div>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
     
          <a
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              className="dark:invert"
              src="/logo.png"
              alt="Company logomark"
              width={20}
              height={20}
            />
            View All Products</a>
        </div>
      </main>

      <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/home"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          HOME
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/contact"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          CONTACT
        </a>
        <a
          className="flex items-center gap-2 hover:underline hover:underline-offset-4"
          href="/about"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          ABOUT
        </a>
      </footer>
    </div>
  );
}
