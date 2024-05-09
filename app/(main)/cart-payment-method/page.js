import React from 'react';
import {Button} from "primereact/button";
import img1 from "../../../public/myimages/pic (1).png";
import img2 from "../../../public/myimages/pic (2).png";
import Image from "next/image";


const Page = () => {
    return (
        <div>
            <div className={"flex m-8"} style={{justifyContent: "space-between"}}>
                <h2 className={"font-bold"}>Select Payment Method</h2>
                {/*<Button rounded  label="View active order"  raised severity="warning" className={"sticky "} style={{right: "30px",  backgroundColor: "#ff8a38"}}/>*/}
            </div>

            <div className={"flex text-center text-xl" } style={{justifyContent: "space-evenly", alignItems: "center" }}>
                <div>
                    <div className={"bg-gray-200 p-4 border-2 "} style={{marginTop : "8px" , borderColor: "#ff8138", borderRadius: '8px'}}>
                      <Image src={img1} width={100} />

                    <div>Credit/Debit Card</div>
                    </div>
                </div>
                <div>
                    <div className={"bg-gray-200 p-4 border-2 "} style={{ marginTop : "8px" ,borderColor: "#ff8138", borderRadius: '8px'}}>
                        <Image src={img2} width={100} />
                        <div>Cash on Delivery </div>
                    </div>
                </div>
                {/*<div>*/}
                {/*    <Button rounded  label="Apply Filter"  raised severity="warning" className={"sticky "} style={{marginTop : "22px",  backgroundColor: "#ff8a38"}}/>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Page;
