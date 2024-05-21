/* eslint-disable @next/next/no-img-element */
'use client';
import {Button} from 'primereact/button';
import {Column} from 'primereact/column';
import {DataTable} from 'primereact/datatable';
import {Menu} from 'primereact/menu';
import React, {useContext, useEffect, useRef, useState} from 'react';
import {ProductService} from '../../demo/service/ProductService';
import {LayoutContext} from '../../layout/context/layoutcontext';
import Link from 'next/link';
import {Demo} from '@/types';
import {ChartOptions} from 'chart.js';
import { useRouter } from 'next/navigation';
import { TabView, TabPanel } from 'primereact/tabview';
import  Calendar from "../(main)/calender/page"
import {Badge} from "primereact/badge";
import { Dialog } from 'primereact/dialog';
const Dashboard = () => {
    const [products, setProducts] = useState<Demo.Product[]>([]);
    const menu1 = useRef<Menu>(null);
    const menu2 = useRef<Menu>(null);
    const [lineOptions, setLineOptions] = useState<ChartOptions>({});
    const {layoutConfig} = useContext(LayoutContext);
    const [customers3, setCustomers3] = useState<Demo.Customer[]>([]);
    const router = useRouter()
    const [visible, setVisible] = useState(false);



    const tableData = [
        {
            image: '1',
            product: '123244345',
            status: 'Active',
            inventory: '58%',
            salesChannels: '21/5/2024',
            market: <div onClick={() => setVisible(true)} > <Link href={"#"} className={"font-bold text-orange-500 "}>View detail</Link> </div>,
            category: 'Food',
            vendor: 'Local Vendor',
        },
        {
            image: '1',
            product: '123244345',
            status: 'Active',
            inventory: '58%',
            salesChannels: '21/5/2024',
            market: <div onClick={() => setVisible(true)}> <Link href={"#"} className={"font-bold text-orange-500 "}>View detail</Link> </div>,
            category: 'Food',
            vendor: 'Local Vendor',
        },
        {
            image: '1',
            product: '123244345',
            status: 'Active',
            inventory: '58%',
            salesChannels: '21/5/2024',
            market: <div onClick={() => setVisible(true)} > <Link href={"#"} className={"font-bold text-orange-500 "}>View detail</Link> </div>,
            category: 'Food',
            vendor: 'Local Vendor',
        },



    ];

    const applyLightTheme = () => {
        const lineOptions: ChartOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#495057'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                },
                y: {
                    ticks: {
                        color: '#495057'
                    },
                    grid: {
                        color: '#ebedef'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    const applyDarkTheme = () => {
        const lineOptions = {
            plugins: {
                legend: {
                    labels: {
                        color: '#ebedef'
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                },
                y: {
                    ticks: {
                        color: '#ebedef'
                    },
                    grid: {
                        color: 'rgba(160, 167, 181, .3)'
                    }
                }
            }
        };

        setLineOptions(lineOptions);
    };

    useEffect(() => {
        if(!sessionStorage.getItem("user")){
            router.push('/auth/login');
        }else{
            ProductService.getProductsSmall().then((data) => setProducts(data));
        }
    }, []);

    const headerTemplate = (data: Demo.Customer) => {
        return (
            <React.Fragment>
                <span className="font-bold ml-2">{data.representative.name}</span>
            </React.Fragment>
        );
    };
    const footerTemplate = (data: Demo.Customer) => {
        return (
            <React.Fragment>
                <td colSpan={4} style={{ textAlign: 'right' }} className="text-bold pr-6">
                    Total Customers
                </td>
                <td>{calculateCustomerTotal(data.representative.name)}</td>
            </React.Fragment>
        );
    };
    const calculateCustomerTotal = (name: string) => {
        let total = 0;

        if (customers3) {
            for (let customer of customers3) {
                if (customer.representative.name === name) {
                    total++;
                }
            }
        }

        return total;
    };
    const countryBodyTemplate = (rowData: Demo.Customer) => {
        return (
            <React.Fragment>
                <img alt="flag" src={`/demo/images/flag/flag_placeholder.png`} className={`flag flag-${rowData.country.code}`} width={30} />
                <span style={{ marginLeft: '.5em', verticalAlign: 'middle' }}>{rowData.country.name}</span>
            </React.Fragment>
        );
    };
    const statusBodyTemplate = (rowData: Demo.Customer) => {
        return <span className={`customer-badge status-${rowData.status}`}>{rowData.status}</span>;
    };

    useEffect(() => {
        if (layoutConfig.colorScheme === 'light') {
            applyLightTheme();
        } else {
            applyDarkTheme();
        }
    }, [layoutConfig.colorScheme]);

    const formatCurrency = (value: number) => {
        return value?.toLocaleString('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    };

    return (
        <div className="grid">
            {
                !sessionStorage.getItem("user") ? <h3 className="text-center h-auto w-auto">Login Needed</h3> : <>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="card mb-0">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Total Sales</span>
                                    <div className="text-900 font-medium text-xl">152</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-blue-100 border-round"
                                     style={{width: '2.5rem', height: '2.5rem'}}>
                                    <i className="pi pi-shopping-cart text-blue-500 text-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="card mb-0">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Upcoming Orders</span>
                                    <div className="text-900 font-medium text-xl">$2.100</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-orange-100 border-round"
                                     style={{width: '2.5rem', height: '2.5rem'}}>
                                    <i className="pi pi-map-marker text-white text-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="card mb-0">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Total Menu Requests</span>
                                    <div className="text-900 font-medium text-xl">28441</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                                     style={{width: '2.5rem', height: '2.5rem'}}>
                                    <i className="pi pi-inbox text-cyan-500 text-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 lg:col-6 xl:col-3">
                        <div className="card mb-0">
                            <div className="flex justify-content-between mb-3">
                                <div>
                                    <span className="block text-500 font-medium mb-3">Total Customers</span>
                                    <div className="text-900 font-medium text-xl">152 Unread</div>
                                </div>
                                <div className="flex align-items-center justify-content-center bg-purple-100 border-round"
                                     style={{width: '2.5rem', height: '2.5rem'}}>
                                    <i className="pi pi-comment text-purple-500 text-xl"/>
                                </div>
                            </div>
                        </div>
                    </div>
<div className="col-12 xl:col-12">



                        <div className="card">
                            <h5>Upcoming Orders</h5>
                            <TabView>
                              <TabPanel header={"List View"}>

                                  <table className="table-auto w-full">
                                      <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                      <tr>
                                          <th className="p-2 whitespace-nowrap">
                                              <div className="font-semibold text-left">
                                                  {/* Add a label for the checkboxes */}
                                                  <input type="checkbox" id="select-all"/>
                                              </div>
                                          </th>
                                          <th className="p-2 whitespace-nowrap">
                                              <div className="font-semibold text-left">Order Number</div>
                                          </th>
                                          <th className="p-2 whitespace-nowrap">
                                              <div className="font-semibold text-center">Status</div>
                                          </th>
                                          <th className="p-2 whitespace-nowrap">
                                              <div className="font-semibold text-center">Total Amount</div>
                                          </th>
                                          <th className="p-2 whitespace-nowrap">
                                              <div className="font-semibold text-center">Order date</div>
                                          </th>
                                          <th className="p-2 whitespace-nowrap">
                                              <div className="font-semibold text-center">Detail</div>
                                          </th>
                                          {/*<th className="p-2 whitespace-nowrap">*/}
                                          {/*    <div className="font-semibold text-center">Category</div>*/}
                                          {/*</th>*/}
                                          {/*<th className="p-2 whitespace-nowrap">*/}
                                          {/*    <div className="font-semibold text-center">Vendor</div>*/}
                                          {/*</th>*/}
                                          {/*<th className="p-2 whitespace-nowrap">*/}
                                          {/*    <div className="font-semibold text-center">Operations</div>*/}
                                          {/*</th>*/}
                                      </tr>
                                      </thead>
                                      <tbody className="text-sm divide-y divide-gray-100">
                                      {/* Loop through table data and render each row */}
                                      {tableData.map((row, index) => (
                                          <tr key={index}>
                                              <td className="p-2 whitespace-nowrap">
                                                  <input type="checkbox"/>
                                              </td>
                                              <td className="p-2 d-flex flex justify-content-start align-items-center">
                                                  <div className={"p-2"}>
                                                      {/*<img style={{borderRadius: '10px'}} src={"/myimages/image.jpg"} alt="Product" width={35} height={30}/>*/}
                                                  </div>
                                                  <div className="text-left">{row.product}</div>
                                              </td>
                                              <td className="p-2 whitespace-nowrap">
                                                  <div className="text-center">
                                                      <Badge value="Active" severity="success"/>
                                                  </div>
                                              </td>
                                              <td className="p-2 whitespace-nowrap">
                                                  <div className="text-center">{row.inventory}</div>
                                              </td>
                                              <td className="p-2 whitespace-nowrap">
                                                  <div className="text-center">{row.salesChannels}</div>
                                              </td>
                                              <td className="p-2 whitespace-nowrap">
                                                  <div className="text-center">{row.market}</div>
                                              </td>
                                              {/*<td className="p-2 whitespace-nowrap">*/}
                                              {/*    <div className="text-center">{row.category}</div>*/}
                                              {/*</td>*/}
                                              {/*<td className="p-2 whitespace-nowrap">*/}
                                              {/*    <div className="text-center">{row.vendor}</div>*/}
                                              {/*</td>*/}
                                              {/*<td className="p-2 whitespace-nowrap">*/}
                                              {/*    <span className={"pa pa-icon"}></span>*/}
                                              {/*</td>*/}
                                          </tr>
                                      ))}
                                      </tbody>
                                  </table>


                            {/*<DataTable value={products} rows={5} paginator responsiveLayout="scroll">*/}
                            {/*    <Column header="Order Number"*/}
                            {/*            body={(data) => <img className="shadow-2" src={`/demo/images/product/${data.image}`}*/}
                            {/*                                 alt={data.image} width="50"/>}/>*/}
                            {/*    <Column field="name" header="Status" sortable style={{width: '35%'}}/>*/}
                            {/*    <Column field="price" header="Total Amount" sortable style={{width: '35%'}}*/}
                            {/*            body={(data) => formatCurrency(data.price)}/>*/}
                            {/*    <Column*/}
                            {/*        header="Order date"*/}
                            {/*        style={{width: '15%'}}*/}
                            {/*        body={() => (*/}
                            {/*            <>*/}
                            {/*                <Button icon="pi pi-search text-white" text/>*/}
                            {/*            </>*/}
                            {/*        )}*/}
                            {/*    />*/}
                            {/*    <Column*/}
                            {/*        header="View"*/}
                            {/*        style={{width: '15%'}}*/}
                            {/*        body={() => (*/}
                            {/*            <>*/}
                            {/*                <Button icon="pi pi-search text-white" text/>*/}
                            {/*            </>*/}
                            {/*        )}*/}
                            {/*    />*/}
                            {/*</DataTable>*/}
                              </TabPanel>
                                <TabPanel header={"Calendar View"}>
                                    <Calendar/>
                                </TabPanel>
                            </TabView>
                        </div>
</div>
                    <div className="col-12 xl:col-6">
                        <div className="card">
                            <div className="flex justify-content-between align-items-center mb-5">
                                <h5>Reminders</h5>
                                <div>
                                    <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain text-white"
                                            onClick={(event) => menu1.current?.toggle(event)}/>
                                    <Menu
                                        ref={menu1}
                                        popup
                                        model={[
                                            {label: 'Add New', icon: 'pi pi-fw pi-plus'},
                                            {label: 'Remove', icon: 'pi pi-fw pi-minus'}
                                        ]}
                                    />
                                </div>
                            </div>
                            <ul className="list-none p-0 m-0">
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Space T-Shirt</span>
                                        <div className="mt-1 text-600">Clothing</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex align-items-center">
                                        <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                             style={{height: '8px'}}>
                                            <div className="bg-orange-500 h-full" style={{width: '50%'}}/>
                                        </div>
                                        <span className="text-orange-500 ml-3 font-medium">%50</span>
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Portal Sticker</span>
                                        <div className="mt-1 text-600">Accessories</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                        <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                             style={{height: '8px'}}>
                                            <div className="bg-cyan-500 h-full" style={{width: '16%'}}/>
                                        </div>
                                        <span className="text-cyan-500 ml-3 font-medium">%16</span>
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Supernova Sticker</span>
                                        <div className="mt-1 text-600">Accessories</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                        <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                             style={{height: '8px'}}>
                                            <div className="bg-pink-500 h-full" style={{width: '67%'}}/>
                                        </div>
                                        <span className="text-pink-500 ml-3 font-medium">%67</span>
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Wonders Notebook</span>
                                        <div className="mt-1 text-600">Office</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                        <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                             style={{height: '8px'}}>
                                            <div className="bg-green-500 h-full" style={{width: '35%'}}/>
                                        </div>
                                        <span className="text-green-500 ml-3 font-medium">%35</span>
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Mat Black Case</span>
                                        <div className="mt-1 text-600">Accessories</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                        <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                             style={{height: '8px'}}>
                                            <div className="bg-purple-500 h-full" style={{width: '75%'}}/>
                                        </div>
                                        <span className="text-purple-500 ml-3 font-medium">%75</span>
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Robots T-Shirt</span>
                                        <div className="mt-1 text-600">Clothing</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 ml-0 md:ml-8 flex align-items-center">
                                        <div className="surface-300 border-round overflow-hidden w-10rem lg:w-6rem"
                                             style={{height: '8px'}}>
                                            <div className="bg-teal-500 h-full" style={{width: '40%'}}/>
                                        </div>
                                        <span className="text-teal-500 ml-3 font-medium">%40</span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-12 xl:col-6">
                        <div className="card overflow-y-scroll " style={{height: "50%"}}>
                            <div className="flex align-items-center sticky justify-content-between mb-4">
                                <h5>Notifications and Tasks</h5>
                                {/*<div>*/}
                                {/*    <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain text-white"*/}
                                {/*            onClick={(event) => menu2.current?.toggle(event)}/>*/}
                                {/*    <Menu*/}
                                {/*        ref={menu2}*/}
                                {/*        popup*/}
                                {/*        model={[*/}
                                {/*            {label: 'Add New', icon: 'pi pi-fw pi-plus'},*/}
                                {/*            {label: 'Remove', icon: 'pi pi-fw pi-minus'}*/}
                                {/*        ]}*/}
                                {/*    />*/}
                                {/*</div>*/}
                            </div>

                            {/*<span className="block text-600 font-medium mb-3">TODAY</span>*/}
                            <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                                    <div
                                        className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                        <i className="pi pi-bell text-xl text-orange-500"/>
                                    </div>
                                    <span className="text-900 font-bold line-height-3">
                                Richard Jones
                                <span className="text-700 font-semibold">
                                    {' '}
                                    has purchased a blue t-shirt for <span className="text-blue-500">79$</span>
                                </span>
                            </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                                    <div
                                        className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                        <i className="pi pi-bell text-xl text-orange-500"/>
                                    </div>
                                    <span className="text-900 font-bold line-height-3">
                                Richard Jones
                                <span className="text-700 font-semibold">
                                    {' '}
                                    has purchased a blue t-shirt for <span className="text-blue-500">79$</span>
                                </span>
                            </span>
                                </li>
                                <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                                    <div
                                        className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                        <i className="pi pi-bell text-xl text-orange-500"/>
                                    </div>
                                    <span className="text-900 font-bold line-height-3">
                                Richard Jones
                                <span className="text-700 font-semibold">
                                    {' '}
                                    has purchased a blue t-shirt for <span className="text-blue-500">79$</span>
                                </span>
                            </span>
                                </li>

                            </ul>


                        </div>
                        <div
                            className="px-4 py-5 shadow-2 flex flex-column md:flex-row md:align-items-center justify-content-between mb-3"
                            style={{
                                borderRadius: '1rem',
                                background: 'linear-gradient(0deg, rgba(0, 123, 255, 0.5), rgba(0, 123, 255, 0.5)), linear-gradient(92.54deg, #1C80CF 47.88%, #FFFFFF 100.01%)'
                            }}
                        >
                            <div>
                                <div className="text-blue-100 font-medium text-xl mt-2 mb-3">TAKE THE NEXT STEP</div>
                                <div className="text-white font-medium text-5xl">View Website Analytics</div>
                            </div>
                            <div className="mt-4 mr-auto md:mt-0 md:mr-0">
                                <Link href="https://blocks.primereact.org"
                                      className="p-button font-bold px-5 py-3 p-button-warning text-white p-button-rounded p-button-raised">
                                    Visit Now
                                </Link>
                            </div>
                        </div>
                    </div>
                    <h3>Feedback List</h3>



                    <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Dialog>
                </>
            }


        </div>
    );
};

export default Dashboard;
