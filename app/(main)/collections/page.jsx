"use client"
import React, {useState} from "react";
import picture from "../../../public/myimages/image.jpg"
import Image from "next/image";
import {Button} from "primereact/button";
import {InputText} from "primereact/inputtext";
import { Dialog } from 'primereact/dialog';
const Collection = ()=>{
    const [visible, setVisible] = useState(false);

    return(
        <div>
        <div className={"flex bg-gray-200 shd justify-around mx-12 px-3 w-full"} style={{boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px", paddingTop: "12px"}}>
            <div className="w-full bor mx-4 max-w-xs overflow-hidden w-96  rounded-lg shadow-lg dark:bg-gray-800">
                <img className="object-cover bg-gray-200 w-full h-56"
                     src="https://media.istockphoto.com/id/1352937979/photo/vegetable-storage.jpg?s=612x612&w=0&k=20&c=j_C4IQaE2sLrrVHO1Zh47Rt5NSPu4Xt2JOXD4vW5qvE="
                     alt="avatar"
                    style={{borderRadius: "19px"}}
                />
            </div>
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
            <div className="w-full mx-4 max-w-xs overflow-hidden  rounded-lg shadow-lg dark:bg-gray-800">
                <Image
                    src={picture}
                    style={{width: "100%",borderRadius: "18px"}}
                    width={400}
                    height={400}
                    alt="Picture of the author"
                    className="object-cover bg-gray-200 w-full h-56"

                />
            </div>
        </div>
            <div className={"shadow bg-gray-200"} style={{padding: "25px", boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px"}}>
            <h3 className={"text-center text-5xl text-black  font-bold"} style={{paddingTop: "23px" , fontSize: "32px"}}>Individual Meal Boxes <span className={"text-yellow-500"}>To</span> Buffet-Style in Trays</h3>
                <div className={"block mx-auto w-96 text-center rounded-full"}>
                    {/*<span className={" bg-orange-400  rounded py-2  mx-3 text-3xl px-4 text-white pointer  "} style={{paddingTop: "12px" ,paddingBottom: "14px", borderRadius: "20%"}}> </span>*/}
                    <Button label="Search Office Catering" rounded severity="warning"  style={{paddingTop: "12px" ,paddingBottom: "14px", fontSize: "22px"}}/>
                </div>
            </div>

            <div className={"w-full flex"}>
                    <span className=" flex " style={{width : "100%", marginTop: "22px"}}>

                        <input
                            type="text"
                            className={".placeholder-red-600 autofocus"}
                            name="q"
                            style={{
                                width: "90%",
                                border: "1px solid #918e8e",
                                color: "#333", // updated text color to a darker gray
                                background: "#d9d9d9",
                                height: "40px",
                                padding: "10px",
                                borderRadius: "20px",
                                fontSize: "18px",

                            }}
                            placeholder="Search"

                        />

                        <span className={"text-orange-600 font-bold mt-3 .placeholder-gray-600::placeholder px-2"}>Add Collection</span>
                {/*<Button label="Submit" onClick={() => setVisible(true)} rounded severity="warning"  style={{marginLeft: "8px", fontSize: "18px"}}/>*/}
                    </span>
            </div>

            <div className={"flex flex-wrap "} style={{justifyContent: "space-between"}}>


            <div style={{ height: "220px", width: "560px", borderRadius: "12px", marginTop: "34px" }} className={"bg-gray-300"}>
                <Image
                    src={picture}
                    style={{ width: "100%", borderRadius: "18px", height: "170px" }}
                    alt="Picture of the author"
                />
                <div style={{ marginTop: "10px" ,display: "flex" , justifyContent: "space-between" }} className={"mx-4"}>
                    <div className={" font-bold text-xl  "}>Thai Food</div>
                    <div className={"text-orange-600 font-bold text-xl underline "} style={{padding: "4px"}}>
                        <a className={"text-orange-600 font-bold text-xl underline "}>Explore</a>
                    </div>
                </div>
            </div>

            <div style={{ height: "220px", width: "560px", borderRadius: "12px", marginTop: "34px" }} className={"bg-gray-300"}>
                <Image
                    src={picture}
                    style={{ width: "100%", borderRadius: "18px", height: "170px" }}
                    alt="Picture of the author"
                />
                <div style={{ marginTop: "10px" ,display: "flex" , justifyContent: "space-between" }} className={"mx-4"}>
                    <div className={" font-bold text-xl  "}>Thai Food</div>
                    <div className={"text-orange-600 font-bold text-xl underline "} style={{padding: "4px"}}>
                        <a className={"text-orange-600 font-bold text-xl underline "}>Explore</a>
                    </div>
                </div>
            </div>

                <div style={{ height: "220px", width: "560px", borderRadius: "12px", marginTop: "34px" }} className={"bg-gray-300"}>
                    <Image
                        src={picture}
                        style={{ width: "100%", borderRadius: "18px", height: "170px" }}
                        alt="Picture of the author"
                    />
                    <div style={{ marginTop: "10px" ,display: "flex" , justifyContent: "space-between" }} className={"mx-4"}>
                        <div className={" font-bold text-xl  "}>Thai Food</div>
                        <div className={"text-orange-600 font-bold text-xl underline "} style={{padding: "4px"}}>
                            <a className={"text-orange-600 font-bold text-xl underline "}>Explore</a>
                        </div>
                    </div>
                </div>

                <div style={{ height: "220px", width: "560px", borderRadius: "12px", marginTop: "34px" }} className={"bg-gray-300"}>
                    <Image
                        src={picture}
                        style={{ width: "100%", borderRadius: "18px", height: "170px" }}
                        alt="Picture of the author"
                    />
                    <div style={{ marginTop: "10px" ,display: "flex" , justifyContent: "space-between" }} className={"mx-4"}>
                        <div className={" font-bold text-xl  "}>Thai Food</div>
                        <div className={"text-orange-600 font-bold text-xl underline "} style={{padding: "4px"}}>
                            <a className={"text-orange-600 font-bold text-xl underline "}>Explore</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    )
}
export  default Collection;
