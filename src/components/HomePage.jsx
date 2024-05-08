import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'

function HomePage({products}) {

    const [currentIndex, setCurrentIndex] = useState(0);

    HomePage.propTypes = {
        products: PropTypes.array,
        currentIndex: PropTypes.number,
        setCurrentIndex: PropTypes.func,
        category: PropTypes.string,
        setCategory: PropTypes.func,
        cart: PropTypes.array,
        setCart: PropTypes.func
    }

    useEffect(() => {
        setTimeout(() => {
            setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1)
        }, 3000);
    })

    return (
        <div className=" h-full flex flex-col items-center">
            <main className=" flex flex-col items-center justify-center w-full h-2/3">
                <div>
                <h2 className=" font-semibold text-xl">Welcome to PseudoShop! You can find essentials for you or a loved one.</h2>
                <h2 className="font-bold text-center underline">Shop till you drop!</h2>
                </div>
                <div className=" flex-col text-center w-96 bg-white text-black rounded-lg h-96">
                    {products.length > 0 && (
                            <div className=" flex items-center justify-center w-full h-full">
                                <img className=" w-2/3 h-auto max-h-full" src={products[currentIndex].image} alt={products[currentIndex].title} />
                            </div>
                        )}
                </div>
                <Link className=" text-emerald-300 cursor-pointer font-semibold gap-x-1.5 rounded-md bg-slate-700 bg-opacity-0 px-3 py-2 text-sm text-left hover:bg-slate-800" to='shoppage'>Shop Here!</Link>
            </main>
            <footer className=" absolute bottom-0 w-full text-center">Website created by Kevin Dubon</footer>
        </div>
    )
}

export { HomePage }