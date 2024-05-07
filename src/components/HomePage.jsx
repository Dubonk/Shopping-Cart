import { Link } from "react-router-dom";
import { useEffect } from "react";
import PropTypes from 'prop-types'
import { Header } from "./Header";

function HomePage({products, currentIndex, setCurrentIndex, category, setCategory}) {

    HomePage.propTypes = {
        products: PropTypes.array,
        currentIndex: PropTypes.number,
        setCurrentIndex: PropTypes.func,
        category: PropTypes.string,
        setCategory: PropTypes.func,
    }

    useEffect(() => {
        setTimeout(() => {
            setCurrentIndex(currentIndex === products.length - 1 ? 0 : currentIndex + 1)
        }, 3000);
    })

    return (
        <div className=" h-full flex-col">
            <Header setCategory={setCategory}/>
            <main className=" flex items-center justify-center w-full h-2/4">
                <div className=" flex-col text-center w-1/3 bg-white text-black rounded-lg h-96">
                    <h2 className="font-bold text-center underline">Shop till you drop</h2>
                    <div className=" w-full h-5/6">
                    {products.length > 0 && (
                            <div className=" flex justify-center w-full h-full">
                                <img className=" w-2/3 h-auto max-h-full" src={products[currentIndex].image} alt={products[currentIndex].title} />
                            </div>
                        )}
                    </div>
            <Link className=" w-full text-emerald-300" to={'shoppage'} state={{products: products, category: category}}>Shop Here!</Link>
                </div>
            </main>
            <footer className=" absolute bottom-0 w-full text-center">Website created by Kevin Dubon</footer>
        </div>
    )
}

export { HomePage }