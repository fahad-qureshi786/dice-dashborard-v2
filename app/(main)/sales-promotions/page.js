"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {Button} from 'primereact/button';

import  pic from "../../../public/myimages/image.jpg"
import { InputText } from 'primereact/inputtext';
import { Badge } from 'primereact/badge';
const count = 3;
const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;
import Image from 'next/image'
import { TabView, TabPanel } from 'primereact/tabview';
const App = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);

    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                }))
            )
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false);
                window.dispatchEvent(new Event('resize'));
            });
    };

    const loadMore = !initLoading && !loading ? (
        <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
            <Button onClick={onLoadMore}>Load more</Button>
        </div>
    ) : null;

    const tableData = [
        {
            image: {pic}, // Use placeholder images or actual images
            product: 'Pizza',
            status: 'Active',
            inventory: 'cash',
            salesChannels: 'Amount of order',
            market: 'Not to set',
            category: '7',
            vendor: 'Local Vendor',
        },
        {
            image: {pic},
            product: 'Burger',
            status: 'Active',
            inventory: 'code',
            salesChannels: 'Amount of order',
            market: 'Not to set',
            category: '9',
            vendor: 'FastFood Co.',
        },
        {
            image: {pic},
            product: 'Salad',
            status: 'Active',
            inventory: 'code',
            salesChannels: 'Amount of order',
            market: 'Not to set',
            category: '8',
            vendor: 'Organic Co.',
        },
    ];
    return (
        <div>
            <h3 className={"my-2 font-bold text-4xl"}>Promos and Discounts</h3>
            <div className={"flex justify-content-end  m-4"}>
                <Link href={"/create-discount"}>
                    <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#FF8A38', border: "none", color: 'white',  margin:"2px" }} primary>
                        Create Discount
                    </Button>
                </Link>
                <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#ffa15f', border: "none", color: 'white',  margin:"2px" }} primary>
                    Promotions
                </Button>
                <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#ffa15f', border: "none", color: 'white',  margin:"2px" }} primary>
                    Import
                </Button>
            </div>







            <div className="card">
                <TabView>
                    <TabPanel header="All">
                        <p className="m-0">
                            <div className="flex flex-col justify-center">
                                {/* Table */}
                                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                    <div>
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
                                                        {/*<div className="font-semibold text-left">Image</div>*/}
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Title</div>

                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-center">Status</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-center">Method</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-center">Type</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-center">Combination</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-center">Used</div>
                                                    </th>
                                                    {/*<th className="p-2 whitespace-nowrap">*/}
                                                    {/*    <div className="font-semibold text-center">Vendor</div>*/}
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
                                                        <td className="p-2 whitespace-nowrap">
                                                            {/* Use Image component from Next.js */}
                                                            {/*<Image src={pic} alt="Product" width={35} height={30}/>*/}
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left">{row.product}</div>
                                                            <span>80% discount on this product</span>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            {/* Use Prime React Badge component */}
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
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-center">{row.category}</div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            {/*<div className="text-center">{row.vendor}</div>*/}
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </p>
                    </TabPanel>
                    <TabPanel header="Active" className={"text-gray-200"}>
                        <p className="m-0">
                            <div className="flex flex-col justify-center h-full">
                                {/* Table */}
                                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                    <div className="">
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
                                                        <div className="font-semibold text-left">Image</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Products</div>
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
                                                </tr>
                                                </thead>
                                                <tbody className="text-sm divide-y divide-gray-100">
                                                {/* Loop through table data and render each row */}
                                                {tableData.map((row, index) => (
                                                    <tr key={index}>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <input type="checkbox"/>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            {/* Use Image component from Next.js */}
                                                            <Image src={pic} alt="Product" width={35} height={30}/>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left">{row.product}</div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            {/* Use Prime React Badge component */}
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
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-center">{row.category}</div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-center">{row.vendor}</div>
                                                        </td>
                                                    </tr>
                                                ))}
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </p>
                    </TabPanel>
                    <TabPanel header="Schedule">
                        <p className="m-0">

                        </p>
                    </TabPanel>
                    <TabPanel header="Expired">
                        <p className="m-0">

                        </p>
                    </TabPanel>
                </TabView>
            </div>







        </div>
    );
};

export default App;
