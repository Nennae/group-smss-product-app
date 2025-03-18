"use server";
import { API_ENDPOINT } from "./endpoints";


export async function fetchProducts(limit="194", skip="0") {
  //TODO
  const res = await fetch(`${API_ENDPOINT}?limit=${limit}&skip=${skip}`);
  if (!res.ok) {
    // throw new Error("Failed to fetch products");
    throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);

  }
  return await res.json();
  // const data: Products = await res.json();
  // console.log(data);
  // return data;
}