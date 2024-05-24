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
        <div className="flex flex-col justify-center max-w-lg max-sm:w-80 h-1/2 max-h-96 bg-white rounded-xl shadow-xl p-3 z-10">
          <h1 className="font-bold text-center underline mb-1">{item.title}</h1>
          <div className="flex gap-2 mb-1 justify-evenly h-2/3 max-h-80 items-center bg-white">
              <img className="min-w-20 max-w-96 w-1/3 max-h-60 self-center" src={item.image} alt={item.title} />
              <p className="min-w-40 w-1/2 max-h-60 px-1 h-full overflow-auto">{item.description}</p>
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
