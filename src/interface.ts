export interface Person {
    name: string,
    age: number,
    address: string
}
export interface Cars {
    brand: string,
    model: string,
    year: number
}

export interface Books {
    title: string,
    author: string,
    pages: number
}


export interface Comp {
    brand: string,
    processor: string,
    ram: string | number,    
    storage: string | number
}


export interface Films {
    title: string,
    director: string,
    genre: string
}

export interface Student{
    name: string,
    id: string,
    courses: object
}

export interface Phone {
    brand: string,
    model: string | number,
    os: string
}

export interface Customer {
    name: string,
    customerNumber: string,
    purchaseHistory: object
}


export interface Product {
    name: string,
    price: number,
    category: string
}

export interface Order {
    orderNumber: string,
    productList: object,
    totalPrice: number
}
