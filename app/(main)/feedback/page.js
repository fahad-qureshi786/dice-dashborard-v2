"use client"
import React, {useState} from 'react';
import {Calendar} from "primereact/calendar";

const MenuRequests = () => {
    const [date, setDate] = useState(null);

    // Sample menu requests data
    const menuRequestsData = [
        {
            dateTime: "2024-05-10 10:30 AM",
            name: "John Doe",
            company: "ABC Inc.",
            headcount: 50,
            budget: "$2000",
            cuisinePreferences: "Italian, Mexican",
            requestedOrderDate: "2024-05-15",
            status: "New"
        },
        {
            dateTime: "2024-05-08 09:45 AM",
            name: "Jane Smith",
            company: "XYZ Corporation",
            headcount: 30,
            budget: "$1500",
            cuisinePreferences: "Asian, Mediterranean",
            requestedOrderDate: "2024-05-20",
            status: "Resolved"
        },
    ];

    return (
        <div className="flex flex-col justify-center h-full">
            {/* Table */}
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">Feedback</h2>
                </header>
                {/*<div className={"flex card justify-content-evenly my-4"}>*/}
                {/*    <div>*/}
                {/*        <div className="flex-auto">*/}
                {/*            <label htmlFor="buttondisplay" className="font-bold  block mb-2">*/}
                {/*                Select Date*/}
                {/*            </label>*/}
                {/*        </div>*/}
                {/*        <Calendar value={date} onChange={(e) => setDate(e.target.value)} showIcon  />*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span className={"font-semibold"}>Total Order</span>*/}
                {/*        <div>*/}
                {/*            <span className={"text-4xl font-bold text-gray-500"}>34</span>*/}
                {/*            <span className={"text-green-400 mx-2"}>100%</span>*/}
                {/*            <i className=" pi pi-arrow-up text-green-400 ml-2"></i>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span className={"font-semibold"}>Ordered Items</span>*/}
                {/*        <div>*/}
                {/*            <span className={"text-4xl font-bold text-gray-500"}>34</span>*/}
                {/*            <span className={"text-green-400 mx-2"}>100%</span>*/}
                {/*            <i className=" pi pi-arrow-up text-green-400 ml-2"></i>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span className={"font-semibold"}>Returns</span>*/}
                {/*        <div>*/}
                {/*            <span className={"text-4xl font-bold text-gray-500"}>34</span>*/}
                {/*            <span className={"text-green-400 mx-2"}>100%</span>*/}
                {/*            <i className=" pi pi-arrow-up text-green-400 ml-2"></i>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span className={"font-semibold"}>Fulfilled Orders</span>*/}
                {/*        <div>*/}
                {/*            <span className={"text-4xl font-bold text-gray-500"}>14</span>*/}
                {/*            <span className={"text-red-400 mx-2"}>10%</span>*/}
                {/*            <i className=" pi pi-arrow-down text-red-400 ml-2"></i>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <span className={"font-semibold"}>Delivered Orders</span>*/}
                {/*        <div>*/}
                {/*            <span className={"text-4xl font-bold text-gray-500"}>54</span>*/}
                {/*            <span className={"text-green-400 mx-2"}>100%</span>*/}
                {/*            <i className=" pi pi-arrow-up text-green-400 ml-2"></i>*/}
                {/*        </div>*/}

                {/*    </div>*/}
                {/*</div>*/}

                <div className="p-3 card">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Date and Time Request Was Made</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Company</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Headcount</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Budget</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Cuisine Preferences</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Requested Order Date</div>
                                </th>

                            </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                            {/* Menu requests data */}
                            {menuRequestsData.map((request, index) => (
                                <tr key={index}>
                                    <td className="p-2 whitespace-nowrap text-center">{request.dateTime}</td>
                                    <td className="p-2 whitespace-nowrap">{request.name}</td>
                                    <td className="p-2 whitespace-nowrap">{request.company}</td>
                                    <td className="p-2 whitespace-nowrap text-center">{request.headcount}</td>
                                    <td className="p-2 whitespace-nowrap text-center">{request.budget}</td>
                                    <td className="p-2 whitespace-nowrap">{request.cuisinePreferences}</td>
                                    <td className="p-2 whitespace-nowrap text-center">{request.requestedOrderDate}</td>
                                    <td className="p-2 whitespace-nowrap text-center">
                                        {/* Dropdown for status */}
                                        {/*<Dropdown options={statuses} value={request.status} />*/}
                                    </td>
                                    <td className="p-2 whitespace-nowrap text-center">
                                        {/* Dropdown for actions */}
                                        {/*<Dropdown options={actions} placeholder="Select an action" />*/}
                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MenuRequests;
