"use client"
import React, { useState } from 'react';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import {TabPanel, TabView} from "primereact/tabview";
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import { Checkbox } from 'antd'

const Page = () => {
    const data = [
        { item: 'Subtotal', price: '$50.00' },
        { item: 'Add Discount', price: '$0.00' },
        { item: 'Add Shopping and Delivery', price: '$5.00' },
        { item: 'Estimate Tax', price: '$2.50' },
        { item: 'Total', price: '$57.50' }
    ];
   const [visible , setVisible] = useState(false)
    const [placement, SetPlacement] = useState('topLeft');
    const placementChange = (e) => {
        SetPlacement(e.target.value);
    };
    const [date, setDate] = useState(null);
    return (
        <>
            <Dialog header="Add your custom item" className={"p-8"} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
               <div className={"flex justify-content-evenly  "}>
                   <div className={"w-8/12 px-2"}>
                        <span className="p-input-icon-right w-full">
                <InputText type="text" placeholder="Item Name" className="w-full" />
                <i className="pi pi-search" />
            </span>
                   </div>
                   <div className={"w-2/12 px-2"}>            <span className="p-input-icon-right w-full">
                <InputText type="text" placeholder="Price" className="w-full" />

            </span></div>
                   <div className={"w-2/12 px-2"}>
                                  <span className="p-input-icon-right w-full">
                <InputText type="text" placeholder="Quantity" className="w-full" />

            </span>
                   </div>


               </div>
                <div className={"my-4 "}>
                    <div><Checkbox >item is textable</Checkbox></div>
                    <div><Checkbox >item is a physical products</Checkbox></div>


                </div>

                <div className={"flex justify-content-end space-x-2 m-4"}>

                    <Button onClick={() => setVisible(true)} style={{ backgroundColor: 'black', color: 'white',  margin:"2px" }} primary>
                        Add item
                    </Button>

                    <Button onClick={() => setVisible(true)} style={{ backgroundColor: 'gray', color: 'white',  margin:"2px" }} primary>
Cancel                    </Button>

                </div>

            </Dialog>

            <div className={"flex justify-content-end space-x-2 m-4"}>

                    <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#FF8A38', border: "none", color: 'white',  margin:"2px" }} >
                        Create Order
                    </Button>

                <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#ffa15f', border: "none", color: 'white',  margin:"2px" }} primary>
                    More actions
                </Button>
                <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#ffa15f', border: "none", color: 'white',  margin:"2px" }} primary>
                   Export
                </Button>
            </div>

            <div className={"flex card justify-content-evenly my-4"}>
                <div>
                    <div className="flex-auto">
                        <label htmlFor="buttondisplay" className="font-bold  block mb-2">
                            Select Date
                        </label>
                    </div>
                    <Calendar value={date} onChange={(e) => setDate(e.value)} showIcon  />
                </div>
                <div>
                    <span className={"font-semibold"}>Total Order</span>
                    <div>
                        <span className={"text-4xl font-bold text-gray-500"}>34</span>
                        <span className={"text-green-400 mx-2"}>100%</span>
                        <i className=" pi pi-arrow-up text-green-400 ml-2"></i>
                    </div>

                </div>
                <div>
                    <span className={"font-semibold"}>Ordered Items</span>
                    <div>
                        <span className={"text-4xl font-bold text-gray-500"}>34</span>
                        <span className={"text-green-400 mx-2"}>100%</span>
                        <i className=" pi pi-arrow-up text-green-400 ml-2"></i>
                    </div>

                </div>
                <div>
                    <span className={"font-semibold"}>Returns</span>
                    <div>
                        <span className={"text-4xl font-bold text-gray-500"}>34</span>
                        <span className={"text-green-400 mx-2"}>100%</span>
                        <i className=" pi pi-arrow-up text-green-400 ml-2"></i>
                    </div>

                </div>
                <div>
                    <span className={"font-semibold"}>Fulfilled Orders</span>
                    <div>
                        <span className={"text-4xl font-bold text-gray-500"}>14</span>
                        <span className={"text-red-400 mx-2"}>10%</span>
                        <i className=" pi pi-arrow-down text-red-400 ml-2"></i>
                    </div>

                </div>
                <div>
                    <span className={"font-semibold"}>Delivered Orders</span>
                    <div>
                        <span className={"text-4xl font-bold text-gray-500"}>54</span>
                        <span className={"text-green-400 mx-2"}>100%</span>
                        <i className=" pi pi-arrow-up text-green-400 ml-2"></i>
                    </div>

                </div>
            </div>


            <div className={"flex justify-content-between w-full"} >

                <div style={{width: "80%"}} >
                    <div className="card">
                        <TabView style={{color: "green-200"}} className={"text-red-300"}>
                            <TabPanel header="All" >
                                    <div className="flex flex-col justify-center w-full h-full">
                                       <div className={"w-full"}>
                                           <div>
                                               <h3 className={"my-2"}>Products</h3>

                                               <div className="w-full flex items-center">
                                                   {/* Search input */}
                                                   <span className="p-input-icon-right w-full">
                <InputText type="text" placeholder="Search" className="w-full bg-gray-100" />
                <i className="pi pi-search" />
            </span>

                                                   {/* Button to open file explorer */}
                                                   <FileUpload mode="basic" chooseLabel="browser" icon="pi pi-folder-open" className={"mx-2 "}  />

                                               </div>
                                           </div>
                                           <div className={"card my-4"}>
                                               <h3>Payment</h3>
                                               <div className={""}>
                                                   <div className="p-d-flex p-jc-center">
                                                       <DataTable value={data} className="p-datatable-striped">
                                                           <Column field="item" header="Item"   />
                                                           <Column field="price" header="Price" />
                                                       </DataTable>
                                                   </div>
                                               </div>
                                           </div>


                                       </div>

                                    </div>

                            </TabPanel>

                            <TabPanel header="Unfulfilled" className={"text-gray-200"}>
                                <p className="m-0">
                                    <div className="flex flex-col justify-center h-full">
                                        {/* Table */}
                                        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                            <header className="px-5 py-4 border-b border-gray-100">
                                                <h2 className="font-semibold text-gray-800"></h2>
                                            </header>
                                            <div className="p-3">


                                            </div>
                                        </div>
                                    </div>
                                </p>
                            </TabPanel>
                            <TabPanel header="Unpaid">
                                <p className="m-0">

                                </p>
                            </TabPanel>
                            <TabPanel header="Open">
                                <p className="m-0">

                                </p>
                            </TabPanel>
                            <TabPanel header="Archived">
                                <p className="m-0">

                                </p>
                            </TabPanel>
                        </TabView>
                    </div>
                </div>
                <div style={{width: "30%"}} className={"mx-2"} >
                    <div className="card mb-4">
                    <div className={"flex justify-content-between mb-4"}>
                        <span>Name</span>
                        <span>   <i className=" pi pi-pencil  ml-2"></i></span>
                    </div>
                        <span className={"text-gray-700 font-bold "} style={{paddingTop: "12px"}}>No notes</span>
                    </div>

                <div  >
                    <div className="card my-4">
                        <div className={"flex justify-content-between mb-4"}>
                            <span>Customer</span>
                            <span>   <i className=" pi pi-pencil  ml-2"></i></span>
                        </div>
                        <InputText type="text" placeholder="Search" className="w-full" />

                    </div>
                </div>
                <div  >
                    <div className="card my-4">
                        <div className={"flex justify-content-between mb-4"}>
                            <span>Market</span>
                            <span>   <i className=" pi pi-pencil  ml-2"></i></span>
                        </div>
                        <span className={"text-gray-700 font-bold "} style={{paddingTop: "12px"}}>Pricing</span>
                    </div>
                </div>
                <div  >
                    <div className="card my-4">
                        <div className={"flex justify-content-between mb-4"}>
                            <span>Tags</span>
                            <span>   <i className=" pi pi-pencil  ml-2"></i></span>
                        </div>
                        <InputText type="text" placeholder="" className="w-full" />

                    </div>
                </div>
                </div>
            </div>

        </>
    );
};

export default Page;
