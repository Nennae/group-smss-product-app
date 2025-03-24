import PaginationNav from "../components/product-cards/pagination/pagNav";
import { Card, CardHeader, CardTitle } from "../components/product-cards/ui/card";
import { API_ENDPOINT } from "@/data-access/endpoints";
import { fetchFromAPI } from "@/data-access/fetchProductsFromAPI";
import { parseQueryParam } from "../components/product-cards/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { Products } from "@/interfaces/product-interfaces";

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
  searchParams: SearchParams; // Fixing incorrect promise type
}) {
  // Destructure searchParams and parse them safely
  const skipParam = searchParams.skip;
  const limitParam = searchParams.limit;

  const parsedSkip = parseQueryParam(skipParam, 0);
  const parsedLimit = parseQueryParam(limitParam, 10);

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
          pagesCount={data.count}
          limit={parsedLimit}
          skip={parsedSkip}
        />
      </>
    );
  } catch (error) {
    console.error("Error fetching products:", error);
    return <div className="text-red-500 text-center">Something went wrong while loading products.</div>;
  }
}
