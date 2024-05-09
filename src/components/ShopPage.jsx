// import { useState } from "react";
// import DropDownMenu from "./DropDownMenu";
import PropTypes from 'prop-types'

function ShopPage({setCart, cart, products, category}) {

    ShopPage.propTypes = {
        products: PropTypes.array,
        currentIndex: PropTypes.number,
        setCurrentIndex: PropTypes.func,
        category: PropTypes.string,
        setCategory: PropTypes.func,
        cart: PropTypes.array,
        setCart: PropTypes.func
    }
    
    let filteredProducts = products;

    if (category && category !== 'All') {
        filteredProducts = products.filter(item => item.category === category);
    }


    if (!Array.isArray(products) || !products.length) {
        return <div className="absolute top-1/3 right-1/2 left-1/2 text-center flex font-semibold text-lg">No products available</div>;
    }

    function handleClick(item) {
        const newCart = [...cart, item];
        setCart(newCart)
        console.log(newCart)
        console.log(cart)
    }

    return (
        <div className="z-0 w-full flex flex-col items-center">
        <div className=" w-full flex justify-end">
            <p className=" absolute font-bold right-1/2 left-1/2 text-lg">{category.toUpperCase()}</p>
        </div>
        <div className="productsContainer my-2 py-5 w-4/5 flex flex-wrap gap-4 justify-center items-center">
        {filteredProducts.map((item, index) => (
            <div className="productCard bg-white text-center text-black" key={index}>
                <h4>{item.title}</h4>
                <img className=" h-2/5" src={item.image} alt={item.title} />
                <p>${item.price}</p>
                <button onClick={() => handleClick(item)}>Add to carts</button>
            </div>
        ))}
        </div>
        </div>
    )

}

export { ShopPage }