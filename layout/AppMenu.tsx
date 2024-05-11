/* eslint-disable @next/next/no-img-element */

import React, { useContext } from 'react';
import AppMenuitem from './AppMenuitem';
import { LayoutContext } from './context/layoutcontext';
import { MenuProvider } from './context/menucontext';
import { AppMenuItem } from '@/types';
import { useSessionStorage } from 'primereact/hooks';
import { useRouter } from 'next/navigation';

const AppMenu = () => {
    // Session storage for email and password
    const [storedEmail, setStoredEmail] = useSessionStorage('email', '');
    const [storedPassword, setStoredPassword] = useSessionStorage('password', '');
    const router = useRouter();

    // Hardcoded credentials (consider replacing with proper authentication methods)
    const email = 'a@gmail.com';
    const password = '123';

    // Checking credentials match (consider using actual authentication methods)
    if (email === storedEmail && password === storedPassword) {
        console.log('Credentials match!');
    } else {
        console.log('');
    }

    // Context and model initialization
    const { layoutConfig } = useContext(LayoutContext);
    const model: AppMenuItem[] = [];

    // Populating model based on storedPassword
    if (storedPassword === 'admin') {
        model.push(
            {
                label: '',
                items: [{ label: 'Home', to: '/' }]
            },
            {
                label: '',
                items: [{ label: 'Collections', to: '/collections' }]
            },
            {
                label: '',
                items: [{ label: 'Products', to: '/products' }]
            },
            {
                label: '',
                items: [{ label: 'Invoice', to: '/invoice' }]
            },

            {
                label: '',
                items: [

                    {
                        label: 'Sales and Promotions',

                        items: [
                            {
                                label: 'Discount Codes',

                                to: ''
                            },
                            {
                                label: 'Promotions',

                                to: '/auth/error'
                            },
                            {
                                label: 'Reward Points',

                                to: '/auth/access'
                            },
                            {
                                label: 'Store',

                                to: '/auth/access'
                            },
                        ]
                    },
                ]
            },
            {
                label: ' ',
                items: [{ label: 'Client Details', to: '/client-detail' }]
            },
            {
                label: '',
                items: [

                    {
                        label: 'Orders',

                        items: [
                            {
                                label: 'Order Requests',

                                to: ''
                            },
                            {
                                label: 'Change Requests',

                                to: '/auth/error'
                            },


                        ]
                    },
                ]
            },

            {
                label: '',
                items: [{ label: 'Feedback', to: '/feedback' }]
            },
            {
                label: ' ',
                items: [{ label: 'Menu Request', to: '/menu-request' }]
            },
            {
                label: '',
                items: [

                    {
                        label: 'Reports and Analytics',

                        items: [
                            {
                                label: 'Reports',

                                to: ''
                            },
                            {
                                label: 'Analytics',

                                to: '/auth/error'
                            },


                        ]
                    },
                ]
            },
            {
                label: '',
                items: [{ label: 'Website', to: '/profile' }]
            },
            {
                label: '',
                items: [{ label: 'Resource', to: '/profile' }]
            },
            {
                label: '',
                items: [{ label: 'Profile', to: '/profile' }]
            }
        );
    } else if (storedPassword === 'customer') {
        model.push(
            {
                label: 'Products',
                items: [{ label: 'Products', to: '/products-section' }]
            },
            {
                label: 'Favourites',
                items: [{ label: 'Favourites', to: '/favourites' }]
            },
            {
                label: 'Cart',
                items: [{ label: 'Cart', to: '/cart-section' }]
            },
            {
                label: 'Orders',
                items: [{ label: 'Orders', to: '/order-section' }]
            },
            {
                label: 'Spend Tracker',
                items: [{ label: 'Spend Tracker', to: '/spend-tracker' }]
            },
            {
                label: 'Feedback',
                items: [{ label: 'Feedback', to: '/feedback-section' }]
            },
            {
                label: 'Profile',
                items: [{ label: 'Profile', to: '/profile-section' }]
            }
        );
    }

    // Rendering the AppMenu component
    return (
        <MenuProvider>
            <ul className="layout-menu">
                {model.map((item, i) => (
                    !item.separator ? (
                        <AppMenuitem item={item} root={true} index={i} key={item.label} />
                    ) : (
                        <li className="menu-separator" key={i} />
                    )
                ))}


            </ul>
            {/*<button*/}
            {/*    className="absolute bottom-0 text-center text-white"*/}
            {/*    style={{ bottom: '1%' }}*/}
            {/*    onClick={() => {*/}
            {/*        setStoredPassword('');*/}
            {/*        router.push('/auth/login');*/}
            {/*    }}*/}
            {/*>*/}
            {/*    Logout*/}
            {/*</button>*/}
        </MenuProvider>
    );
};

export default AppMenu;
