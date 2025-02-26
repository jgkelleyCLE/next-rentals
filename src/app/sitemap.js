import { getProducts } from "@/actions/getAllProducts"

const sitemap = async() => {

    const products = await getProducts()

}

export default sitemap