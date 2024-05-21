import PropTypes from 'prop-types'
import { DialogDefault } from './Drawer';

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

    if (category && category !== 'ALL') {
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
        <div className=" w-full flex justify-center">
            <p className="font-bold text-lg">{category.toUpperCase()}</p>
        </div>
        <div className="productsContainer relative cursor-pointer py-5 flex flex-wrap gap-4 justify-center items-center hover:">
        {filteredProducts.map((item, index) => (
            <div className="productCard bg-white text-center text-black" key={index}>
            <h4 className='line-clamp-2 font-semibold'>{item.title}</h4>
            <img className="self-center grow h-2/5" src={item.image} alt={item.title} />
            <p className='font-semibold'>${item.price}</p>
            <button className='self-center justify-self-end bg-slate-700 rounded text-white px-2 py-1 hover:bg-opacity-85 active:scale-90' onClick={() => handleClick(item)}>Add to carts</button>
            </div>
        ))}
        </div>
        </div>
    )
}

export { ShopPage }