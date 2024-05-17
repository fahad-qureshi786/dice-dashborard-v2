import React from 'react';
import { Dropdown } from 'primereact/dropdown';
import pic from  "/public/myimages/image.jpg";

import {Badge} from "primereact/badge";
const page = () => {
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
        // Add more menu requests data as needed
    ];

    // Sample statuses for the dropdown
    const statuses = [
        { label: 'New (unopened)', value: 'New' },
        { label: 'Resolved (menus uploaded)', value: 'Resolved' },
        { label: 'OP (order placed)', value: 'OP' },
        { label: 'Abandoned', value: 'Abandoned' }
    ];

    // Sample actions for the dropdown
    const actions = [
        { label: 'Accept', value: 'upload_menus' },
        { label: 'Delete', value: 'mark_resolved' }
    ];

    return (
        <div className="flex flex-col justify-center h-full">
            {/* Table */}
            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-5 py-4 border-b border-gray-100">
                    <h2 className="font-semibold text-gray-800">Order Request</h2>
                </header>
                <div className="p-3">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Image</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                {/*<th className="p-2 whitespace-nowrap">*/}
                                {/*    <div className="font-semibold text-left">Company</div>*/}
                                {/*</th>*/}
                                {/*<th className="p-2 whitespace-nowrap">*/}
                                {/*    <div className="font-semibold text-center">Headcount</div>*/}
                                {/*</th>*/}
                                {/*<th className="p-2 whitespace-nowrap">*/}
                                {/*    <div className="font-semibold text-center">Budget</div>*/}
                                {/*</th>*/}
                                {/*<th className="p-2 whitespace-nowrap">*/}
                                {/*    <div className="font-semibold text-left">Cuisine Preferences</div>*/}
                                {/*</th>*/}
                                {/*<th className="p-2 whitespace-nowrap">*/}
                                {/*    <div className="font-semibold text-center">Requested Order Date</div>*/}
                                {/*</th>*/}
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Status</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Actions</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                            {/* Menu requests data */}
                            {menuRequestsData.map((request, index) => (
                                <tr key={index}>
                                    <td className="p-2 whitespace-nowrap text-center">
                                        <img style={{borderRadius: '10px'}} src={"/myimages/image.jpg"} alt={"pic"} width={43} />
                                    </td>
                                    <td className="p-2 whitespace-nowrap">{request.name}</td>
                                    {/*<td className="p-2 whitespace-nowrap">{request.company}</td>*/}
                                    {/*<td className="p-2 whitespace-nowrap text-center">{request.headcount}</td>*/}
                                    {/*<td className="p-2 whitespace-nowrap text-center">{request.budget}</td>*/}
                                    {/*<td className="p-2 whitespace-nowrap">{request.cuisinePreferences}</td>*/}
                                    {/*<td className="p-2 whitespace-nowrap text-center">{request.requestedOrderDate}</td>*/}
                                    <td className="p-2 whitespace-nowrap">
                                        {/* Use Prime React Badge component */}
                                        <div className="text-center">
                                            <Badge value="Pending" severity="danger"/>
                                        </div>
                                    </td>

                                    {/*<td className="p-2 whitespace-nowrap text-center">*/}
                                    {/*    /!* Dropdown for status *!/*/}
                                    {/*    <Dropdown options={statuses} value={request.status} />*/}
                                    {/*</td>*/}
                                    <td className="p-2 whitespace-nowrap text-center">
                                        {/* Dropdown for actions */}
                                        <Dropdown options={actions} placeholder="Select an action" />
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

export default page;
