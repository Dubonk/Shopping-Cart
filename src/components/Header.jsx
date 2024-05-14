import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
} from "@material-tailwind/react";
import DropDownMenu from './DropDownMenu';
import cartIcon from '/src/assets/cart.svg';

function Header({cart, setCart, setCategory}) {

    Header.propTypes = {
        category: PropTypes.string,
        setCategory: PropTypes.func,
        cart: PropTypes.array,
        setCart: PropTypes.func,
    }
    const [openRight, setOpenRight] = useState(false);
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);
    const [totalPrice, setTotalPrice] = useState(0.00);

    useEffect(() => {
        let total = 0;
        cart.forEach(item => {
            total += item.price;
        })
        let totalRounded = Math.round(total * 100) / 100;
        setTotalPrice(totalRounded);
    }, [cart]);

    const getCategory = (cat) => {
        setCategory(cat);
    };

    function removeItem(item) {
        const newCart = cart.filter(cartItem => cartItem.id !== item.id);
        setCart(newCart);
        console.log(newCart);
    }

    return (
        <header className=" bg-slate-700 flex justify-between items-center py-2 z-10">
            <Link className="pl-1 font-semibold text-2xl" to={"/"}>PseudoShop</Link>
            <div className="links flex justify-between mr-3">
            <DropDownMenu getCategory={getCategory}/>
                <button onClick={openDrawerRight} className="relative cursor-pointer gap-x-1.5 font-semibold rounded-md bg-slate-700 bg-opacity-0 px-3 py-2 text-left hover:bg-slate-800">
                        <img className='w-6 min-w-5' src={cartIcon} alt="cart" />
                        <div className='absolute top-0 right-0 w-3'>{cart.length}</div>
                    </button>
            </div>
            <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className={openRight ? "absolute rounded h-full p-4 bg-slate-700" : "hidden"}
                >
                <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray" className='text-center w-full' >
                    Carts
                </Typography>
                </div>
                <div className='font-semibold'> 
                    Total: ${totalPrice}
                    </div>
                    <div className="flex justify-center gap-2 my-3">
                <Button onClick={() => alert('This is awkward...')} size="sm" variant="outlined" className='hover:bg-slate-800'>
                    Check out
                </Button>
                <Button onClick={() => setCart([])} size="sm" variant='outlined' className='hover:bg-slate-800'>Clear cart</Button>
                </div>
                {cart.length < 1 ? 
                <div className='h-4/5 bg-slate-900 rounded overflow-y-auto flex justify-center'>No Items</div>
                : 
                <div className='h-4/5 bg-slate-900 rounded overflow-y-auto'>
                {cart.map((item, index) => (
                    <div className='relative w-full h-30 flex flex-col justify-center items-center border-b py-2' key={index}>
                    <img className='w-20 rounded' src={item.image} alt={item.title}/>
                    <p>${item.price}</p>
                    <button onClick={() => removeItem(item)} className='absolute bottom-0 right-0 cursor-pointer font-semibold gap-x-1.5 rounded-md bg-slate-700 bg-opacity-0 px-3 py-2 text-sm text-left hover:bg-slate-800'>Remove</button>
                </div>
                ))}
                </div>
                }
            </Drawer>
        </header>
    )
}

export { Header }