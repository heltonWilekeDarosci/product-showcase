export interface Product {
    id: number;
    name: string;
    price: number;
    status: ProductStatus
}

export type ProductStatus = 'sold-out' | 'in-stock'

