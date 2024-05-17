// import React, {useEffect, useState} from 'react';
// import AppMenuitem from './AppMenuitem';
// import { MenuProvider } from './context/menucontext';
// import { AppMenuItem } from '@/types';
// import { useSessionStorage } from 'primereact/hooks';
// import { useRouter } from 'next/navigation';
//
//
// const AppMenu = () => {
//     // Session storage for email and password
//     const [storedPassword, setStoredPassword] = useSessionStorage('password', '');
//     const [userDetails, setUserDetails] = useState({
//         username: '',
//         password: ''
//     });
//     const model: AppMenuItem[] = [];
//     const router = useRouter();
//
//     useEffect(()=> {
//         if(!sessionStorage.getItem("user")){
//             router.push("/auth/login")
//         }else{
//             setUserDetails(JSON.parse(sessionStorage.getItem("user")))
//         }
//     }, [])
//
//     // Populating model based on storedPassword
//     if (userDetails.username === 'admin') {
//         model.push(
//             {
//                 label: '',
//                 items: [{icon: 'pi pi-home', label: 'Home', to: '/' }]
//             },
//             {
//                 label: '',
//                 items: [{ icon: 'pi pi-briefcase', label: 'Collections', to: '/collections' }]
//             },
//             {
//                 label: '',
//                 items: [{ icon: 'pi pi-clone', label: 'Products', to: '/products' }]
//             },
//             {
//
//                 label: '',
//                 items: [{ icon: 'pi pi-credit-card', label: 'Invoice', to: '/invoice' }]
//             },
//
//             {
//                 label: '',
//                 items: [
//
//                     {
//                         icon: 'pi pi-dollar',
//                         label: 'Sales and Discount',
//                         to: '/sales-and-discount',
//
//                         items: [
//                             {
//                                 label: 'Sales',
//
//                                 to: '/sales-promotions'
//                             },
//                             {
//                                 label: 'Discount Codes',
//
//                                 to: '/discount-code'
//                             },
//                             {
//                                 label: 'Promotions',
//
//                                 to: '/promotion'
//                             },
//                             {
//                                 label: 'Reward Points',
//
//                                 to: '/reward'
//                             },
//                             {
//                                 label: 'Store',
//
//                                 to: '/auth/access'
//                             },
//                         ]
//                     },
//                 ]
//             },
//             {
//
//                 label: '',
//                 items: [{icon: 'pi pi-users', label: 'Client Details', to: '/client-detail' }]
//             },
//             {
//                 label: '',
//                 items: [
//                     {
//                         icon: 'pi pi-book',
//                         label: 'Orders',
//                         items: [
//                             {
//                                 label: 'Order Requests',
//                                 to: '/order-request'
//                             },
//                             {
//                                 label: 'Change Requests',
//                                 to: '/order-change-req'
//                             },
//                         ]
//                     },
//                 ]
//             },
//
//             {
//
//                 label: '',
//                 items: [{icon: 'pi pi-thumbs-up', label: 'Feedback', to: '/feedback' }]
//             },
//             {
//
//                 label: '',
//                 items: [{ icon: 'pi pi-money-bill', label: 'Menu Request', to: '/menu-request' }]
//             },
//             {
//                 label: '',
//                 items: [
//
//                     {
//                         icon: 'pi pi-chart-bar',
//                         label: 'Reports and Analytics',
//                         items: [
//                             {
//                                 icon: 'pi pi-chart-bar',
//                                 label: 'Reports',
//                                 to: '/reports'
//                             },
//                             {
//                                 icon: 'pi pi-chart-line',
//                                 label: 'Analytics',
//                                 to: '/auth/error'
//                             },
//                         ]
//                     },
//                 ]
//             },
//             {
//                 label: '',
//                 items: [{ icon: 'pi pi-server', label: 'Website', to: '/profile' }]
//             },
//             {
//                 label: '',
//                 items: [{icon: 'pi pi-book', label: 'Resource', to: '/profile' }]
//             },
//             {
//                 label: '',
//                 items: [{icon: 'pi pi-cog', label: 'Settings', to: '/setting' }]
//             },
//             {
//                 label: '',
//                 items: [{ icon: 'pi pi-lock', label: 'Logout', to: '/auth/login' }]
//             }
//
//         );
//     } else if (storedPassword === 'customer') {
//         model.push(
//             {
//                 label: 'Products',
//                 items: [{ label: 'Products', to: '/products-section' }]
//             },
//             {
//                 label: 'Favourites',
//                 items: [{ label: 'Favourites', to: '/favourites' }]
//             },
//             {
//                 label: 'Cart',
//                 items: [{ label: 'Cart', to: '/cart-section' }]
//             },
//             {
//                 label: 'Orders',
//                 items: [{ label: 'Orders', to: '/order-section' }]
//             },
//             {
//                 label: 'Spend Tracker',
//                 items: [{ label: 'Spend Tracker', to: '/spend-tracker' }]
//             },
//             {
//                 label: 'Feedback',
//                 items: [{ label: 'Feedback', to: '/feedback-section' }]
//             },
//             {
//                 label: 'Profile',
//                 items: [{ label: 'Profile', to: '/profile-section' }]
//             }
//         );
//     }
//
//     // Rendering the AppMenu component
//     return (
//         <MenuProvider>
//             <ul className="layout-menu">
//                 {model.map((item, i) => (
//                     !item.separator ? (
//                         <AppMenuitem item={item} root={true} index={i} key={item.label} />
//                     ) : (
//                         <li className="menu-separator" key={i} />
//                     )
//                 ))}
//
//
//             </ul>
//             {/*<button*/}
//             {/*    className="absolute bottom-0 text-center text-white"*/}
//             {/*    onClick={() => {*/}
//             {/*        setStoredPassword('');*/}
//             {/*        router.push('/auth/login');*/}
//             {/*    }}*/}
//             {/*>*/}
//             {/*    Logout*/}
//             {/*</button>*/}
//         </MenuProvider>
//     );
// };
//
// export default AppMenu;


import React from 'react';

const AppMenu = () => {
    return (
        <div>
            menu...
        </div>
    );
};

export default AppMenu;
