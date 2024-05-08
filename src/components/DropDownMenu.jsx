import { Fragment } from 'react'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import PropTypes from 'prop-types';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export default function DropDownMenu({ getCategory }) {

  DropDownMenu.propTypes = {
    getCategory: PropTypes.func,
}

  const handleClick = (category) => {
    getCategory(category);
  }

  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-slate-700 bg-opacity-0 px-3 py-2 text-sm font-semibold text-white shadow-sm  hover:bg-slate-800">
          Categories
          <ChevronDownIcon className="-mr-1 h-5 w-5 text-gray-400" aria-hidden="true" />
        </Menu.Button>
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
        <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-slate-700 text-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
          <Menu.Item>
              {({ active }) => (
                <div
                onClick={() => handleClick('All')}
                  className={classNames(
                    active ? 'bg-slate-800 cursor-pointer' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  All 
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                  onClick={() => handleClick('electronics')}
                  className={classNames(
                    active ? 'bg-slate-800 cursor-pointer' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Electronics
                </div>
              )}
            </Menu.Item>
          
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={() => handleClick('jewelery')}
                  className={classNames(
                    active ? 'bg-slate-800 cursor-pointer' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Jewelery
                </div>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <div
                onClick={() => handleClick("men's clothing")}
                  className={classNames(
                    active ? 'bg-slate-800 cursor-pointer' : 'text-white',
                    'block px-4 py-2 text-sm'
                  )}
                >
                  Men&apos;s Clothings
                </div>
              )}
            </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                <div
                onClick={() => handleClick("women's clothing")}
                className={classNames(
                  active ? 'bg-slate-800 cursor-pointer' : 'text-white',
                  'block px-4 py-2 text-sm'
                )}
              >
                Women&apos;s Clothing
              </div>
                )}
              </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}