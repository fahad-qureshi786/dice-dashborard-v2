"use client"
import React, {useRef, useState} from 'react';

import { InputTextarea } from "primereact/inputtextarea";
import { Toast } from "primereact/toast";
import { FileUpload } from "primereact/fileupload";
import Image from 'next/image';
import picture from "../../../public/myimages/image.jpg"
import {Button} from "primereact/button";
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";

function Page(props) {
   // Use the useClient hook
    const toast = useRef(null);
    const [visible, setVisible] = useState(false);
    const onUpload = () => {
        toast.current?.show({
            severity: 'info',
            summary: 'Success',
            detail: 'File Uploaded',
            life: 3000
        });
    };

    return (
        <div style={{ padding: "5px", marginTop: "32px" }}>
            {/*<h2 className={"font-bold "}>Create recommendation for Customer Portal </h2>*/}
            <InputTextarea
                placeholder="Write recommendation here..."
                style={{ width: "100%", height: "25%" }}
                rows={8}
                cols={30}
            />

            <div className="grid">
                <h2 className={"font-bold "} style={{marginTop : "32px"}}>Choose Image to Upload</h2>
                <Toast ref={toast}></Toast>
                <div className="col-12">
                    <div className="card">
                        {/*<h5>Advanced</h5>*/}
                        {/*<FileUpload*/}
                        {/*    name="demo[]"*/}
                        {/*    url="/api/upload"*/}
                        {/*    onUpload={onUpload}*/}
                        {/*    multiple*/}
                        {/*    accept="image/*"*/}
                        {/*    maxFileSize={1000000}*/}
                        {/*/>*/}


                        <div className={"flex"} style={{justifyContent: "center"}}>
                            <FileUpload
                                mode="basic"
                                name="demo[]"
                                url="/api/upload"
                                accept="image/*"
                                maxFileSize={1000000}
                                onUpload={onUpload}
                            />
                        </div>

                    </div>
                </div>
            </div>

            <div className={"flex"} style={{justifyContent: "end", marginTop: "34px"}}>

                <Button rounded  label="Recommendations" onClick={() => setVisible(true)} raised severity="warning" className={"sticky "} style={{right: "30px", marginTop: "14px" , backgroundColor: "#ff8a38"}}/>
            </div>

            <div style={{width: "100%"}}>


            <h2 className={"font-bold "} style={{marginTop: "24px"}}>Previous Recommendations</h2>
            <Image
                src={picture}
                style={{width: "100%", borderRadius: "14px", margin: "1px", padding: "5"}}
                width={500}
                height={400}
                alt="Picture of the author"
            />
            <div className={"flex w-full"} style={{justifyContent: "space-between", fontSize: "22px"}}>
                <div className={" m-2  "} >
                    <span>Recommendation text</span>
                </div>
                <div className="flex" style={{ justifyContent: "space-around" , alignItems: "center", fontSize: "22px"}}>
                    <div className="item  " style={{marginLeft: "2%", marginRight: "2%" }}>
                        <p>4/12/2024</p>
                    </div>
                    <div className={"font-bold  p-2 text-yellow-400"}>Reuse</div>
                    <div className="item flex-grow-1  p-2  font-bold text-red-500 " style={{marginLeft: "2%"}}>Delete</div>
                </div>
            </div>
            </div>


            <Dialog header="Add Items" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <p className="m-0">
                     <span className="p-float-label w-full" style={{width : "80%"}}>
                    <label htmlFor="username">Title</label>
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
                    <label htmlFor="username">Category</label>
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
                    <label htmlFor="username">Price</label>
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
}

export default Page;
