import React from 'react';


import img3 from "../../../public/myimages/download (3).png";
import img4 from "../../../public/myimages/download (4).png";
import bg from "/public/myimages/image.jpg"
import imge from "/public/myimages/visa.png"
import Image from "next/image";
import {Button} from "primereact/button";


const Page = () => {
    return (
        <div>
            <div className={"flex m-8"} style={{justifyContent: "space-between"}}>
                <h2 className={"font-bold"}>Select Payment Method</h2>
                {/*<Button rounded  label="View active order"  raised severity="warning" className={"sticky "} style={{right: "30px",  backgroundColor: "#ff8a38"}}/>*/}
            </div>

            <div className={"flex text-center text-xl" } style={{justifyContent: "space-evenly", alignItems: "center" }}>
                <div className={"w-20"}>
                    <div className={"bg-orange-400 p-6 border-2 w-20 h-20"} style={{marginTop : "8px" , borderColor: "#ff8138", borderRadius: '8px'}}>

                        <i className={" pi pi-credit-card   w-20 h-20 text-white"} style={{fontSize: "120px"}}></i>
                        <div className={"text-white text-4xl"}>Credit/Debit Card</div>
                    </div>
                </div>
                <div className={"w-20"}>
                    <div className={"bg-gray-200 p-6 border-2 w-20 h-20"} style={{marginTop : "8px" , borderColor: "#ff8138", borderRadius: '8px'}}>

                        <i className={" pi pi-dollar bg-orange-400 text-white"} style={{fontSize: "120px"}}></i>
                        <div className={"text-black p-2 text-4xl"}>Cash on Delivery</div>
                    </div>
                </div>
            </div>
                <div>
                    <img src={"data:image/png;base64,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"} width={100} />
                    <img src={"data:image/png;base64,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"} width={100} />
                    <img src={"data:image/png;base64,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"} width={100} />
                </div>

            <div>
                <input
                    type="text"
                    optionLabel="name"
                    style={{
                        width: "100%",
                        marginTop: "12px",
                        border: "0px solid #918e8e",
                        color: "#333", // updated text color to a darker gray
                        background: "#d9d9d9",
                        height: "70px",
                        padding: "19px",
                        borderRadius: "5px",
                        fontSize: "18px",


                    }}

                    placeholder="Card Number"

                />

                <input
                    type="text"
                    optionLabel="name"
                    style={{
                        width: "100%",
                        marginTop: "12px",
                        border: "0px solid #918e8e",
                        color: "#333", // updated text color to a darker gray
                        background: "#d9d9d9",
                        height: "70px",
                        padding: "19px",
                        borderRadius: "5px",
                        fontSize: "18px",


                    }}

                    placeholder="Name on Card"

                />

                <input
                    type="text"
                    optionLabel="name"
                    style={{
                        width: "100%",
                        marginTop: "12px",
                        border: "0px solid #918e8e",
                        color: "#333", // updated text color to a darker gray
                        background: "#d9d9d9",
                        height: "70px",
                        padding: "19px",
                        borderRadius: "5px",
                        fontSize: "18px",


                    }}

                    placeholder="Expiration Date (MM/YY)"

                />

            </div>

            <div className={"flex p-4"} style={{justifyContent: ""}}>

                <Button rounded  label="Pay Now"  raised severity="warning" className={"sticky "} style={{right: "30px", marginTop: "14px" , backgroundColor: "#ff8a38"}}/>
            </div>
        </div>
    );
};

export default Page;
