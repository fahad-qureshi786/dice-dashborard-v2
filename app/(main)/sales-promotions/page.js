"use client"
import React, {useState} from 'react';
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";

const Page = () => {
    const [visible, setVisible] = useState(false);
    const products = [
        {
            name: "Fresh Apple",
            price: 20,
            image: "data:image/jpeg;base64,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",
            description: "Juicy and sweet"
        },
        {
            name: "Fresh Apple",
            price: 20,
            image: "data:image/jpeg;base64,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",
            description: "Juicy and sweet"
        }
    ];
    return (
        <div className={"px-16"} style={{width: "90%"}}>
            <div className={"flex flex-wrap"} style={{justifyContent: "space-around   " }}>
                <div>

                <h2 className={"font-semibold  text-center "} style={{color: "#ff8138"}}>Total Order</h2>
                <div
                    className="relative bg-[#ff8138] flex justify-center  shadow-md bg-clip-border rounded-xl " style={{width: "340px", borderRadius: "12px",  justifyContent: "center", alignItems: "center" ,height: "340px", background: "#ff8138"}}>

                        <div className="block mb-2  font-bold font-sans  text-white" style={{fontSize: "112px"}}>
                            50
                        </div>
                </div>
                </div>
                <div>

                    <h2 className={"font-semibold  text-center "} style={{color: "#ff8138"}}>Total Amount</h2>
                    <div
                        className="relative  flex justify-center  shadow-md bg-clip-border rounded-xl " style={{width: "340px", borderRadius: "12px",  fontSize: "72px" ,  justifyContent: "center", alignItems: "center" ,height: "340px", background: "#ff8138"}}>

                        <div className="block mb-2  font-bold font-sans   font-semibold leading-snug tracking-normal text-white" style={{fontSize: "112px"}}>
                            590$
                        </div>
                    </div>
                </div>

            </div>

            <div className={"flex mt-16 flex-wrap"} style={{justifyContent: "space-around", marginTop: "43px" }}>
                <div>

                    <h2 className={"font-bold  text-center "} >Promotion</h2>

                </div>
                <div>

                    <h2 onClick={() => setVisible(true)} className={"font-bold  text-center "} style={{color: "#ff8138"}}>Create Promotion</h2>
                </div>

            </div>

            <div className={"flex mt-16 flex-wrap"} style={{justifyContent: "space-around", marginTop: "43px", marginBottom: "43px" }}>
                <div className={"w-full"}>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 " >
                        {products.map((product) => (
                            <a
                                href="javascript:;"
                                className=" sm:mr-0  group cursor-pointer lg:mx-auto bg-gray-200  transition-all duration-500"
                                style={{borderRadius: "12px"}}
                            >
                                <div className="rounded">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className=""
                                        style={{borderRadius: "12px"}}
                                        width={400}
                                    />
                                </div>
                                <div className="mt-5">
                                    <div className="flex mx-2 items-center justify-between" style={{alignItems : "center", justifyContent: "space-between"}}>
                                        <h6 className="font-semibold text-xl leading-8" style={{color: "#000"}}>
                                            {product.name}
                                        </h6>
                                        <h6 className="font-semibold text-xl leading-8 text-orange-500">
                                            ${product.price}
                                        </h6>
                                    </div>
                                    <div className={"flex px-2 pb-4 justify-between"} style={{justifyContent: "space-between"}}>
                                        <div>
                                            <p className=" font-normal text-sm leading-6 text-gray-600">
                                                {product.description}
                                            </p>
                                        </div>
                                        <div className={"flex text-orange-500 justify-between "} style={{justifyContent: "space-between"}}>
                                            <div className={"mx-4"}>
                                                <i className="pi pi-pencil" style={{ color: '#ff8a38' }}></i>
                                            </div>
                                            <div> <i className="pi pi-trash" style={{ color: '#ff8a38' }}></i></div>
                                        </div>
                                    </div>

                                </div>
                            </a>
                        ))}
                    </div>

                </div>
                <div>

                    {/*<h2 className={"font-bold  text-center "} style={{color: "#ff8138"}}>Create Promotion</h2>*/}
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
};

export default Page;
