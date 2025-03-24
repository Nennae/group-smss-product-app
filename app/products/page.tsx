import PaginationNav from "../components/product-cards/pagination/pagNav";
import { Card, CardHeader, CardTitle } from "../components/product-cards/ui/card";
import { API_ENDPOINT } from "@/data-access/endpoints";
import { fetchFromAPI } from "@/data-access/fetchProductsFromAPI";
import { parseQueryParam } from "../components/product-cards/lib/utils";
import { Metadata } from "next";
import Link from "next/link";
import { skip } from "node:test";
import { Products } from "@/interfaces/product-interfaces";

export const metadata: Metadata = {
  title: "Product listing",
  description: "Products list from the productapi",
};

export default async function ProductsPage({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>; //this is default what could be in searchParams
}) {
  //Destructure searchParams and parse them
  const { skip, limit } = await searchParams;
  const parsedSkip = parseQueryParam(skip, 0);
  const parsedLimit = parseQueryParam(limit, 10);

  //fetch the data from the api using the endpoint and the interface stated at the start of the this code
  //TODO: We could maybe make the search params dynamically here instead of hard coding them
  const data = await fetchFromAPI<Products>(
    `${API_ENDPOINT}?limit=${parsedLimit}&offset=${parsedSkip}`
  );

  //if there is a message in data it means error, so display that and nothing else
  if ("message" in data) {
    console.log("Error fetching data:", data.message);
    return <div>Error: {data.message}</div>;
  }

  return (
    <>
      <ul className="grid grid-cols-[repeat(auto-fit,minmax(22rem,1fr))] gap-4 mx-4 my-8">
        {
          //TODO: 
          data.results.map((p) => (
            <li key={p.id}>
              <Link href={`/products/${p.id}`}>
                <Card>
                  <CardHeader>
                    <CardTitle>
                      <h2 className="text-center">
                        <span className="capitalize">{p.name}</span>
                      </h2>
                    </CardTitle>
                  </CardHeader>
                </Card>
              </Link>
            </li>
          ))
        }
      </ul>
      <PaginationNav
        path={"products"}
        pagesCount={data.count}
        limit={parsedLimit}
        skip={parsedSkip}
      />
    </>
  );
}