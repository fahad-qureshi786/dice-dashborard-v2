"use client"
import React, {useState} from 'react';
import {Button} from "primereact/button";
import  { Avatar } from 'primereact/avatar';
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
const Page = () => {

    const [visible, setVisible] = useState(false);
    return (
        <div style={{wdith: "80%"}}>
            <div className={"flex " } style={{justifyContent: "space-between"}}>
                <div>
                    <h1>My Profile</h1>
                </div>
                <div>
                    <Button onClick={() => setVisible(true)}  label="Edit Profile" raised severity="warning" className={"sticky "} />
                </div>

            </div>

            <div className={"flex"} style={{justifyContent: "center"}}>
                <div>
                    <div className={"bg-orange-500 "} style={{width: "180px" , height: "180px", marginTop: "34px", borderRadius: "100%"}}></div>
                </div>
            </div>
            <div className={"text-center"} style={{marginTop: "45px"}}>
                <h1 className={{paddingTop: "34px"}}>Jay Shah</h1>
            </div>

            <h3>Email: jayshah@gmail.com</h3>
            <h3>Address: New York City United States</h3>
            <h3>Phone Number: +1 (182) 1828128</h3>

            <Dialog header="Header" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <p className="m-0">
                     <span className="p-float-label w-full" style={{width : "80%"}}>
                    <label htmlFor="username">Search</label>
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
                    <label htmlFor="username">Search</label>
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
                    <label htmlFor="username">Search</label>
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
