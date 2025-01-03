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
        <div className=" w-full h-full flex flex-col">
            <div className="bgPath"></div>
            <main className=" flex flex-col items-center grow justify-center w-full h-2/3">
                <div className="flex flex-col items-center mb-6 bg-black rounded p-3 bg-opacity-70 md:text-3xl">
                <h2 className=" font-semibold text-center">Welcome to PseudoShop! You can find essentials for you or a loved one.</h2>
                <Link className="linkToStore text-emerald-300 cursor-pointer font-semibold gap-x-1.5 rounded-md bg-black bg-opacity-0 px-3 py-2 text-3xl text-left hover:bg-slate-800" to='shoppage'>Shop Here!</Link>
                </div>
                <div className="hpItems flex-col text-center w-80 bg-white text-black rounded-lg h-96">
                    {products.length > 0 && (
                            <div className="slide flex items-center justify-center w-full h-full">
                                <img className="w-2/3 h-auto max-h-full" src={products[currentIndex].image} alt={products[currentIndex].title} />
                            </div>
                        )}
                    </div>
            </main>
            <footer className="footer flex justify-evenly bg-slate-800 py-10 px-10 w-full">
                <div className="footerLeft flex items-center flex-col w-1/4">
                    <h3 className="font-semibold">Find us:</h3>
                    <p>123 Main Street</p>
                    <p>Los Angeles, CA 90210</p>
                    <p>(323)-123-4567</p>
                    <p>kevindubon43@gmail.com</p>
                </div>
                <div className="footerCenter flex items-center flex-col w-1/4">
                        <h3 className="font-semibold">Links:</h3>
                        <a href="#">Affiliate</a>
                        <a href="#">Careers</a>
                        <a href="#">Github</a>
                </div>
                <div className="footerRight w-1/4">
                    <h3 className="font-semibold">About Us:</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero minus atque sapiente maxime cupiditate quo.</p>
                </div>
            </footer>
        </div>
    )
}

export { HomePage }