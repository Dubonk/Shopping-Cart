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
    console.log(newCart)
    console.log(cart)
}
 
  return (
      <Dialog className="absolute w-1/3 p-4 text-black" open={open} handler={handleOpen}>
        <h1>{item.title}</h1>
        <img src={item.image} alt={item.title} />
        <p>{item.description}</p>
        <button onClick={() => handleClick(item)}>Add to Cart</button>
      </Dialog>
  );
}