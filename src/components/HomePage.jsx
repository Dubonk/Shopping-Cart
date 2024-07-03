import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PropTypes from 'prop-types'
import '../styles/App.css';

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
        <div className="homePage w-full h-full flex flex-col">
            <main className=" flex flex-col items-center grow justify-center w-full h-2/3">
                <div className="flex flex-col items-center mb-6 bg-black rounded p-3 bg-opacity-70 md:text-3xl">
                <h2 className=" font-semibold text-center">Welcome to PseudoShop! You can find essentials for you or a loved one.</h2>
                <Link className="linkToStore text-emerald-300 cursor-pointer font-semibold gap-x-1.5 rounded-md bg-black bg-opacity-0 px-3 py-2 text-3xl text-left hover:bg-slate-800" to='shoppage'>Shop Here!</Link>
                </div>
                <div className=" flex-col text-center w-80 bg-white text-black rounded-lg h-96">
                    {products.length > 0 && (
                            <div className=" flex items-center justify-center w-full h-full">
                                <img className=" w-2/3 h-auto max-h-full" src={products[currentIndex].image} alt={products[currentIndex].title} />
                            </div>
                        )}
                    </div>
            </main>
            <footer className="flex items-center justify-center bg py-2 w-full text-center">Website created by
             <a className="hover:text-slate-500" href="https://github.com/Dubonk">&nbsp;Kevin Dubon</a>
            </footer>
        </div>
    )
}

export { HomePage }