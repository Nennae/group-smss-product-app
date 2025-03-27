import { fetchProducts } from "@/data-access/fetch-products"
import { CardList } from "@/app/components/product-cards/cards";
import CategoryBar from "@/app/components/category-bar/category-bar";

export default async function Home({ searchParams }: { searchParams: Promise<{ page: string }> }) {
  const page = (await searchParams).page;
  const currentPage = Number(page) || 1;
  const { products, total } = await fetchProducts(currentPage, 24);

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <CategoryBar />
        <h1 className="text-center text-black-300 mt-10">MIN Products Store</h1>
        <span>Totalt: {total} produkter</span>
        <CardList products={products} totalProducts={total} />

      </main>
    </div>
  );
}
