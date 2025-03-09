"use server"

export const getOrder = async(id) => {
    
    const response = await fetch(`https://tentlify-ecom.up.railway.app/api/orders/${id}`)
    const order = await response.json()
    return order
}