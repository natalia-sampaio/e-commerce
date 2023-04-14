import { featuredUrl, mensShoesUrl, womensShoesUrl } from '../config.js';

export async function getMensShoes() {
    const request = mensShoesUrl;
    const fetchResponse = await fetch(request);
    const response = await fetchResponse.json();
    return response.products;
}

export async function getWomensShoes() {
    const request = womensShoesUrl;
    const fetchResponse = await fetch(request);
    const response = await fetchResponse.json();
    return response.products;
}

export function getFeaturedShoes() {
    /* const request = featuredUrl;
    const fetchResponse = await fetch(request);
    const response = await fetchResponse.json();
    return response.products; */

    const featured = [
        {
            "id": 0,
            "title": "Fall Limited Edition Sneakers",
            "description": "These low-profile sneakers are your perfect casual wear companion. Featuring a durable rubber outer sole, they’ll withstand everything the weather can offer.",
            "price": 250,
            "discountPercentage": 50,
            "rating": 4.14,
            "stock": 72,
            "brand": "Sneaker Company",
            "category": "womens-shoes",
            "thumbnail": "src/assets/images/image-product-1.jpg",
            "images": [
                "src/assets/images/image-product-1.jpg",
                "src/assets/images/image-product-2.jpg",
                "src/assets/images/image-product-3.jpg",
                "src/assets/images/image-product-4.jpg",
            ]
        }
    ]

    return featured
}

export function getDiscountedPrice(id, products) {
    const product = products.find(element => element.id === id);

    const discountedPrice = product.discountPercentage > 0.0 ? product.price - ((product.price / 100) * product.discountPercentage) : product.price;

    return discountedPrice.toFixed(2);
}

export function getImages(id, products) {
    const product = products.find(element => element.id === id);

    const images = product.images;
    
    return images;
}