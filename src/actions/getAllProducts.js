"use server"

export const getProducts = async() => {

    const response = await fetch(`https://tentlify-ecom.up.railway.app/api/products`)
    const products = await response.json()
    
    return products

}