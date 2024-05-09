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
        <div>
            <h2 className={"font-bold  "} >Clients Details</h2>
            <div style={{ paddingTop: "33px", alignItems: "center" }} className={"flex w-full item-center "}>
                <div className={"w-full"}>
                    <span className=" w-full" style={{ width: "80%" }}>
                        <InputText
                            id="username"
                            type="text"
                            // value={floatValue}
                            // onChange={(e) => setFloatValue(e.target.value)}
                            className={"w-full"}
                            placeholder={"Search via email, name or contact number..."}
                            style={{backgroundColor: "#e3e3e3"}}
                        />
                    </span>
                </div>
                <div className={"mx-3  text-xl text-orange-400  w-[20%] pointer font-semibold  "} style={{ width: "20%", cursor: "pointer" }}>
                    <Button label="Submit" raised severity="warning" className={"sticky "} style={{right: "30px"}}/>
                </div>
            </div>

            <div style={{ paddingTop: "45px", alignItems: "center" , width: "90%" }}>
                <DataTable value={clients} tableStyle={{ minWidth: '50rem' }}>
                    <Column field="clientName" header="Client Name"  />
                    <Column field="clientHistory" header="Client History" />
                    <Column field="email" header="Email" />
                    <Column field="orderHistory" header="Order History" />
                </DataTable>
            </div>

        </div>
    );
};

export default Page;
