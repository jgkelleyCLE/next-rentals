"use server"
export const getTent = async(id) => {

    const response = await fetch(`https://tentlify-ecom.up.railway.app/api/products/${id}`)
    const product = await response.json()
    return product

}