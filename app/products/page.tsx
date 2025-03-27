"use client";

import { useEffect, useState } from "react";
import { fetchProduct } from "@/data-access/fetch-products";
import { Products } from "@/interfaces/product-interfaces";
import { CardList } from "@/app/components/product-cards/cards";
import { Button } from "../components/product-cards/ui/button";

export default function SearchPage() {
  const [products, setProducts] = useState<Products[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Products[]>([]);
  const [sortOption, setSortOption] = useState("");
  const [selectedTag, setSelectedTag] = useState<string>("");
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => { 
    async function loadProducts() {
      try {
      const { products } = await fetchProduct();
      setProducts(products);
      setFilteredProducts(products);
    } catch (err) {
      setError("Kunde inte ladda productdata. Försök igen senare.");
      console.error("Fetch error:", err);
    }
  };
    loadProducts();
  }, []);

  // Sortera produkter
  const handleSort = (option: string) => {
    setSortOption(option);
    let sortedProducts = [...filteredProducts];

    if (option === "price-asc") {
      sortedProducts.sort((a, b) => a.price - b.price);
    } else if (option === "price-desc") {
      sortedProducts.sort((a, b) => b.price - a.price);
    } 

    setFilteredProducts(sortedProducts);
  };

  // Filtrera produkter baserat på tagg
  const handleTagClick = (tag: string) => {
    setSelectedTag(tag);
    let filtered = products.filter((product) => product.tags.includes(tag));
    setFilteredProducts(filtered);
  };

  return (
    <div className="flex flex-wrap gap-2 mt-5">
      <main className="">
        <h1>Search Products with tag</h1>

        {/* Taggfilter med snygg styling */}
        <div>
        <Button onClick={() => handleTagClick("meat")}>Meat</Button>
          <Button onClick={() => handleTagClick("beauty")}>Beauty</Button>
          <Button onClick={() => handleTagClick("perfumes")}>Perfumes</Button>
          <Button onClick={() => handleTagClick("fruits")}>Fruits</Button>
          <Button onClick={() => handleTagClick("cat food")}>Cat Food</Button>
          <Button onClick={() => handleTagClick("dog food")}>Dog Food</Button>
          <Button onClick={() => handleTagClick("furniture")}>Möbler</Button>
          <Button onClick={() => handleTagClick("vegetables")}>vegetables</Button>
          <Button onClick={() => handleTagClick("cooking essentials")}>cooking essentials</Button>
          <Button onClick={() => handleTagClick("desserts")}>desserts</Button>
          <Button onClick={() => handleTagClick("dairy")}>Färska ägg</Button>
          <Button onClick={() => handleTagClick("seafood")}>seafood</Button>
          <Button onClick={() => handleTagClick("condiments")}>Honung</Button>
          <Button onClick={() => handleTagClick("kitchen tools")}>kitchen tools</Button>
          <Button onClick={() => handleTagClick("home decor")}>home decor</Button>
          <Button onClick={() => handleTagClick("kitchen appliances")}>kitchen appliances</Button>
          <Button onClick={() => handleTagClick("laptops")}>laptops</Button>
          <Button onClick={() => handleTagClick("men's t-shirts")}>men's t-shirts</Button>
          <Button onClick={() => handleTagClick("footwear")}>footwear</Button>
          <Button onClick={() => handleTagClick("watches")}>watches</Button>
          <Button onClick={() => handleTagClick("electronics")}>electronics</Button>
          <Button onClick={() => handleTagClick("motorcycles")}>motorcycles</Button>
          <Button onClick={() => handleTagClick("personal care")}>personal care</Button>
          <Button onClick={() => handleTagClick("smartphones")}>smartphones</Button>
          <Button onClick={() => handleTagClick("sports equipment")}>sports equipment</Button>
          <Button onClick={() => handleTagClick("eyewear")}>eyewear</Button>
          <Button onClick={() => handleTagClick("vehicles")}>vehicles</Button>
          <Button onClick={() => handleTagClick("fashion accessories")}>fashion accessories</Button>
          <Button onClick={() => handleTagClick("clothing")}>clothing</Button>
          <Button onClick={() => handleTagClick("women's shoes")}>women's shoes</Button>
          <Button onClick={() => handleTagClick("beverages")}>beverages</Button>
          <Button onClick={() => handleTagClick("women's watches")}>women's watches</Button>
        </div>

        {/* Sorteringsdropdown */}
        <h2>Sort Products about price</h2>
        <select
          value={sortOption}
          onChange={(e) => handleSort(e.target.value)}
          className="flex flex-col items-center justify-center
        gap-2 p-3 sm:p-4 md:p-5 mg:p-6 m:p-8
        text-sm sm:text-base md:text-lg lg:text-m m:text-l
        w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 l:w-36 l:h-36
        bg-white text-neutral-700 rounded-lg
        hover:bg-yelow-400 active:bg-yelow-400 focus:outline-sky-700
        transition-all duration-300"
        >
          <option value="price-asc">Pris: Lågt till Högt</option>
          <option value="price-desc">Pris: Högt till Lågt</option>
        </select>

        {/* Visar filtrerade produkter */}
        <CardList products={filteredProducts} />

       
      </main>
      
    </div>
  );
}
/*import PaginationNav from "../components/product-cards/pagination/pagNav";
import { Card, CardHeader, CardTitle } from "../components/product-cards/ui/card";
import { API_ENDPOINT } from "@/data-access/endpoints";
import { fetchFromAPI } from "@/data-access/fetchProductsFromAPI";
import { parseQueryParam } from "../components/product-cards/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { Products } from "@/interfaces/product-interfaces";
import { fetchProducts } from "@/data-access/fetch-products";

export const metadata: Metadata = {
  title: "Product Listing",
  description: "Products list from the product API",
};

interface SearchParams {
  [key: string]: string | string[] | undefined;
}

export default async function ProductsPage({
  searchParams,
}: {
  searchParams?: { skip?: string; limit?: string }; // Fixing incorrect promise type
}) {
  // Destructure searchParams and parse them safely
  const parsedSkip = Number(searchParams?.skip ?? "0");
  const parsedLimit = Number(searchParams?.limit ?? "10");

  /*const parsedSkip = parseQueryParam(skipParam, 0);
  const parsedLimit = parseQueryParam(limitParam, 10);
*//*
const { products, total } = await fetchProducts(parsedSkip, parsedLimit);
  try {
    // Fetch data from API
    const data = await fetchFromAPI<Products>(
      `${API_ENDPOINT}?limit=${parsedLimit}&skip=${parsedSkip}`
    );

    // Handle API errors
    if (!data || "message" in data) {
      console.error("Error fetching data:", data?.message);
      return <div className="text-red-500 text-center">Error: {data?.message || "Failed to load data"}</div>;
    }

    return (
      <>
       <h1>Products Page</h1>
       <p>Showing {parsedLimit} products, skipping {parsedSkip}</p>
        <ul className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4 mx-4 my-8">
          {
            // Ensure `data.results` exists before calling `.map()`
            data.results?.length ? (
              data.results.map((p) => (
                <li key={p.id}>
                  <Link href={`/products/${p.id}`}>
                    <Card>
                      <CardHeader>
                        <CardTitle>
                          <h2 className="text-center capitalize">{p.name}</h2>
                        </CardTitle>
                      </CardHeader>
                    </Card>
                  </Link>
                </li>
              ))
            ) : (
              <p className="text-center col-span-full">No products found.</p>
            )
          }
        </ul>

        <PaginationNav
          path="products"
          pagesCount={total}
          limit={parsedLimit}
          skip={parsedSkip}
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div className="text-red-500 text-center">Something went wrong while loading products.</div>;
  }
}*/
