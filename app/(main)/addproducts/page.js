"use client";
import React, { useState, useRef } from 'react';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Button } from 'antd';
import Image from 'next/image';
import pic from '/public/myimages/image.jpg';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import 'primereact/resources/primereact.min.css'; // Prime React CSS
import 'primereact/resources/themes/saga-blue/theme.css'; // Prime React theme CSS
 import { MultiSelect } from 'primereact/multiselect';
const Page = () => {
    const toast = useRef(null);
    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'Active', code: 'NY' },
        { name: 'inactive', code: 'RM' },

    ];
    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };


    return (
        <div className={"flex w-full justify-content-around  "}>

            <div className={"p-2 w-3/4"}>
                <h3>Title</h3>
                <InputText type="text" placeholder="Add Title " className={"w-full my-2 "} />
                <h4 className={"text-gray-600"}>Description</h4>
                <div className="">
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }}  className={"border border-2 border-gray-500 rounded-md"}/>
                </div>
                {/*<Button onClick={() => setVisible(true)} style={{ backgroundColor: 'black', color: 'white', float: "right", margin: "6px" }} primary>*/}
                {/*    Add Collection*/}
                {/*</Button>*/}

                <div >

                    <div className={"card my-8 "}>
                        <h4 className={"text-gray-600 my-3"}>Media</h4>
                        <div className={" flex  justify-content-between "}>
                            <div>
                                <Image src={pic} height={400} width={250} />
                            </div>
                            <div>
                                <div className="card flex bg-gray-100 justify-content-center">
                                    <Toast ref={toast}></Toast>
                                    <FileUpload mode="basic" name="demo[]" url="/api/upload" accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
                                </div>
                                <div className={"card flex justify-content-center bg-gray-100"}>
                                    <h5 className={"p-0 m-0"}>Select existing</h5>
                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </div>
            <div className={"w-1/4"}>
                <div className={"card"}>
                <h5 className={"text-gray-500"}>Status</h5>
                    <MultiSelect value={selectedCities} onChange={(e) => setSelectedCities(e.value)} options={cities} optionLabel="name"
                    placeholder="Select Cities" maxSelectedLabels={3} className="w-full md:w-20rem" />
                </div>
            </div>
        </div>
    );
};

export default Page;
