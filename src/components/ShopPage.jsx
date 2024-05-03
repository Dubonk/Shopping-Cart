import { useEffect, useState } from "react";

function ShopPage() {
    const [products, setProducts] = useState([]);


    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products/category/electronics?limit=10')
                const data = await response.json();
                const productResults = data;
                setProducts(productResults)
                console.log(products)
            } catch (error) {
                console.log(error)
            }
        }
        fetchProducts();
    }, [])

    return (
        <>
        <h1>FakeShop</h1>
        <div className="productsContainer">
        {products.map((item, index) => (
            <div className="productCard" key={index}>
                <h4>{item.title}</h4>
                <img className="productImage" src={item.image} alt={item.title} />
            </div>
        ))}
        </div>
        </>
    )

}

export { ShopPage }