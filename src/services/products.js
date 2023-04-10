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

export async function getFeaturedShoes() {
    const request = featuredUrl;
    const fetchResponse = await fetch(request);
    const response = await fetchResponse.json();
    return response.products;
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