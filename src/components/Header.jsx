import PropTypes from 'prop-types';
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import {
  Drawer,
  Button,
  Typography,
} from "@material-tailwind/react";
import DropDownMenu from './DropDownMenu';

function Header({cart, setCart, setCategory}) {

    Header.propTypes = {
        category: PropTypes.string,
        setCategory: PropTypes.func,
        cart: PropTypes.array,
        setCart: PropTypes.func,
    }
    const [openRight, setOpenRight] = React.useState(false);
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


    return (
        <header className=" bg-slate-700 sticky flex items-center justify-between px-4 py-2 z-10">
            <Link className=" text-4xl" to={"/"}>PseudoShop</Link>
            <div className="links flex justify-between mr-3">
            <DropDownMenu getCategory={getCategory}/>
                <button onClick={openDrawerRight} className=" cursor-pointer font-semibold gap-x-1.5 rounded-md bg-slate-700 bg-opacity-0 px-3 py-2 text-sm text-left hover:bg-slate-800">Cart</button>
            </div>
            {openRight && (
                <Drawer
                placement="right"
                open={openRight}
                onClose={closeDrawerRight}
                className="absolute top-0 bottom-0 min-h-screen p-4 bg-slate-700"
                >
                <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray" className='text-center w-full' >
                    Carts
                </Typography>
                </div>
                <div>
                    {cart.map((item, index) => (
                        <div className='w-full h-30 flex flex-col justify-center items-center border-b py-2' key={index}>
                            <img className='w-20 rounded' src={item.image} alt={item.title}/>
                            <p>${item.price}</p>
                        </div>
                ))}
                </div>
                <div className='font-semibold'> 
                    Total: ${totalPrice}
                    </div>
                <div className="flex gap-2">
                <Button size="sm" variant="outlined" className='hover:bg-slate-800'>
                    Check out
                </Button>
                <Button onClick={() => setCart([])} size="sm" variant='outlined' className='hover:bg-slate-800'>Clear cart</Button>
                </div>
            </Drawer>
            )}
        </header>
    )
}

export { Header }