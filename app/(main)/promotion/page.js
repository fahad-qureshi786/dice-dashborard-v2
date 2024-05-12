import React from 'react';
import Image from "next/Image"
import {Badge}  from "primereact/badge"
const Page = () => {

    // Sample tableData with added fields
    const tableData = [
        {
            product: "Product A",
            inventory: 100,
            salesChannels: "Online",
            market: "Global",
            category: "Electronics",
            vendor: "Vendor X",
            dateCreated: "2024-05-10",
            status: "Active",
            type: "Free Delivery",
            expirationDate: "2024-06-30"
        },
        {
            product: "Product B",
            inventory: 50,
            salesChannels: "Online",
            market: "Local",
            category: "Clothing",
            vendor: "Vendor Y",
            dateCreated: "2024-05-08",
            status: "Scheduled",
            type: "20% Discount",
            expirationDate: "2024-05-31"
        },
        // Add more data as needed
    ];


    return (
        <div>
            <div className="flex flex-col justify-center h-full">
                {/* Table */}
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800">Promotions</h2>
                    </header>
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
                                        {/*<div className="font-semibold text-left">Image</div>*/}
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Products</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Status</div>
                                    </th>

                                    {/* New headers */}
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Date created</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Status</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Type</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Expiration date</div>
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

                                        {/* Add random data */}
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-center">2024-05-12</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-center">Active</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-center">Free Delivery</div>
                                        </td>
                                        <td className="p-2 whitespace-nowrap">
                                            <div className="text-center">2024-06-01</div>
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
    );
};

export default Page;
