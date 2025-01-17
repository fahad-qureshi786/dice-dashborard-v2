"use client"
import React, {useEffect, useRef, useState} from 'react';
import Link from "next/link";
import {Button} from 'primereact/button';
import  pic from "../../../public/myimages/image.jpg"
import { Badge } from 'primereact/badge';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
import { TabView, TabPanel } from 'primereact/tabview';
import {Toast} from "primereact/toast";
import {ConfirmDialog} from "primereact/confirmdialog";
import {Paginator} from "primereact/paginator";
const App = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const [visiblebox, setVisiblebox] = useState(false);

    const toast = useRef(null);
    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Deleted', detail: 'Successfully' });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected' });
    };

    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(3);

    const tableData = [
        {
            image: { pic }, // Use placeholder images or actual images
            product: 'Pizza',
            status: 'Active',
            inventory: '50',
            salesChannels: 'Online',
            market: 'US',
            category: 'Food',
            vendor: 'Local Vendor',
        },
        {
            image: { pic },
            product: 'Burger',
            status: 'Active',
            inventory: '30',
            salesChannels: 'Store',
            market: 'EU',
            category: 'Food',
            vendor: 'FastFood Co.',
        },
        {
            image: { pic },
            product: 'Salad',
            status: 'Active',
            inventory: '70',
            salesChannels: 'Online',
            market: 'Asia',
            category: 'Food',
            vendor: 'Organic Co.',
        },
        {
            image: { pic },
            product: 'Sandwich',
            status: 'Active',
            inventory: '45',
            salesChannels: 'Store',
            market: 'US',
            category: 'Food',
            vendor: 'Snack Co.',
        },
        {
            image: { pic },
            product: 'Sushi',
            status: 'Active',
            inventory: '25',
            salesChannels: 'Online',
            market: 'Asia',
            category: 'Food',
            vendor: 'Fresh Co.',
        }
    ];

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };
    return (
        <div>
            <h3 className={"my-2 font-bold text-4xl"}>Products</h3>
            <div className={"flex justify-content-end  m-4"}>
                <Link href={"/addproducts"}>
                    <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#FF8A38', border: "none", color: 'white',  margin:"2px" }} primary>
                        Add Product
                    </Button>
                </Link>
                <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#ffa15f', border: "none", color: 'white',  margin:"2px" }} primary>
                    Export
                </Button>
                <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#ffa15f', border: "none", color: 'white',  margin:"2px" }} primary>
                Import
                </Button>
            </div>
            <div className="card">
            <TabView>
            {/*<TabPanel header="All">*/}
            {/*<p className="m-0">*/}
            {/*    <div className="flex flex-col justify-center h-full">*/}
            {/*        /!* Table *!/*/}
            {/*        <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">*/}
            {/*            <div className="p-3">*/}
            {/*                <div className="overflow-x-auto">*/}
            {/*                    <table className="table-auto w-full">*/}
            {/*                        <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">*/}
            {/*                        <tr>*/}
            {/*                            <th className="p-2 whitespace-nowrap">*/}
            {/*                                <div className="font-semibold text-left">*/}
            {/*                                    /!* Add a label for the checkboxes *!/*/}
            {/*                                    <input type="checkbox" id="select-all"/>*/}
            {/*                                </div>*/}
            {/*                            </th>*/}
            {/*                            <th className="p-2 whitespace-nowrap">*/}
            {/*                                <div className="font-semibold text-left">Product Name</div>*/}
            {/*                            </th>*/}
            {/*                            <th className="p-2 whitespace-nowrap">*/}
            {/*                                <div className="font-semibold text-center">Status</div>*/}
            {/*                            </th>*/}
            {/*                            <th className="p-2 whitespace-nowrap">*/}
            {/*                                <div className="font-semibold text-center">Inventory</div>*/}
            {/*                            </th>*/}
            {/*                            <th className="p-2 whitespace-nowrap">*/}
            {/*                                <div className="font-semibold text-center">Sales Channels</div>*/}
            {/*                            </th>*/}
            {/*                            <th className="p-2 whitespace-nowrap">*/}
            {/*                                <div className="font-semibold text-center">Market</div>*/}
            {/*                            </th>*/}
            {/*                            <th className="p-2 whitespace-nowrap">*/}
            {/*                                <div className="font-semibold text-center">Category</div>*/}
            {/*                            </th>*/}
            {/*                            <th className="p-2 whitespace-nowrap">*/}
            {/*                                <div className="font-semibold text-center">Vendor</div>*/}
            {/*                            </th>*/}
            {/*                            <th className="p-2 whitespace-nowrap">*/}
            {/*                                <div className="font-semibold text-center">Operations</div>*/}
            {/*                            </th>*/}
            {/*                        </tr>*/}
            {/*                        </thead>*/}
            {/*                        <tbody className="text-sm divide-y divide-gray-100">*/}
            {/*                        /!* Loop through table data and render each row *!/*/}
            {/*                        {tableData.map((row, index) => (*/}
            {/*                            <tr key={index}>*/}
            {/*                                <td className="p-2 whitespace-nowrap">*/}
            {/*                                    <input type="checkbox"/>*/}
            {/*                                </td>*/}
            {/*                                <td className="p-2 d-flex flex justify-content-start align-items-center">*/}
            {/*                                    <div className={"p-2"}>*/}
            {/*                                        <img style={{borderRadius: '10px'}} src={"/myimages/image.jpg"} alt="Product" width={35} height={30}/>*/}
            {/*                                    </div>*/}
            {/*                                    <div className="text-left">{row.product}</div>*/}
            {/*                                </td>*/}
            {/*                                <td className="p-2 whitespace-nowrap">*/}
            {/*                                    <div className="text-center">*/}
            {/*                                        <Badge value="Active" severity="success"/>*/}
            {/*                                    </div>*/}
            {/*                                </td>*/}
            {/*                                <td className="p-2 whitespace-nowrap">*/}
            {/*                                    <div className="text-center">{row.inventory}</div>*/}
            {/*                                </td>*/}
            {/*                                <td className="p-2 whitespace-nowrap">*/}
            {/*                                    <div className="text-center">{row.salesChannels}</div>*/}
            {/*                                </td>*/}
            {/*                                <td className="p-2 whitespace-nowrap">*/}
            {/*                                    <div className="text-center">{row.market}</div>*/}
            {/*                                </td>*/}
            {/*                                <td className="p-2 whitespace-nowrap">*/}
            {/*                                    <div className="text-center">{row.category}</div>*/}
            {/*                                </td>*/}
            {/*                                <td className="p-2 whitespace-nowrap">*/}
            {/*                                    <div className="text-center">{row.vendor}</div>*/}
            {/*                                </td>*/}
            {/*                                <td className="p-2 whitespace-nowrap">*/}
            {/*                                    <span className={"pa pa-icon"}></span>*/}
            {/*                                </td>*/}
            {/*                            </tr>*/}
            {/*                        ))}*/}
            {/*                        </tbody>*/}
            {/*                    </table>*/}
            {/*                </div>*/}

            {/*            </div>*/}
            {/*        </div>*/}
            {/*    </div>*/}
            {/*</p>*/}
            {/*</TabPanel>*/}
            <TabPanel header="Active" >
            <p className="m-0">
                <div className="flex flex-col justify-center h-full">
                    {/* Table */}
                    <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                        <div className="p-3">
                            <div className="overflow-x-auto">
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
                                            <div className="font-semibold text-left">Product Name</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Status</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Inventory</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Sales Channels</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Market</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Category</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Vendor</div>
                                        </th>
                                        <th className="p-2 whitespace-nowrap">
                                            <div className="font-semibold text-center">Actions</div>
                                        </th>
                                    </tr>
                                    </thead>
                                    <tbody className="text-sm divide-y divide-gray-100">
                                    {tableData.slice(first, first + rows).map((row, index) => (
                                        <tr key={index}>
                                            <td className="p-2 whitespace-nowrap">
                                                <input type="checkbox" />
                                            </td>
                                            <td className="p-2 d-flex flex justify-content-start align-items-center">
                                                <div className="p-2">
                                                    <img style={{ borderRadius: '10px' }} src={"/myimages/image.jpg"} alt="Product" width={35} height={30} />
                                                </div>
                                                <Link href={`/products/${row.product.toLowerCase()}`}>
                                                <div className="text-left">{row.product}</div>
                                                </Link>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-center">
                                                    <Badge value="Active" severity="success" />
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
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-center">{row.category}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-center">{row.vendor}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                {/*<Link href={"/update-addproducts"} className="pointer mx-2" style={{ cursor: "pointer" }} onClick={() => setEdit(true)}>*/}
                                                {/*    Edit*/}
                                                {/*</Link>*/}
                                                <span className="text-red-300 pointer" onClick={() => setVisiblebox(true)}>
                                                                Delete
                                                            </span>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <Paginator first={first} rows={rows} totalRecords={tableData.length} rowsPerPageOptions={[3, 5, 10]} onPageChange={onPageChange} />
                            </div>

                        </div>
                    </div>                </div>
            </p>
            </TabPanel>


            <TabPanel header="Inactive">

            </TabPanel>

            </TabView>
            </div>
            <Toast ref={toast}></Toast>
            <ConfirmDialog visible={visiblebox} onHide={() => setVisiblebox(false)} message="Are you sure you want to proceed?"
                           header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />


        </div>
    );
};

export default App;
