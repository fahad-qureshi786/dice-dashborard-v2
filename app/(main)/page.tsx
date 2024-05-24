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
import  Calendarr from "../(main)/calender/page"
import {Badge} from "primereact/badge";
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { InputTextarea } from 'primereact/inputtextarea';
import { Calendar } from 'primereact/calendar';
import {Card} from "primereact/card";
import {Divider} from "primereact/divider"
const Dashboard = () => {

    const [products, setProducts] = useState<Demo.Product[]>([]);
    const menu1 = useRef<Menu>(null);
    const menu2 = useRef<Menu>(null);
    const [reminderbox, setReminderbox] = useState(false);
    // const {layoutConfig} = useContext(LayoutContext);
    // const [customers3, setCustomers3] = useState<Demo.Customer[]>([]);
    const router = useRouter()
    const [visible, setVisible] = useState(false);
    const [date, setDate] = useState(null);
    const [updateReminderBox ,setUpdateReminderBox] = useState(false)

    const tableData = [
        {
            image: '1',
            product: '123244345',
            status: 'Active',
            inventory: '58$',
            salesChannels: '8/3/2024',
            market: <div onClick={() => setVisible(true)} > <Link href={"#"} className={"font-bold text-orange-500 "}>View detail</Link> </div>,
            category: 'Food',
            vendor: 'Local Vendor',
        },
        {
            image: '1',
            product: '123244345',
            status: 'Active',
            inventory: '52$',
            salesChannels: '21/3/2024',
            market: <div onClick={() => setVisible(true)}> <Link href={"#"} className={"font-bold text-orange-500 "}>View detail</Link> </div>,
            category: 'Food',
            vendor: 'Local Vendor',
        },
        {
            image: '1',
            product: '123244345',
            status: 'Active',
            inventory: '98$',
            salesChannels: '8/3/2024',
            market: <div onClick={() => setVisible(true)} > <Link href={"#"} className={"font-bold text-orange-500 "}>View detail</Link> </div>,
            category: 'Food',
            vendor: 'Local Vendor',
        },



    ];



    useEffect(() => {
        if(!sessionStorage.getItem("user")){
            router.push('/auth/login');
        }else{
            ProductService.getProductsSmall().then((data) => setProducts(data));
        }
    }, []);

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
                                          </tr>
                                      ))}
                                      </tbody>
                              </table>
                              </TabPanel>
                                <TabPanel header={"Calendar View"}>
                                    <Calendarr/>
                                </TabPanel>
                            </TabView>
                        </div>
                    </div>

                    <div className="col-12 xl:col-6" >
                        <div className="card overflow-y-scroll" style={{height: "85%"}} >
                            <div className="flex justify-content-between align-items-center mb-5">
                                <h5>Reminders</h5>
                                <div>
                                    <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain text-white"

                                            onClick={(event) => menu1.current?.toggle(event)}/>

                                    <Menu
                                        onClick={() => setReminderbox(true)}
                                        ref={menu1}
                                        popup
                                        model={[
                                            {label: 'Add New', icon: 'pi pi-fw pi-plus',}

                                        ]}
                                    />
                                </div>
                            </div>
                            <ul className="list-none   p-2 m-0" >

                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0" onClick={()  => setUpdateReminderBox(true)}>Pizza</span>
                                        <div className="mt-1 text-600">A delicious cheesy delight.</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex align-items-center">
                                        <span className="text-orange-500 pointer ml-3 font-medium">Delete</span>
                                    </div>
                                </li>

                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0" onClick={()  => setUpdateReminderBox(true)}>Burger</span>
                                        <div className="mt-1 text-600">Juicy patty with fresh toppings.</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex align-items-center">
                                        <span className="text-orange-500 pointer ml-3 font-medium">Delete</span>
                                    </div>
                                </li>

                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0" onClick={()  => setUpdateReminderBox(true)}>Salad</span>
                                        <div className="mt-1 text-600">Fresh greens with a light dressing.</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex align-items-center">
                                        <span className="text-orange-500 pointer ml-3 font-medium">Delete</span>
                                    </div>
                                </li>
                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0" onClick={()  => setUpdateReminderBox(true)}>Pizza</span>
                                        <div className="mt-1 text-600">A delicious cheesy delight.</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex align-items-center">
                                        <span className="text-orange-500 pointer ml-3 font-medium">Delete</span>
                                    </div>
                                </li>

                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Burger</span>
                                        <div className="mt-1 text-600">Juicy patty with fresh toppings.</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex align-items-center">
                                        <span className="text-orange-500 pointer ml-3 font-medium">Delete</span>
                                    </div>
                                </li>

                                <li className="flex flex-column md:flex-row md:align-items-center md:justify-content-between mb-4">
                                    <div>
                                        <span className="text-900 font-medium mr-2 mb-1 md:mb-0">Salad</span>
                                        <div className="mt-1 text-600">Fresh greens with a light dressing.</div>
                                    </div>
                                    <div className="mt-2 md:mt-0 flex align-items-center">
                                        <span className="text-orange-500 pointer ml-3 font-medium">Delete</span>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>

                    <div className="col-12 xl:col-6">
                        <div className="card overflow-y-scroll " style={{height: "50%"}}>
                            <div className="flex align-items-center justify-content-between mb-4">
                                <h5>Notifications and Tasks</h5>

                            </div>


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



                    <Dialog header="Order Detail" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                       <div>
                           <div className={"flex my-4 p-2 justify-content-between"} >
                               <div className={""}>
                                   <div className={"font-bold my-2"}>Customer Name    : Alex</div>
                                   <div className={"font-bold"}>Order Number: 232323</div>


                               </div>
                               <div>
                                   <div className={"font-bold my-2"}>Order Date:    1/6/2024</div>
                                   <div className={"font-bold"}>Total Amount:  565$</div>
                               </div>

                           </div>
                               <div className="card">
                                   <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                       <div className="p-2">
                                           <div className="overflow-x-auto">
                                               <table className="table-auto w-full">
                                                   <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                                   <tr>

                                                       <th className="p-2 whitespace-nowrap">
                                                           <div className="font-semibold text-left">Product Name</div>
                                                       </th>
                                                       {/*<th className="p-2 whitespace-nowrap">*/}
                                                       {/*    <div className="font-semibold text-center">Status</div>*/}
                                                       {/*</th>*/}
                                                       <th className="p-2 whitespace-nowrap">
                                                           <div className="font-semibold text-center">Price</div>
                                                       </th>
                                                       <th className="p-2 whitespace-nowrap">
                                                           <div className="font-semibold text-center">Qty</div>
                                                       </th>

                                                   </tr>
                                                   </thead>
                                                   <tbody className="text-sm divide-y divide-gray-100">
                                                   {/* Loop through table data and render each row */}
                                                   {tableData.map((row, index) => (
                                                       <tr key={index}>

                                                           <td className="p-2 d-flex flex justify-content-start align-items-center">
                                                               <div className={"p-2"}>
                                                                   <img style={{borderRadius: '10px'}} src={"/myimages/image.jpg"} alt="Product" width={35} height={30}/>
                                                               </div>
                                                               <div className="text-left">{row.product}</div>
                                                           </td>
                                                           {/*<td className="p-2 whitespace-nowrap">*/}
                                                           {/*    <div className="text-center">*/}
                                                           {/*        <Badge value="Active" severity="success"/>*/}
                                                           {/*    </div>*/}
                                                           {/*</td>*/}
                                                           <td className="p-2 whitespace-nowrap">
                                                               <div className="text-center">{row.inventory}</div>
                                                           </td>
                                                           <td className="p-2 whitespace-nowrap">
                                                               <div className="text-center">{row.salesChannels}</div>
                                                           </td>

                                                           <td className="p-2 whitespace-nowrap">
                                                               <span className={"pa pa-icon"}></span>
                                                           </td>
                                                       </tr>
                                                   ))}
                                                   </tbody>
                                               </table>
                                           </div>

                                       </div>
                                   </div>
                               </div>



                       </div>
                    </Dialog>

                    <Dialog header="Add New Reminder" visible={reminderbox} style={{ width: '50vw' }} onHide={() => setReminderbox(false)}>
                        <h4>Title</h4>
                        <InputText className={"w-full"}/>
                        <h4>Add Description</h4>
                        <InputTextarea className={"w-full"}/>
                        <h4>Select Date</h4>
                        <Calendar value={date} onChange={(e) => setDate(e.value)} dateFormat="dd/mm/yy" />
                        <Button className={"my-4 block w-full mx-auto"}>Submit</Button>
                    </Dialog>

                    <Dialog visible={updateReminderBox} style={{ width: '50vw' }} onHide={() => setUpdateReminderBox(false)}>
                        <div className="">
                           <h3>Pizza</h3>
                           <h6>Fresh greens with a light dressing.</h6>

                            <h6>Date: 23/05/2024</h6>
                        </div>
                    </Dialog>
                </>
            }


        </div>
    );
};

export default Dashboard;
