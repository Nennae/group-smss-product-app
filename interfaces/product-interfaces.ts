export interface Product {
    id: number;
    title: string;
    description: string;
    category: string;
    price: number;
    warrantyInformation: string;
    shippingInformation: string;
    returnPolicy: string;
    images: string[];
    thumbnail: string;
    discountPercentage: number;
    rating: number;
    stock: number;
    tags: string[];
    brand: string;
}

export interface Products {
    products: Product[];
    total: number;
    skip: number;
    limit: number;
}