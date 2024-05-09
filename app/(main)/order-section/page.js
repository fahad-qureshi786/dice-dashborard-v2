import React from 'react';
import {Button} from "primereact/button";

const Page = () => {
    return (
        <div className={"p-4"}>
            <h2>My Orders</h2>
            <div className={"flex"} style={{justifyContent: "end"}}>
                <Button rounded  label="View Order history"  raised severity="warning" className={"sticky "} style={{right: "30px", marginTop: "14px" , marginBottom: "22px" , backgroundColor: "#ff8a38"}}/>
            </div>

            <div className={"bg-gray-200 p-4 text-xl "}>Order  <span className={"text-orange-400"}>#1028712862</span></div>
            <div className={"p-4 bg-gray-200 flex"} style={{justifyContent: "space-between", borderBottom: "solid 1px #000" }}>
                <div>Placed on: 24 April 2024 11:30:21</div>
                <div>Manage</div>
            </div>

            <div className={"flex bg-gray-200 p-4 rounded"} style={{alignItems: "center" , justifyContent: "space-around", borderRadius: "5px"}}>
                <div>
                    <div className={"block"}>
                        <img
                            className="  object-cover"
                            src="https://via.placeholder.com/150"
                            alt="Product image"
                            height={100}
                            width={100}
                        />
                    </div>

                </div>
                <div>
                    <div className=" -ml-8 text-lg font-bold">Product name</div>
                </div>
                <div>
                    <div className=" -ml-8 text-lg font-bold">QTY:1</div>
                </div>

                <div>
                    <Button  rounded label="Processing" severity="warning" outlined className={"bg-white"}/>
                </div>
                {/*<div className={""} style={{ justifyContent: "center"}}>*/}
                {/*    <div className="text-3xl">$19.99</div>*/}
                {/*    <div className="flex justify-center mt-2">*/}
                {/*        <i className="pi pi-heart mx-2 text-2xl" style={{ color: '#ff8a38' }}></i>*/}
                {/*        <i className="pi pi-trash text-2xl" style={{ color: '#ff8a38' }}></i>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <div>

                    <div className="flex justify-center ">

                        <span className="text-center text-orange-400 text-2xl mt-2 font-bold mx-4 w-16">Get by: 12:00</span>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
