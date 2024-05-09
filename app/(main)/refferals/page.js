import React from 'react';
import { InputText } from "primereact/inputtext";
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import {Button} from "primereact/button";

const Page = () => {
    const clients = [
        {
            key: '3',
            clientName: 'Bob Johnson',
            clientHistory: 'Returning customer',
            email: 'bobjohnson@example.com',
            respond: <div className={"font-bold text-5xl"}>100</div>,
            date: "12/032024"

        },


    ];

    return (
        <div>
            <h2 className={"font-bold  "} >Refferals</h2>


            <div style={{
                paddingTop: "45px",
                paddingBottom: "20px",
                marginTop: "32px",
                alignItems: "center",
                width: "90%",
                borderRadius: "12px",
                border: "solid 2px #ff8a38"}}

                 className={"border-2 "}>
                <DataTable value={clients} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="email" header="Customer Eamil"  />
                    <Column field="date" header="Date" />
                    <Column field="respond" header="Referenced Registered" />


                </DataTable>
            </div>

        </div>
    );
};

export default Page;
