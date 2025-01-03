function Footer() {
    return (
        <footer className="footer flex justify-center bg-slate-800 py-10 px-10 w-full">
        <div className="footerContent flex justify-evenly max-w-7xl">
        <div className="footerLeft flex items-center flex-col w-1/4">
            <h3 className="font-semibold">Find us:</h3>
            <p>123 Main Street</p>
            <p>Los Angeles, CA 90210</p>
            <p>(323)-123-4567</p>
            <p>kevindubon43@gmail.com</p>
        </div>
        <div className="footerCenter flex items-center flex-col w-1/4">
                <h3 className="font-semibold">Links:</h3>
                <a className="hover:underline" href="#">Affiliate</a>
                <a className="hover:underline" href="#">Careers</a>
                <a className="hover:underline" href="https://github.com/Dubonk">Github</a>
        </div>
        <div className="footerRight w-1/4">
            <h3 className="font-semibold">About Us:</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos libero minus atque sapiente maxime cupiditate quo.</p>
        </div>
        </div>
    </footer>
    )
}

export {Footer};