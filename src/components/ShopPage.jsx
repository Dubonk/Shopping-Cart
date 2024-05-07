import { useState } from "react";
import { useLocation } from "react-router-dom";
import { Header } from "./Header";
import DropDownMenu from "./DropDownMenu";

function ShopPage() {
    const [newCategory, setCategory] = useState('All')
    const location = useLocation();
    const products = location.state.products;
    // const category = location.state.category;

    let filteredProducts = products;

    if (newCategory && newCategory !== 'All') {
        filteredProducts = products.filter(item => item.category === newCategory);
    }


    if (!Array.isArray(products) || !products.length) {
        return <div>No products available</div>;
    }

    const getCategory = (cat) => {
        setCategory(cat);
    };

    return (
        <div className=" w-full">
            <Header />
        <div className=" w-full flex justify-end">
        <DropDownMenu getCategory={getCategory}/>
            <p className=" absolute font-bold right-1/2 left-1/2 text-lg">{newCategory.toUpperCase()}</p>
        </div>
        <div className="productsContainer my-2 py-5 w-full flex flex-wrap gap-4 justify-center items-center">
        {filteredProducts.map((item, index) => (
            <div className="productCard bg-white text-black" key={index}>
                <h4>{item.title}</h4>
                <img className="productImage" src={item.image} alt={item.title} />
                <p>${item.price}</p>
            </div>
        ))}
        </div>
        </div>
    )

}

export { ShopPage }