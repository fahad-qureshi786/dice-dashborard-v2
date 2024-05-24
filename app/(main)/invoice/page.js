"use client"
import React, { useState, useRef } from 'react';
import { InputText } from "primereact/inputtext";
import { Calendar } from 'primereact/calendar';
import {TabPanel, TabView} from "primereact/tabview";
import { Button } from 'primereact/button';
import Link  from 'next/Link';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Dialog } from 'primereact/dialog';
import {Badge} from 'primereact/badge'
import {Dropdown } from "primereact/dropdown"


const foodItems = [
    { name: 'Apple' },
    { name: 'Banana' },
    { name: 'Carrot' },
    { name: 'Doughnut' },
    { name: 'Eggplant' },
    { name: 'Fig' },
    { name: 'Grapes' },
    { name: 'Hamburger' },
    { name: 'Ice Cream' },
    { name: 'Jelly' },
    // Add more food items as needed
];

const Page = () => {

    const[selectedCustomer , setSelectedCustomer] = useState(false)
    const [InvoiceDetail, setInvoiceDetail] = useState(false)

    const data = [
        {
            invoiceNumber: '001',
            orderDate: '2024-05-15',
            customerName: 'John Doe',
            company: 'ABC Corporation',
            orderTotal: '$100.00',
            paymentStatus: <div><Badge value="Paid" severity="success"></Badge></div>
        },
        {
            invoiceNumber: '002',
            orderDate: '2024-07-15',
            customerName: 'Doe',
            company: 'xyz Corporation',
            orderTotal: '$100.00',
            paymentStatus: <div><Badge value="Paid" severity="success"></Badge></div>
        }
    ];

    const [selectedCustomerbox, setSelectedCustomerbox] = useState(null);
    const customers = [
        { label: 'Customer 1', value: 'customer1' },
        { label: 'Customer 2', value: 'customer2' },
        { label: 'Customer 3', value: 'customer3' },
        // Add more customers as needed
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


    const [selectedFood, setSelectedFood] = useState(null);
    const [filteredFoodItems, setFilteredFoodItems] = useState(null);

    const panelFooterTemplate = () => {
        const isFoodSelected = (filteredFoodItems || []).some(food => food.name === selectedFood);
        return (
            <div className="py-2 px-3">
                {isFoodSelected ? (
                    <span>
                        <b>{selectedFood}</b> selected.
                    </span>
                ) : (
                    'No food item selected.'
                )}
            </div>
        );
    };

    const search = (event) => {
        // Timeout to emulate a network connection
        setTimeout(() => {
            let _filteredFoodItems;

            if (!event.query.trim().length) {
                _filteredFoodItems = [...foodItems];
            }
            else {
                _filteredFoodItems = foodItems.filter((food) => {
                    return food.name.toLowerCase().startsWith(event.query.toLowerCase());
                });
            }

            setFilteredFoodItems(_filteredFoodItems);
        }, 250);
    }


    const [visible , setVisible] = useState(false)
    const [dates, setDates] = useState(null);

    const itemTemplate = (item) => {
        return (
            <div className="flex align-items-center">
                <img
                    alt={item.name}
                    src={`https://via.placeholder.com/18x18?text=${item.name.charAt(0)}`}
                    className="mr-2"
                    style={{ width: '18px' }}
                />
                <div>{item.name}</div>
            </div>
        );
    };


    // const [itemss, setItemss] = useState([
    //     { name: '', price: '', quantity: '' }
    // ]);

    // const addItem = () => {
    //     setItemss([...itemss, { name: '', price: '', quantity: '' }]);
    // };

    const handleItemChange = (index, field, value) => {
        const updatedItems = [...itemss];
        updatedItems[index][field] = value;
        setItemss(updatedItems);
    };

  //  const [visible, setVisible] = useState(false);
    const [itemss, setItemss] = useState([]);
    const [newItem, setNewItem] = useState({ description: '', price: '', quantity: '' });

    const addItem = () => {
        setItemss([...itemss, newItem]);
        setNewItem({ description: '', price: '', quantity: '' });
    };

    const handleNewItemChange = (field, value) => {
        setNewItem(prevState => ({ ...prevState, [field]: value }));
    };

    return (
        <>

            <Dialog header="Add your custom item" className={"p-8"} visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <div className={"flex justify-content-evenly"}>
                    <div className={"w-8/12 px-2"}>
                    <span className="p-input-icon-right w-full">
                        <InputText
                            type="text"
                            placeholder="Description"
                            className="w-full"
                            value={newItem.description}
                            onChange={(e) => handleNewItemChange('description', e.target.value)}
                        />
                    </span>
                    </div>
                    <div className={"w-2/12 px-2"}>
                    <span className="p-input-icon-right w-full">
                        <InputText
                            type="text"
                            placeholder="Price"
                            className="w-full"
                            value={newItem.price}
                            onChange={(e) => handleNewItemChange('price', e.target.value)}
                        />
                    </span>
                    </div>
                    <div className={"w-2/12 px-2"}>
                    <span className="p-input-icon-right w-full">
                        <InputText
                            type="text"
                            placeholder="Quantity"
                            className="w-full"
                            value={newItem.quantity}
                            onChange={(e) => handleNewItemChange('quantity', e.target.value)}
                        />
                    </span>
                    </div>
                </div>
                <div className={"flex justify-content-end space-x-2 m-4"}>
                    <Button onClick={addItem} primary>
                        Add item
                    </Button>
                    <Button onClick={() => setVisible(false)} style={{ backgroundColor: 'gray', color: 'white', margin: "2px" }} primary>
                        Cancel
                    </Button>
                </div>
                <DataTable value={itemss} className={"mt-4"}>
                    <Column field="description" header="Description"></Column>
                    <Column field="price" header="Price"></Column>
                    <Column field="quantity" header="Quantity"></Column>
                </DataTable>
                {items.length > 0 && (
                    <div className="flex justify-content-end mt-4">
                        <Button primary onClick={() => {
                            setSelectedCustomer(true);
                            setVisible(false);
                        }}>
                            Next
                        </Button>
                    </div>
                )}
            </Dialog>
            <Dialog header={"Select Customer"} visible={selectedCustomer} style={{ width: '50vw' }} onHide={() => setSelectedCustomer(false)}>

                <div className="p-field w-full">
                    {/*<label htmlFor="customerDropdown">Select Customer</label>*/}
                     <Dropdown  className={"w-full my-4"} id="customerDropdown" value={selectedCustomerbox} options={customers} onChange={(e) => setSelectedCustomerbox(e.value)} placeholder="Select a Customer" />
                </div>

             <Link href={"/invoice-down"}>
                 <Button  style={{ backgroundColor: '#FF8A38', border: "none", color: 'white',  margin:"2px" }} >
                     Generate Invoice
                 </Button>
             </Link>
            </Dialog>

            <div className={"flex justify-content-end space-x-2 m-4"}>
                    <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#FF8A38', border: "none", color: 'white',  margin:"2px" }} >
                        Create Invoice
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

                {/*<div>*/}
                {/*    <span className={"font-semibold"}>Fulfilled Orders</span>*/}
                {/*    <div>*/}
                {/*        <span className={"text-4xl font-bold text-gray-500"}>14</span>*/}
                {/*        <span className={"text-red-400 mx-2"}>10%</span>*/}
                {/*        <i className=" pi pi-arrow-down text-red-400 ml-2"></i>*/}
                {/*    </div>*/}

                {/*</div>*/}
                <div>
                    <span className={"font-semibold"}>Delivered Orders</span>
                    <div>
                        <span className={"text-4xl font-bold text-gray-500"}>54</span>
                        <span className={"text-green-400 mx-2"}>100%</span>
                        <i className=" pi pi-arrow-up text-green-400 ml-2"></i>
                    </div>

                </div>
            </div>
            <div className={"flex justify-content-between w-full"}  >

                <div style={{width: "100%"}} >
                    <div className="card">
                        <TabView style={{color: "green-200"}} className={"text-red-300"}>
                            <TabPanel header="All" >
                                    <div className="flex flex-col justify-center w-full h-full">
                                       <div className={"w-full"}>
                                           <div>
                                               <h3 className={"my-2"}>Invoices</h3>

                                               <div className="w-full flex items-center">
                                                   {/* Search input */}
                                                   <span className="p-input-icon-right w-full">
                <InputText type="text" placeholder="Search" className="w-full bg-gray-100" />
                <i className="pi pi-search" />
            </span>

                                                   {/* Button to open file explorer */}
                                                   {/*<FileUpload mode="basic" chooseLabel="browser" icon="pi pi-folder-open" className={"mx-2 "}  />*/}
                                                    <Button className={"mx-2"}>Search</Button>
                                               </div>
                                           </div>
                                           <div className={"my-2"}>
                                               <h3>Payment</h3>
                                               <div className={""}>
                                                   <div className="p-d-flex p-jc-center">
                                                       <DataTable value={data} className="p-datatable-striped">
                                                           <Column field="invoiceNumber" header="Invoice number"  body={(rowData) => <span onClick={() => setInvoiceDetail(true)}>{rowData.invoiceNumber}</span>}   />
                                                           <Column field="orderDate" header="Order date"   />
                                                           <Column field="customerName" header="Customer name"   />
                                                           <Column field="company" header="Company" />
                                                           <Column field="orderTotal" header="Order total" />
                                                           <Column field="paymentStatus" header="Payment status" />
                                                       </DataTable>
                                                   </div>
                                               </div>
                                           </div>

                                           <Dialog header={"Order detail"} visible={InvoiceDetail} style={{width: "35vw"}} onHide={() => setInvoiceDetail(false)}>
                                              Update fields
                                           </Dialog>

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
            </div>

        </>
    );
};

export default Page;
