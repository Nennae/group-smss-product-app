"use server";
import { API_ENDPOINT } from "./endpoints";
import { Products } from "@/interfaces/product-interfaces";

const API_ENDPOINT_SORT = "https://dummyjson.com/products/";

export async function fetchProducts(page = 1, limit = 24) {
  const skip = (page - 1) * limit; // Beräkna hur många produkter att hoppa över

  const res = await fetch(`${API_ENDPOINT}?limit=${limit}&skip=${skip}`);

  if (!res.ok) {
    throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
  }

  const data = await res.json();

  return {
    products: data.products, // Lista över produkter
    total: data.total,       // Totalt antal produkter (för paginering)
  };
}


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