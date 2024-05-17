"use client"
import React, {useRef} from 'react';
import {InputTextarea} from "primereact/inputtextarea";
import {Toast} from "primereact/toast";
import {FileUpload} from "primereact/fileupload";
import {Button} from "primereact/button";


const Page = () => {

    const toast = useRef(null);

    const onUpload = () => {
        toast.current?.show({
            severity: 'info',
            summary: 'Success',
            detail: 'File Uploaded',
            life: 3000
        });
    };

    return (
        <div>
            <h2  style={{marginTop: "38px", marginBottom:"32px"}}>Please give Us Feedback</h2>
            <div>
                <div className={"flex flex-wrap "} style={{justifyContent: "space-between", marginTop: "12px" , marginBottom: "12px"}}>
                    <div style={{width: "49%"}}>
                        <input
                            type="text"
                            optionLabel="name"
                            style={{
                                width: "100%",
                                border: "0px solid #918e8e",
                                color: "#333", // updated text color to a darker gray
                                background: "#d9d9d9",
                                height: "70px",
                                padding: "13px",
                                borderRadius: "5px",
                                fontSize: "18px",


                            }}

                            placeholder="Your Name"

                        />

                    </div>
                    <div style={{width: "49%"}}>
                        <input
                            type="text"
                            optionLabel="name"
                            style={{
                                width: "100%",

                                border: "0px solid #918e8e",
                                color: "#333", // updated text color to a darker gray
                                background: "#d9d9d9",
                                height: "70px",
                                padding: "19px",
                                borderRadius: "5px",
                                fontSize: "18px",


                            }}

                            placeholder="City"

                        />

                    </div>


                </div>
            </div>
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

                placeholder="Phone Number"

            />

            <div style={{ padding: "5px", marginTop: "32px" }}>
                {/*<h2 className={"font-bold "}>Create recommendation for Customer Portal </h2>*/}
                <InputTextarea
                    placeholder="Additional information"
                    style={{ width: "100%", height: "25%", background: "#d9d9d9", fontSize: "18px" }}
                    rows={8}
                    cols={30}
                />

                <div className="grid">
                    {/*<h2 className={"font-bold "} style={{marginTop : "32px"}}>Choose Image to Upload</h2>*/}
                    <Toast ref={toast}></Toast>
                    <div className="col-12" style={{marginTop: "42px"}}>
                        <div className="card" style={{ background: "#d9d9d9"}}>

                            <div className={"flex"} style={{justifyContent: "center", background: "#d9d9d9"}}>
                                <FileUpload
                                    mode="basic"
                                    name="demo[]"
                                    url="/api/upload"
                                    accept="image/*"
                                    maxFileSize={1000000}
                                    onUpload={onUpload}
                                    style={{background: "#ff8138"}}
                                />
                            </div>
                        <h3 className={"text-center"}>Upload anything (optional)</h3>
                        </div>
                    </div>
                </div>

                <div className={"flex"} style={{justifyContent: "end", marginTop: "34px"}}>

                    <Button rounded  label="Submit" onClick={() => setVisible(true)} raised severity="warning" className={"sticky "} style={{right: "30px", marginTop: "14px" , backgroundColor: "#ff8a38"}}/>
                </div>

                {/*<div style={{width: "100%"}}>*/}


                {/*    <h2 className={"font-bold "} style={{marginTop: "24px"}}>Previous Recommendations</h2>*/}
                {/*    <Image*/}
                {/*        src={picture}*/}
                {/*        style={{width: "100%", borderRadius: "14px", margin: "1px"}}*/}
                {/*        width={500}*/}
                {/*        height={400}*/}
                {/*        alt="Picture of the author"*/}
                {/*    />*/}
                {/*    <div className={"flex w-full"} style={{justifyContent: "space-between", fontSize: "22px"}}>*/}
                {/*        <div className={"   "} >*/}
                {/*            <span>Recommendation text</span>*/}
                {/*        </div>*/}
                {/*        <div className="flex" style={{ justifyContent: "space-around" , alignItems: "center", fontSize: "22px"}}>*/}
                {/*            <div className="item  " style={{marginLeft: "2%", marginRight: "2%" }}>*/}
                {/*                <p>4/12/2024</p>*/}
                {/*            </div>*/}
                {/*            <div className={"font-bold  p-2 text-yellow-400"}>Reuse</div>*/}
                {/*            <div className="item flex-grow-1  p-2  font-bold text-red-500 " style={{marginLeft: "2%"}}>Delete</div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
            </div>
        </div>
    );
};

export default Page;
