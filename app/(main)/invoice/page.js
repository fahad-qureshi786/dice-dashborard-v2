"use client"
import React, { useState, useRef } from 'react';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import {TabPanel, TabView} from "primereact/tabview";
import { Button } from 'primereact/button';
import { FileUpload } from 'primereact/fileupload';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import html2canvas from "html2canvas";
import {  Dropdown,  Space } from 'antd';
import  jsPDF from "jspdf";


const Page = () => {

// for pdf downlaod
    const downloadPDF = () => {

        const input = pdfRef.current;
        html2canvas(input).then((canvas) => {
            const imgData = canvas.toDataURL('image/png');
            const pdf = new jsPDF('p', 'mm', 'a4', true);
            const pdfWidth = pdf.internal.pageSize.getWidth();
            const pdfHeight = pdf.internal.pageSize.getHeight();
            const imgWidth = canvas.width;
            const imgHeight = canvas.height;
            const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
            const imgX = (pdfWidth - imgWidth * ratio) / 2;
            const imgY = 30;
            pdf.addImage(imgData, 'PNG', imgX, imgY, imgWidth * ratio, imgHeight * ratio);
            pdf.save('invoice.pdf');
        });
    };
    const pdfRef = useRef()
    const data = [
        {
            invoiceNumber: '001',
            orderDate: '2024-05-15',
            customerName: 'John Doe',
            company: 'ABC Corporation',
            orderTotal: '$100.00',
            paymentStatus: 'Paid'
        },
        {
            invoiceNumber: '002',
            orderDate: '2024-07-15',
            customerName: 'Doe',
            company: 'xyz Corporation',
            orderTotal: '$100.00',
            paymentStatus: 'unpaid'
        }
    ];

    const items = [
        {
            key: '1',
            label: <div> <span className="p-input-icon-right w-full">
                <InputText type="text" placeholder="Add Note here" className="w-full"
                           onClick={(e) => e.stopPropagation()}
                />
            </span>
               </div>
            ,
        },
        {
            key: '2',
            label:  <Button  className={"bg-orange-400 text-white my-2"} primary>
                Update
            </Button>,
        },
        {
            key: '3',
            label: (
               ``
            ),
        },
    ];
   const [visible , setVisible] = useState(false)
    // const [placement, setPlacement] = useState('topLeft');
    // const [dateRange, setDateRange] = useState([null, null]);
    // const placementChange = (e) => {
    //     SetPlacement(e.target.value);
    // };

    const [dates, setDates] = useState(null);
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

                    <Calendar value={dates} id="buttondisplay" placeholder={"Start - End"} onChange={(e) => setDates(e.value)} selectionMode="range" readOnlyInput hideOnRangeSelection />



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


            <div className={"flex justify-content-between w-full"} ref={pdfRef} >

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
                                                           <Column field="invoiceNumber" header="Invoice number"   />
                                                           <Column field="orderDate" header="Order date"   />
                                                           <Column field="customerName" header="Customer name"   />
                                                           <Column field="company" header="Company" />
                                                           <Column field="orderTotal" header="Order total" />
                                                           <Column field="paymentStatus" header="Payment status" />
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
                        <span>Add Notes</span>
                        <Dropdown
                            menu={{
                                items,
                            }}
                            trigger={['click']}
                        >
                            <a onClick={(e) => e.preventDefault()}>
                                <Space>
                                    <span>   <i className=" pi pi-pencil text-orange-400 ml-2" onClick={(e) => e.preventDefault()}></i></span>

                                </Space>
                            </a>
                        </Dropdown>
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

            <button onClick={downloadPDF}>download</button>
        </>
    );
};

export default Page;
