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
            respond: ( <div className={"flex mx-2"}>
                <div >
                    <Button
                        rounded
                        label="Manage"
                        raised
                        severity="warning"
                        className={"sticky "}
                        style={{ right: "30px", marginTop: "14px", marginRight: "3px", backgroundColor: "#ff8a38" }}
                    />


                </div>

                <div >
                    <Button
                        rounded
                        label="Manage"
                        raised
                        severity="warning"
                        className={"sticky "}
                        style={{ right: "30px", marginTop: "14px", backgroundColor: "#ff8a38" }}
                    />


                </div>
            </div>),
            orderHistory: (
                <div>
                    <div className={"flex"}>
                        <Button
                            rounded
                            label="Manage"
                            raised
                            severity="warning"
                            className={"sticky "}
                            style={{ right: "30px", marginTop: "14px", backgroundColor: "#ff8a38" }}
                        />


                    </div>
                </div>
            ),
        },
        {
            key: '3',
            clientName: 'Bob Johnson',
            clientHistory: 'Returning customer',
            email: 'bobjohnson@example.com',
            respond: ( <div className={"flex mx-2"}>
                <div >
                    <Button
                        rounded
                        label="Manage"
                        raised
                        severity="warning"
                        className={"sticky "}
                        style={{ right: "30px", marginTop: "14px", marginRight: "3px", backgroundColor: "#ff8a38" }}
                    />


                </div>

                <div >
                    <Button
                        rounded
                        label="Manage"
                        raised
                        severity="warning"
                        className={"sticky "}
                        style={{ right: "30px", marginTop: "14px", backgroundColor: "#ff8a38" }}
                    />


                </div>
            </div>),
            orderHistory: (
                <div>
                    <div className={"flex"}>
                        <Button
                            rounded
                            label="Manage"
                            raised
                            severity="warning"
                            className={"sticky "}
                            style={{ right: "30px", marginTop: "14px", backgroundColor: "#ff8a38" }}
                        />


                    </div>
                </div>
            ),
        },
        {
            key: '3',
            clientName: 'Bob Johnson',
            clientHistory: 'Returning customer',
            email: 'bobjohnson@example.com',
            respond: ( <div className={"flex mx-2"}>
                <div >
                    <Button
                        rounded
                        label="Manage"
                        raised
                        severity="warning"
                        className={"sticky "}
                        style={{ right: "30px", marginTop: "14px", marginRight: "3px", backgroundColor: "#ff8a38" }}
                    />


                </div>

                <div >
                    <Button
                        rounded
                        label="Manage"
                        raised
                        severity="warning"
                        className={"sticky "}
                        style={{ right: "30px", marginTop: "14px", backgroundColor: "#ff8a38" }}
                    />


                </div>
            </div>),
            orderHistory: (
                <div>
                    <div className={"flex"}>
                        <Button
                            rounded
                            label="Manage"
                            raised
                            severity="warning"
                            className={"sticky "}
                            style={{ right: "30px", marginTop: "14px", backgroundColor: "#ff8a38" }}
                        />


                    </div>
                </div>
            ),
        },

    ];

    return (
        <div>
            <h2 className={"font-bold  "} >Customers Feedback Portal</h2>
            <div style={{ paddingTop: "33px", alignItems: "center" }} className={"flex w-full item-center "}>
                <div className={"w-full"}>
                    <span className=" w-full" style={{ width: "80%" }}>
                        <InputText
                            id="username"
                            type="text"
                            // value={floatValue}
                            // onChange={(e) => setFloatValue(e.target.value)}
                            className={"w-full"}
                            placeholder={"Search via client email, order number"}
                            style={{backgroundColor: "#d9d9d9"}}
                        />
                    </span>
                </div>
                <div className={"mx-3  text-xl text-orange-400  w-[20%] pointer font-semibold  "} style={{ width: "20%", cursor: "pointer" }}>
                    <Button label="Submit" raised severity="warning" className={"sticky "} style={{right: "30px"}}/>
                </div>
            </div>

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
                    <Column field="feedback" header="Feedback" />
                    <Column field="date" header="Date" />
                    <Column field="respond" header="Operations" />

                </DataTable>
            </div>

        </div>
    );
};

export default Page;
