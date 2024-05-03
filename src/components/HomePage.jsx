import { Link } from "react-router-dom";

function HomePage() {

    return (
        <div>
            <header>
                <h1 className="text-4xl">FakeShop</h1>
            </header>
            <main>
                <h2 className="font-bold underline">Shop till you drop</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere tempora vero enim expedita in sapiente aliquam quas nisi doloribus ipsa et optio molestias, quo veritatis corporis iure labore! Eos, quasi?</p>
                <Link to="shoppage">Shop Here!</Link>
            </main>
            <footer>Website created by Kevin Dubon</footer>
        </div>
    )
}

export { HomePage }