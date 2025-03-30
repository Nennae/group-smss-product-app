"use client";
import { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  FaTablet,
  FaTshirt,
  FaChair,
  FaShower,
  FaGlasses,
  FaCarSide,
} from "react-icons/fa";
import CategoryBtn from "./category-btn";
import CategoryHeading from "@/app/components/category-bar/category-heading";
import {
  Categories,
  MappedCategories,
} from "@/interfaces/categories-interface";
import { fetchCategories } from "@/data-access/fetch-categories";

// Predefined mapping of categories to slugs
const mappedCategories: MappedCategories = {
  Technology: ["tablets", "smartphones", "laptops"],
  Clothing: [
    "tops",
    "mens-shirts",
    "womens-dresses",
    "mens-shoes",
    "womens-shoes",
  ],
  Home: ["furniture", "groceries", "home-decorations", "kitchen-accessories"],
  Beauty: ["beauty", "fragrances", "skin-care"],
  Accessories: [
    "sunglasses",
    "mobile-accessories",
    "watches",
    "womens-jewellery",
    "sports-accessories",
    "womens-watches",
    "womens-bags",
  ],
  Vehicles: ["vehicle", "motorcycle"],
};

export default function CategoryBar() {
  const [products, setProducts] = useState<any[]>([]); // State for storing fetched products
  const router = useRouter();
  const searchParams = useSearchParams();

  const selectedCategory = searchParams.get("category");

  useEffect(() => {

    if (selectedCategory) {
      // Find the category slugs that match the selected category
      const categorySlugs = Object.entries(mappedCategories).find(
        ([categoryName]) => categoryName === selectedCategory
      )?.[1];

      
      if (categorySlugs) {
        // Fetch categories from the API
        fetchCategories().then((data: Categories[]) => {
          // Find categories in API that match the slugs in the selected category
          const matchedCategories = data.filter((category) =>
            categorySlugs.includes(category.slug)
          );

          // Fetch products for all matched categories' URLs
          Promise.all(
            matchedCategories.map((category) =>
              fetch(category.url)
                .then((response) => response.json())
                .then((productData) => productData.products) // Assume 'products' key contains the list of products
                .catch((error) => {
                  console.error(
                    `Error fetching products for category "${category.name}":`,
                    error
                  );
                  return []; // Return empty array if there's an error
                })
            )
          )
            .then((allProducts) => {
              // Combine all products into one array
              const combinedProducts = allProducts.flat();
              setProducts(combinedProducts); // Set the combined products to state
            })
            .catch((error) => {
              console.error("Error fetching product data:", error);
            });
        });
      }
    }
  }, [selectedCategory]); // Trigger effect when selectedCategory changes

  const handleCategorySelect = (category: string) => {
    router.push(`/?category=${category}`);
  };

  return (
    <>
      <section className="flex flex-col items-center text-left gap-8 md:gap-10 lg:gap-12 w-full">
        <div className="w-full max-w-4xl">
          <div className="flex items-center gap-2 md:gap-3 lg:gap-4 self-start">
            <div className="bg-red-400 w-2 h-5 md:h-6 lg:h-7 rounded-xs"></div>
            <h2 className="text-red-400 text-lg md:text-xl lg:text-2xl">
              Categories
            </h2>
          </div>
          <p className="text-lg md:text-xl lg:text-2xl font-semibold mt-2">
            Browse By Category
          </p>
        </div>
        <div className="grid grid-cols-3 grid-rows-2 gap-6 md:gap-8 lg:gap-10 xl:gap-12 place-items-center justify-center w-full max-w-4xl">
          <CategoryBtn
            onSelect={() => handleCategorySelect("Technology")}
            categoryName="Technology"
            icon={<FaTablet />}
          />
          <CategoryBtn
            onSelect={() => handleCategorySelect("Clothing")}
            categoryName="Clothing"
            icon={<FaTshirt />}
          />
          <CategoryBtn
            onSelect={() => handleCategorySelect("Home")}
            categoryName="Home"
            icon={<FaChair />}
          />
          <CategoryBtn
            onSelect={() => handleCategorySelect("Beauty")}
            categoryName="Beauty"
            icon={<FaShower />}
          />
          <CategoryBtn
            onSelect={() => handleCategorySelect("Accessories")}
            categoryName="Accessories"
            icon={<FaGlasses />}
          />
          <CategoryBtn
            onSelect={() => handleCategorySelect("Vehicles")}
            categoryName="Vehicles"
            icon={<FaCarSide />}
          />
        </div>
      </section>

      {selectedCategory && (
        <CategoryHeading>{selectedCategory}</CategoryHeading>
      )}

      {/* Display products for the selected category */}
      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product, index) => (
            <div key={index} className="border p-4">
              <h3>{product.name}</h3>
              <p>{product.description}</p>
              <p>${product.price}</p>
            </div>
          ))
        ) : (
          <p>No products found for this category.</p>
        )}
      </div> */}
    </>
  );
}
