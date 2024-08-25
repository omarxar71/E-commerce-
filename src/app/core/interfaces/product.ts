export interface Subcategory {
    _id: string;
    name: string;
    slug: string;
    category: string;
  }
  
  export interface Category {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }
  
  export interface Brand {
    _id: string;
    name: string;
    slug: string;
    image: string;
  }
  
  export interface Product {
    sold: number;
    images: string[];
    subcategory: Subcategory[];
    ratingsQuantity: number;
    _id: string;
    title: string;
    slug: string;
    description: string;
    quantity: number;
    price: number;
    imageCover: string;
    category: Category;
    brand?: Brand; // Optional, as it's missing in the second product
    ratingsAverage?: number; // Optional, as it's missing in the second product
    createdAt?: string; // Optional, as it's missing in the second product
    updatedAt?: string; // Optional, as it's missing in the second product
    id: string;

  }
  
