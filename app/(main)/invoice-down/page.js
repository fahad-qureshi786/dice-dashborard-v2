"use client"
import React, {useRef} from 'react';
import logo from "../../../public/layout/images/logo.png"

import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import {Button} from "primereact/button";


const Page = () => {
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
        { description: 'Product 1', amount: '$100.00', quantity: '8' },
        { description: 'Product 2', amount: '$50.00', quantity: '8' },
        { description: 'Product 3', amount: '$75.00', quantity: '8' },
    ];

    return (
        <div>



            <div className={""} ref={pdfRef} >
            <div className="bg-white border rounded-lg shadow-lg px-6  max-w-md mx-auto ">
                <div className={"flex justify-content-evenly align-items-center"} style={{alignItems : "center"}}>


                <div>
                    <img src={"http://localhost:3000/layout/images/logo.png"} width={80} />
                </div>
                <div className={"flex justify-content-evenly align-items-center"} style={{alignItems : "center"}}>
                    <h1 className="font-bold text-2xl  text-center text-gray-600">
                        Download Invoice
                    </h1>
                </div>
                <div>
                    <div className="flex justify-between ">
                        <h1 className="text-lg font-bold">Invoice:</h1>
                        <div className="text-gray-700">
                            001

                        </div>
                    </div>
                </div>
                </div>

                <hr className="mb-2" />

                <div className="mb-8">
                    <h2 className="text-lg font-bold mb-4">Bill To:</h2>
                    <div className="text-gray-700 mb-2">John Doe</div>
                    <div className="text-gray-700 mb-2">123 Main St.</div>
                    <div className="text-gray-700 mb-2">Anytown, USA 12345</div>
                    <div className="text-gray-700">johndoe@example.com</div>
                </div>
                <DataTable value={data} className="w-full mb-8">
                    <Column field="description" header="Description" />
                    <Column field="amount" header="Amount" />
                    <Column field="quantity" header="Qty" />

                    {/*<tfoot>*/}
                    {/*<tr>*/}
                    {/*    <td className="font-bold text-gray-700">Total</td>*/}
                    {/*    <td className="font-bold text-gray-700">${total}</td>*/}
                    {/*    <td className="text-gray-700">{data.length}</td>*/}
                    {/*</tr>*/}
                    {/*</tfoot>*/}
                </DataTable>

            </div>
            <table className="w-full mb-8 px-8">
                <thead>
                <tr>
                    <th className="text-left font-bold text-gray-700">Total</th>
                    <th className="text-right font-bold text-gray-700">Amount</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="text-left text-gray-700">Total Amount</td>
                    <td className="text-right text-gray-700">$100.00</td>
                </tr>
                <tr>
                    <td className="text-left text-gray-700">Discount</td>
                    <td className="text-right text-gray-700">NA</td>
                </tr>
                <tr>
                    <td className="text-left text-gray-700">Other Amount </td>
                    <td className="text-right text-gray-700">$75.00</td>
                </tr>
                </tbody>

            </table>
        </div>

            <Button onClick={downloadPDF} className={"m-2"}>Download invoice</Button>
        </div>
    );
};

export default Page;
