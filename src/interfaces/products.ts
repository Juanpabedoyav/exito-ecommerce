export interface ProductCart {
    id:          number;
    title:       string;
    price:       number;
    description: string;
    category:    string;
    image:       string;
    quantity:    number;
    totalprice:  number;
    unit_price:  number;
    rating:      Rating;
}

export interface Rating {
    rate:  number;
    count: number;
}

export type Product= Omit<ProductCart, "quantity" | "totalprice" | "unit_price" > 