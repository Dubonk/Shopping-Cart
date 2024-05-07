import PropTypes from 'prop-types';
// import DropDownMenu from "./DropDownMenu";
import { Link } from "react-router-dom";

function Header() {

    Header.propTypes = {
        category: PropTypes.string,
        setCategory: PropTypes.func,
    }
    // const getCategory = (cat) => {
    //     setCategory(cat);
    // };

    return (
        <header className=" bg-slate-700 bg-opacity-70 sticky flex items-center justify-between px-4 py-2">
        <Link className=" text-4xl" to={"/"}>PseudoShop</Link>
        <div className="links flex justify-between mr-3">
        {/* <DropDownMenu getCategory={getCategory}/> */}
            <div className=" cursor-pointer font-semibold gap-x-1.5 rounded-md bg-slate-700 bg-opacity-0 px-3 py-2 text-sm text-left hover:bg-slate-800">Cart</div>
        </div>
    </header>
    )
}

export { Header }