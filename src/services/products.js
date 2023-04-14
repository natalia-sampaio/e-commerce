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
            "thumbnail": "https://drive.google.com/uc?export=view&id=1Me0kNNbaC-bnftuSH2ni6MBb6mSAQvC1",
            "images": [
                "https://drive.google.com/uc?export=view&id=1KJ3FxaFwmXr6cUlGSA7Og8-dpVVv9332",
                "https://drive.google.com/uc?export=view&id=1U16m0_B3IU56FIh_nLYyLdllv8Mv-kIn",
                "https://drive.google.com/uc?export=view&id=1tk1BNSEBWOi8G6ByQiHbe14r34b4vbiX",
                "https://drive.google.com/uc?export=view&id=1S5bw4wfk0HOm8xcwvdrKO90ukYl3iauM",
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