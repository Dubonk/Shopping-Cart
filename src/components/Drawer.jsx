import React from "react";
import PropTypes from 'prop-types'
import { Dialog } from "@material-tailwind/react";
 
export function DialogDefault({item, setCart, cart,}) {
    DialogDefault.propTypes = {
        item: PropTypes.any,
        setCart: PropTypes.func,
        cart: PropTypes.array,
    }
  const [open, setOpen] = React.useState(false);
 
  const handleOpen = () => setOpen(!open);
    function handleClick(item) {
    const newCart = [...cart, item];
    setCart(newCart)
    setOpen(false);
  }

  let price = item.price.toFixed(2);
 
  return (
    <div className=" self-center grow h-2/5 flex items-center justify-center">
        <img onClick={handleOpen} className="h-4/5" src={item.image} alt={item.title} />
      <Dialog className="absolute z-0 flex justify-center items-center p-4 h-full text-black bg-slate-800 bg-opacity-50 backdrop-blur" open={open} handler={handleOpen}>
      <div onClick={() => setOpen(false)} className="absolute w-full h-full"></div>
        <div className="flex flex-col justify-between max-w-lg h-1/2 max-h-96 bg-white rounded-xl shadow-xl p-3 overflow-hidden z-10">
        <h1 className="font-bold text-center">{item.title}</h1>
        <div className="flex grow gap-2 p-3 justify-evenly rounded bg-white">
            <img className="min-w-20 max-w-96 w-1/2 max-h-60 self-center" src={item.image} alt={item.title} />
            <p className="p-2 2/3 min-w-56 rounded w-2/3 max-h-60 h-5/6 overflow-y-auto">{item.description}</p>
        </div>
        <div className="flex items-center justify-evenly">
        <h2 className="font-semibold">${price}</h2>
        <button className="bg-slate-700 rounded p-1 text-white w-24 hover:bg-opacity-85" onClick={() => handleClick(item)}>Add to Cart</button>
        </div>
        </div>        
      </Dialog>
    </div>
  );
}