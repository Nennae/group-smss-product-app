import { API_ENDPOINT } from "./endpoints";

export const fetchCategories = async () => {
      const res = await fetch(`${API_ENDPOINT}/categories`);
      if (!res.ok) {
            throw new Error(`Error HTTP status ${res.status}: ${res.statusText}`);
      }
      const data = await res.json();
      return data;
};