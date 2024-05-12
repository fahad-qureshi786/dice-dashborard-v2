import React from 'react';
import { InputText } from "primereact/inputtext";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Button} from "primereact/button";

const Page = () => {
    const clients = [
        {
            key: '1',
            clientName: 'John Doe',
            clientHistory: 'Long-time customer',
            email: 'johndoe@example.com',
            orderHistory: <div>  <div className={"flex"} >

                <Button rounded  label="Order history"  raised severity="warning" className={"sticky "} style={{right: "30px", marginTop: "14px" , backgroundColor: "#ff8a38"}}/>
            </div></div>
        },
        {
            key: '2',
            clientName: 'Jane Smith',
            clientHistory: 'New customer',
            email: 'janesmith@example.com',
            orderHistory: <div>  <div className={"flex"} >

                <Button rounded  label="Order history"  raised severity="warning" className={"sticky "} style={{right: "30px", marginTop: "14px" , backgroundColor: "#ff8a38"}}/>
            </div></div>
        },
        {
            key: '3',
            clientName: 'Bob Johnson',
            clientHistory: 'Returning customer',
            email: 'bobjohnson@example.com',
            orderHistory: <div>  <div className={"flex"} >

                <Button rounded  label="Order history"  raised severity="warning" className={"sticky "} style={{right: "30px", marginTop: "14px" , backgroundColor: "#ff8a38"}}/>
            </div></div>
        }
    ];

    return (

        <>
        <header className="px-5  border-b border-gray-100">
            <h2 className="font-semibold text-gray-800">Customers</h2>
        </header>
            <div className="flex flex-col justify-content-end mb-4">
                <Button style={{ backgroundColor: '#ffa15f',   border: "none", color: 'white',  margin:"2px" }} primary>
                    Get Reward
                </Button>
            </div>

        <div className="flex  flex-col justify-center h-full">

            <div className="w-full  max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">


                <div className={"card  flex  align-items-center text-xl"}>
                    <h4 className={"text-gray-800 mx-2 "} style={{margin: "5px"}}>920 <span className={"text-gray-500"}>Customer</span></h4>
                    <h4 className={"text-gray-800 mx-2 "} style={{margin: "5px"}}>100% <span className={"text-gray-500"}>of yours Customer base</span></h4>
                </div>
                <div className="p-3 card my-2">
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            <thead className="text-md font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Company</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">City, State</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Number of Orders</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Total Amount Spent</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Last Order Date</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                            {/* Dummy data */}
                            <tr>
                                <td className="p-2 whitespace-nowrap">John Doe</td>
                                <td className="p-2 whitespace-nowrap">ABC Inc.</td>
                                <td className="p-2 whitespace-nowrap">New York, NY</td>
                                <td className="p-2 whitespace-nowrap text-center">10</td>
                                <td className="p-2 whitespace-nowrap text-center">$500.00</td>
                                <td className="p-2 whitespace-nowrap text-center">2024-05-10</td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">John Doe</td>
                                <td className="p-2 whitespace-nowrap">ABC Inc.</td>
                                <td className="p-2 whitespace-nowrap">New York, NY</td>
                                <td className="p-2 whitespace-nowrap text-center">10</td>
                                <td className="p-2 whitespace-nowrap text-center">$500.00</td>
                                <td className="p-2 whitespace-nowrap text-center">2024-05-10</td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">John Doe</td>
                                <td className="p-2 whitespace-nowrap">ABC Inc.</td>
                                <td className="p-2 whitespace-nowrap">New York, NY</td>
                                <td className="p-2 whitespace-nowrap text-center">10</td>
                                <td className="p-2 whitespace-nowrap text-center">$500.00</td>
                                <td className="p-2 whitespace-nowrap text-center">2024-05-10</td>
                            </tr>
                            <tr>
                                <td className="p-2 whitespace-nowrap">Jane Smith</td>
                                <td className="p-2 whitespace-nowrap">XYZ Corporation</td>
                                <td className="p-2 whitespace-nowrap">Los Angeles, CA</td>
                                <td className="p-2 whitespace-nowrap text-center">5</td>
                                <td className="p-2 whitespace-nowrap text-center">$300.00</td>
                                <td className="p-2 whitespace-nowrap text-center">2024-05-08</td>
                            </tr>
                            {/* Add more dummy data as needed */}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>


        </>
    );
};

export default Page;
