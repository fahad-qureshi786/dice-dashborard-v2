import React from 'react';
import {Button} from "primereact/button";

const Page = () => {
    return (
        <div>
            <h2 className={"p-4 m-4"}>Cart</h2>
            <div className={"flex bg-gray-200 p-4 rounded"} style={{alignItems: "center" , justifyContent: "space-around"}}>
                <div>
                    <div className={"block"}>
                        <img
                            className="  object-cover"
                            src="https://via.placeholder.com/150"
                            alt="Product image"
                            height={200}
                            width={200}
                        />
                    </div>

                </div>
                <div>
                    <div className=" -ml-8 text-lg font-bold">Product name</div>
                </div>
                <div className={""} style={{ justifyContent: "center"}}>
                    <div className="text-3xl">$19.99</div>
                    <div className="flex justify-center mt-2">
                        <i className="pi pi-heart mx-2 text-2xl" style={{ color: '#ff8a38' }}></i>
                        <i className="pi pi-trash text-2xl" style={{ color: '#ff8a38' }}></i>
                    </div>
                </div>
                <div>
                    <div className="flex justify-center w-12 mt-4">
                        <button className="border text-4xl font-bold rounded-md py-2 px-4">-</button>
                        <span className="text-center text-4xl mt-2 font-bold mx-4 w-8">1</span>
                        <button className="border text-4xl font-bold rounded-md py-2 px-4">+</button>
                    </div>
                </div>
            </div>

            <div className={"flex"} style={{justifyContent: "end"}}>

                <Button rounded  label="Check Out"  raised severity="warning" className={"sticky m-8"} style={{right: "30px", marginTop: "14px" , backgroundColor: "#ff8a38"}}/>
            </div>
        </div>
    );
};

export default Page;
