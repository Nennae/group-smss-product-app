"use server";

export interface Products {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
  }
  
  export interface Product {
    categories: any;
    id: number;
    title: string;
    category: string;
    description: string;
    price: number;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
    images: string[]; // Ändrat från string till string[] eftersom API:et returnerar en array
    thumbnail: string;
  }

const API_ENDPOINT = "https://dummyjson.com/products/";

export async function fetchProduct() {
  //TODO
  const res = await fetch("https://dummyjson.com/products?limit=194&skip=0");
  if (!res.ok) {
    // throw new Error("Failed to fetch products");
    throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);

  }
  return await res.json();
  const data: Products = await res.json();
  console.log(data);
  return data;
}