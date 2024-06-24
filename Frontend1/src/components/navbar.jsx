import { useState, useContext } from 'react';
import {
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Transition,
} from '@headlessui/react';
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import { FaArrowRightLong } from "react-icons/fa6";

const initialNavigation = [
    { name: 'Blogs', href: '/', current: true },
    { name: 'Topics', href: '/topics', current: false },
];

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}

export default function NavBar() {
    const [navigation, setNavigation] = useState(initialNavigation);
    const { user, authToken, logout } = useContext(AuthContext);

    const handleNavClick = (index) => {
        console.log(navigation[index].name)
        setNavigation((prevNav) => {
            return prevNav.map((item, i) =>
                i === index ? { ...item, current: true } : { ...item, current: false }
            );
        }
        );
    };

    return (
        <>
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                        <div className="relative flex h-16 items-center justify-between">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button */}
                                <DisclosureButton className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                                    <span className="absolute -inset-0.5" />
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </DisclosureButton>
                            </div>

                            <div className='px-5 py-2 pr-10 text-lg text-white font-bold pl-10'>
                                <Link to="/" onClick={() => handleNavClick('Blogs')}>
                                    Transponder Medium
                                </Link>
                            </div>

                            <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                                <div className="hidden sm:ml-6 sm:block">
                                    <div className="flex space-x-4">
                                        {navigation.map((item, index) => (
                                            <Link
                                                key={item.name}
                                                to={item.href}
                                                onClick={() => handleNavClick(index)}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium'
                                                )}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                                <div className='text-white'>
                                    {user ? "Hello, " + user.first_name : ""}
                                </div>

                                {/* Profile dropdown */}
                                <Menu as="div" className="relative ml-3">
                                    <div>
                                        <MenuButton className="relative flex rounded-full bg-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-offset-2">
                                            <span className="absolute -inset-1.5" />
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full"
                                                src="data:image/jpeg;base64,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"
                                                alt=""
                                            />
                                        </MenuButton>
                                    </div>
                                    <Transition
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <MenuItems className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                                            {!authToken && (
                                                <MenuItem>
                                                    {({ active }) => (
                                                        <Link to="/login">
                                                            <div
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Login
                                                            </div>
                                                        </Link>
                                                    )}
                                                </MenuItem>

                                            )}
                                            {authToken && (
                                                <>
                                                    <MenuItem>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                            >
                                                                Edit Profile
                                                            </a>
                                                        )}
                                                    </MenuItem>
                                                    <MenuItem>
                                                        {({ active }) => (
                                                            <a
                                                                href="#"
                                                                className={classNames(active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700')}
                                                                onClick={logout}
                                                            >
                                                                Logout
                                                            </a>
                                                        )}
                                                    </MenuItem>
                                                </>
                                            )}
                                        </MenuItems>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <DisclosurePanel className="sm:hidden">
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {navigation.map((item) => (
                                <DisclosureButton
                                    key={item.name}
                                    as={Link}
                                    to={item.href}
                                    onClick={() => handleNavClick(item.name)}
                                    className={classNames(
                                        item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                        'block rounded-md px-3 py-2 text-base font-medium'
                                    )}
                                    aria-current={item.current ? 'page' : undefined}
                                >
                                    {item.name}
                                </DisclosureButton>
                            ))}
                        </div>
                    </DisclosurePanel>
                </>
            )}
        </Disclosure>
        {!authToken && (
            <div className='flex justify-center py-2 bg-yellow-200'>
                <Link to="/login"><span className='underline flex items-center pr-1'><FaArrowRightLong className='text-black mr-2' />Login</span></Link><span>for better experience</span>
            </div>
        )}
        </>
        
    );
}