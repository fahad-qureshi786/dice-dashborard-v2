"use client"
import React, {useState} from 'react';
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";


const Page = () => {
    const [visible, setVisible] = useState(false);

    return (
        <div>
            <div className={"flex"} style={{justifyContent: "end"}}>

            <Button rounded  label="Generate Invoice" onClick={() => setVisible(true)} raised severity="warning" className={"sticky "} style={{right: "30px", marginTop: "14px" , backgroundColor: "#ff8a38"}}/>
            </div>

            <div className="shadow-lg rounded-lg overflow-hidden mx-4 md:mx-10">
                <table className="w-full table-fixed">
                    <thead className={"border-2 border-orange-200"}>
                    <tr className="bg-gray-100">
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                          Date
                        </th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                            Customer Email
                        </th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                            Invoice
                        </th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                            Orders
                        </th>
                        <th className="w-1/4 py-4 px-6 text-left text-gray-600 font-bold uppercase">
                            Price
                        </th>
                    </tr>
                    </thead>
                    <tbody className="bg-white">
                    <tr>
                        <td className="py-4 px-6 border-b border-gray-200">John Doe</td>
                        <td className="py-4 px-6 border-b border-gray-200 truncate">
                            johndoe@gmail.com
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                        <td className="py-4 px-6 border-b border-gray-200">
                            <Button label="Inactive" severity="danger" rounded />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                        <td className="py-4 px-6 border-b border-gray-200 truncate">
                            janedoe@gmail.com
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                        <td className="py-4 px-6 border-b border-gray-200">
                            <Button label="Active" severity="success" rounded />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                        <td className="py-4 px-6 border-b border-gray-200 truncate">
                            janedoe@gmail.com
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                        <td className="py-4 px-6 border-b border-gray-200">
                            <Button label="Active" severity="success" rounded />
                        </td>
                    </tr>
                    <tr>
                        <td className="py-4 px-6 border-b border-gray-200">Jane Doe</td>
                        <td className="py-4 px-6 border-b border-gray-200 truncate">
                            janedoe@gmail.com
                        </td>
                        <td className="py-4 px-6 border-b border-gray-200">555-555-5555</td>
                        <td className="py-4 px-6 border-b border-gray-200">
                            <Button label="Inactive" severity="danger" rounded />
                        </td>
                    </tr>
                    {/* Add more rows here */}
                    </tbody>
                </table>
            </div>

            <Dialog header="Add data" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <p className="m-0">
                     <span className="p-float-label w-full" style={{width : "80%"}}>
                    <label htmlFor="username">Date</label>
                        <InputText
                            id="username"
                            type="text"

                            // value={floatValue}
                            // onChange={(e) => setFloatValue(e.target.value)}
                            className={"w-full bg-gray-100"}
                            placeholder={"Add Collections"}

                        />

                    </span>
                    <span className="p-float-label w-full" style={{width : "80%", marginTop: "12px"}}>
                    <label htmlFor="username">Customer Eamil</label>
                        <InputText
                            id="username"
                            type="text"

                            // value={floatValue}
                            // onChange={(e) => setFloatValue(e.target.value)}
                            className={"w-full bg-gray-100"}
                            placeholder={"Add Collections"}

                        />

                    </span>
                    <span className="p-float-label w-full" style={{width : "80%", marginTop: "12px"}}>
                    <label htmlFor="username">Invoice</label>
                        <InputText
                            id="username"
                            type="text"

                            // value={floatValue}
                            // onChange={(e) => setFloatValue(e.target.value)}
                            className={"w-full bg-gray-100"}
                            placeholder={"Add Collections"}

                        />

                    </span>

                    <span className="p-float-label w-full" style={{width : "80%", marginTop: "12px"}}>
                    <label htmlFor="username">Order</label>
                        <InputText
                            id="username"
                            type="text"

                            // value={floatValue}
                            // onChange={(e) => setFloatValue(e.target.value)}
                            className={"w-full bg-gray-100"}
                            placeholder={"Add Collections"}

                        />

                    </span>

                    <span className="p-float-label w-full" style={{width : "80%", marginTop: "12px"}}>
                    <label htmlFor="username">Price</label>
                        <InputText
                            id="username"
                            type="text"

                            // value={floatValue}
                            // onChange={(e) => setFloatValue(e.target.value)}
                            className={"w-full bg-gray-100"}
                            placeholder={"Add Collections"}

                        />

                    </span>
                </p>
            </Dialog>

        </div>
    );
};

export default Page;
