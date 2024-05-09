import React from 'react';
import {Button} from "primereact/button";

const Page = () => {
    return (
        <div>
            <div className={"flex m-8"} style={{justifyContent: "space-between"}}>
                <h2 className={"font-bold"}>Order History</h2>
                <Button rounded  label="View active order"  raised severity="warning" className={"sticky "} style={{right: "30px",  backgroundColor: "#ff8a38"}}/>
            </div>

            <div className={"flex text-center text-xl" } style={{justifyContent: "space-evenly", alignItems: "center" }}>
                <div>From
                    <div className={"bg-gray-200 p-4 border-2 "} style={{marginTop : "8px" , borderColor: "#ff8138", borderRadius: '8px'}}>01 April   <i className="pi pi-calendar" style={{ color: '#ff8a38', paddingLeft: "23px" ,fontSize: "20px" }}></i></div>
                </div>
                <div>To
                    <div className={"bg-gray-200 p-4 border-2 "} style={{ marginTop : "8px" ,borderColor: "#ff8138", borderRadius: '8px'}}>01 April   <i className="pi pi-calendar" style={{ color: '#ff8a38', paddingLeft: "23px" ,fontSize: "20px" }}></i></div>
                </div>
                <div>
                    <Button rounded  label="Apply Filter"  raised severity="warning" className={"sticky "} style={{marginTop : "22px",  backgroundColor: "#ff8a38"}}/>
                </div>
            </div>
        </div>
    );
};

export default Page;
