import PropTypes from 'prop-types'
import { DialogDefault } from './Drawer';
import '../styles/loading.css';

function ShopPage({setCart, cart, products, category, loading}) {

    ShopPage.propTypes = {
        products: PropTypes.array,
        currentIndex: PropTypes.number,
        setCurrentIndex: PropTypes.func,
        category: PropTypes.string,
        setCategory: PropTypes.func,
        cart: PropTypes.array,
        setCart: PropTypes.func,
        loading: PropTypes.bool,
    }
    
    let filteredProducts = products;

    if (category && category !== 'ALL') {
        filteredProducts = products.filter(item => item.category === category);
    }


    if (!Array.isArray(products) || !products.length) {
        return <div className="absolute top-1/3 right-1/2 left-1/2 text-center flex font-semibold text-lg">No products available</div>;
    }

    return (
        <div className="z-0 w-full flex flex-col items-center">
        <div className=" w-full flex justify-center">
            <p className="font-bold text-lg">{category.toUpperCase()}</p>
        </div>
        {loading ? 
            <div className="dotsCss">
                <div className="dot"></div>
                <div className="dot"></div>
                <div className="dot"></div>
            </div>
             : <div className="productsContainer relative cursor-pointer py-5 flex flex-wrap gap-4 justify-center items-center">
            {filteredProducts.map((item, index) => (
                <div className="productCard bg-white text-center text-black" key={index}>
                    <h4 className='line-clamp-1 font-semibold'>{item.title}</h4>
                    <DialogDefault item={item} cart={cart} setCart={setCart} />
                    <div className='flex justify-evenly'>
                    <p className='flex font-semibold items-center justify-evenly'>{`$${item.price.toFixed(2)}`}</p>
                    </div>
                </div>
            ))}
            </div> }
        </div>
    )
}

export { ShopPage }