import { Fragment } from 'react';
import { Link } from "react-router-dom";
import { Menu,MenuButton, MenuItem, MenuItems, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDownMenu({ getCategory }) {

  DropDownMenu.propTypes = {
    getCategory: PropTypes.func,
}

  const handleClick = (category, close) => {
    getCategory(category);
    close();
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton className="inline-flex w-full justify-center gap-x-1 rounded-md bg-slate-700 bg-opacity-0 px-3 py-2  text-white shadow-sm  hover:bg-slate-700">
          Categories
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </MenuButton>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <MenuItems className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-slate-700 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <MenuItem>
              {({ active, close }) => (
                <div> 
                  <Link className={classNames(
                  active ? 'bg-slate-800 cursor-pointer' : 'text-white',
                  'block px-4 py-2 text-sm')} onClick={() => handleClick('ALL', close)} to='shoppage'>All</Link>
                </div>
              )}
            </MenuItem>
            <MenuItem>
              {({ active, close }) => (
                <div>
                  <Link className={classNames(
                  active ? 'bg-slate-800 cursor-pointer' : 'text-white',
                  'block px-4 py-2 text-sm')}  onClick={() => handleClick('electronics', close)} to='shoppage'>Electronics</Link>
                </div>
              )}
            </MenuItem>
          
            <MenuItem>
              {({ active, close }) => (
                <div>
                  <Link className={classNames(
                  active ? 'bg-slate-800 cursor-pointer' : 'text-white',
                  'block px-4 py-2 text-sm')} 
                  onClick={() => handleClick('jewelry', close)} to='shoppage'>Jewelry</Link>
                </div>
              )}
            </MenuItem>
            <MenuItem>
              {({ active, close }) => (
                <div>
                  <Link className={classNames(
                  active ? 'bg-slate-800 cursor-pointer' : 'text-white',
                  'block px-4 py-2 text-sm')} 
                   onClick={() => handleClick("men's clothing", close)} to='shoppage'>Men&apos;s Clothings</Link>
                </div>
              )}
            </MenuItem>
              <MenuItem>
                {({ active, close }) => (
                <div>
                <Link className={classNames(
                  active ? 'bg-slate-800 cursor-pointer' : 'text-white',
                  'block px-4 py-2 text-sm')} 
                  onClick={() => handleClick("women's clothing", close)} to='shoppage'>Women&apos;s Clothings</Link>
              </div>
                )}
              </MenuItem>
          </div>
        </MenuItems>
      </Transition>
    </Menu>
  )
}
