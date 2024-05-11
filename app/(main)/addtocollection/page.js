"use client"
import React, {useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";
import Image from "next/image";
import pic from "../../../public/myimages/image.jpg";
import {Badge} from "primereact/badge";
import {
    AutoComplete

} from "primereact/autocomplete";
import { Chips } from "primereact/chips";

const Page = () => {


    const [text, setText] = useState('');
    const tableData = [
        {
            image: {pic},
            product: 'Delicious Italian Pizza',
            status: 'Active',
            inventory: '50',
            salesChannels: 'Online',
            market: 'US',
            category: 'Food',
            vendor: 'Local Vendor',
        },
        {
            image: {pic},
            product: 'Tasty Beef Burger with Cheese',
            status: 'Active',
            inventory: '30',
            salesChannels: 'Store',
            market: 'EU',
            category: 'Food',
            vendor: 'FastFood Co.',
        },
        {
            image: {pic},
            product: 'Fresh Garden Salad with Grilled Chicken',
            status: 'Active',
            inventory: '70',
            salesChannels: 'Online',
            market: 'Asia',
            category: 'Food',
            vendor: 'Organic Co.',
        },
    ];
    return (
        <div>

                <h3>Title</h3>
                <InputText type="text" placeholder="Add Title " className={"w-full my-2 "} />
                <h4 className={"text-gray-600"}>Description</h4>
                <div className="">
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }}  className={"border border-2 border-gray-500 rounded-md"}/>
                </div>

            <div className={"card my-4"}>
                <h3>Collection Type</h3>
                <div className={"my-4"}>
                    <AutoComplete
                        placeholder="Product Tag"
                        id="dd"
                        dropdown
                        multiple
                        className={"mx-2"}
                        field="name"
                    />
                    <AutoComplete
                        placeholder="is equal to"
                        id="dd"
                        dropdown
                        multiple
                        className={"mx-2"}
                        field="name"
                    />
                    <Chips
                        placeholder="America"
                        className={"mx-2"}
                    />

                </div>
                <span className={"card my-4 p-2"}>Add another collection</span>
            </div>
            {/* Table */}
            <div className="flex flex-col card  mt-4 justify-center h-full">
                {/* Table */}
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className=" border-b border-gray-100">
                         <h2 className="font-semibold mt-4 text-gray-600">Best sellign Products </h2>
                    </header>
                    <div className="">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">
                                            {/* Add a label for the checkboxes */}
                                            {/*<input type="checkbox" id="select-all"/>*/}
                                        </div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Image</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Qty</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Status</div>
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
                                        <td className="p-2 flex  whitespace-nowrap">

                                            <Image src={pic} alt="Product" width={42} height={30}/>
                                            <div className="text-left text-md font-bold mx-2">{row.product}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-left text-md font-bold mx-2">{row.inventory}</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            {/* Use Prime React Badge component */}
                                            <div className="text-center">
                                                <Badge value="Active" severity="success"/>
                                            </div>
                                        </td>


                                    </tr>
                                ))}
                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>

                <Button  style={{ backgroundColor: '#FF8A38', border: "none", color: 'white',  margin:"2px", float: "right" }} primary>
                    Add Collection
                </Button>



        </div>
    );
};

export default Page;
