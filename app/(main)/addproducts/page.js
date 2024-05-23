"use client";
import React, { useState, useRef } from 'react';
import { InputText } from 'primereact/inputtext';
import { Editor } from 'primereact/editor';
import { Button } from 'primereact/button';
import Image from 'next/image';
import pic from '/public/myimages/image.jpg';
import { Toast } from 'primereact/toast';
import { FileUpload } from 'primereact/fileupload';
import 'primereact/resources/primereact.min.css'; // Prime React CSS
import 'primereact/resources/themes/saga-blue/theme.css'; // Prime React theme CSS

import { ConfirmDialog } from 'primereact/confirmdialog'; // To use <ConfirmDialog> tag
import { Dropdown } from 'primereact/dropdown';
const Page = () => {
    const toast = useRef(null);
    const [text, setText] = useState('');
    const [visible, setVisible] = useState(false);
    const [selectedCities, setSelectedCities] = useState(null);
    const cities = [
        { name: 'Active' },
        { name: 'inactive' },

    ];

    const vendor = [
        { name: 'Vendor 1' },
        { name: 'Vendor 2' },

    ];

    const collection =[
        {name: "Collection 1"},
        {name: "Collection 2"}
    ]

    const [selectedCity, setSelectedCity] = useState(null);
    const [selectedVendor, setSelectedVendor] = useState(null);
    const [selectedCollection, setSelectedCollection] = useState(null)
    const [visiblebox, setVisiblebox] = useState(false);

    const onUpload = () => {
        toast.current.show({ severity: 'info', summary: 'Success', detail: 'File Uploaded' });
    };

    const accept = () => {
        toast.current.show({ severity: 'info', summary: 'Confirmed', detail: 'You have accepted' });
    };

    const reject = () => {
        toast.current.show({ severity: 'warn', summary: 'Rejected', detail: 'You have rejected' });
    };
    const showSuccess = () => {
        toast.current.show({severity:'success', summary: 'Product', detail:'Added Successfull', life: 3000});
    }
    const [selectedOptions, setSelectedOptions] = useState([]);

    // // Function to handle checkbox change
    // const handleCheckboxChange = (value) => {
    //     // Toggle the selected value in the state
    //     setSelectedOptions((prevOptions) => {
    //         // Check if the value is already selected
    //         if (prevOptions.includes(value)) {
    //             // Remove the value from the state
    //             return prevOptions.filter((option) => option !== value);
    //         } else {
    //             // Add the value to the state
    //             return [...prevOptions, value];
    //         }
    //     });
    // };


    return (
        <>
            <ConfirmDialog visible={visiblebox} onHide={() => setVisiblebox(false)} message="Are you sure you want to proceed?"
                           header="Confirmation" icon="pi pi-exclamation-triangle" accept={accept} reject={reject} />



            <div className={"flex w-full justify-content-around  "}>
            <div className={"p-2 w-full"}>
                <h3>Title</h3>
                <InputText type="text" placeholder="Add Title " className={"w-full my-2 "} />
                <h4 className={"text-gray-600"}>Description</h4>
                <div className="">
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }}  className={"border border-2 border-gray-500 rounded-md"}/>
                </div>
                {/*<Button onClick={() => setVisible(true)} style={{ backgroundColor: 'black', color: 'white', float: "right", margin: "6px" }} primary>*/}
                {/*    Add Collection*/}
                {/*</Button>*/}


            </div>
            <div className={"w-3/4"}>
                <div className={"card"}>
                <h5 className={"text-gray-500"}>Status</h5>
                    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                  placeholder="Active" className="w-full md:w-14rem" />

                </div>
                {/*<div className={"card  "}>*/}
                {/*    <h5 className={"text-gray-500"}>Publishing</h5>*/}
                {/*    <p>Sales & channels</p>*/}
                {/*    <div className=" my-3 ml-3 gap-3">*/}
                {/*        /!* Checkbox for Online Store *!/*/}
                {/*        <div className="flex my-3 items-center">*/}
                {/*            <Checkbox*/}
                {/*                inputId="onlineStore"*/}
                {/*                value="Online Store"*/}
                {/*                onChange={(e) => handleCheckboxChange(e.value)}*/}
                {/*                checked={selectedOptions.includes('Online Store')}*/}
                {/*            />*/}
                {/*            <label htmlFor="onlineStore" className="ml-2">Online Store</label>*/}
                {/*        </div>*/}
                {/*        /!* Checkbox for Point of Sale *!/*/}
                {/*        <div className="flex my-3  items-center">*/}
                {/*            <Checkbox*/}
                {/*                inputId="pointOfSale"*/}
                {/*                value="Point of Sale"*/}
                {/*                onChange={(e) => handleCheckboxChange(e.value)}*/}
                {/*                checked={selectedOptions.includes('Point of Sale')}*/}
                {/*            />*/}
                {/*            <label htmlFor="pointOfSale" className="ml-2">Point of Sale</label>*/}
                {/*        </div>*/}
                {/*        /!* Checkbox for Facebook & Instagram *!/*/}
                {/*        <div className="flex my-3  items-center">*/}
                {/*            <Checkbox*/}
                {/*                inputId="facebookInstagram"*/}
                {/*                value="Facebook & Instagram"*/}
                {/*                onChange={(e) => handleCheckboxChange(e.value)}*/}
                {/*                checked={selectedOptions.includes('Facebook & Instagram')}*/}
                {/*            />*/}
                {/*            <label htmlFor="facebookInstagram" className="ml-2">Facebook & Instagram</label>*/}
                {/*        </div>*/}
                {/*    </div>*/}

                {/*</div>*/}
            {/*    <div className={"card"}>*/}
            {/*    <h5 className={"text-gray-500"}>Insights</h5>*/}
            {/*    <p>Insights will display when products has recent sales</p>*/}
            {/*</div>*/}

                <div className={"card my-3"}>
                    <h5 className={"text-gray-500"}>Products organizations</h5>

                    {/*<div className="flex flex-column w-full my-2">*/}
                    {/*    <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"*/}
                    {/*              placeholder="Category" className="w-full md:w-14rem" />*/}

                    {/*</div>*/}

                    <div className="flex flex-column gap-2">
                        <label htmlFor="username">Product type</label>
                        <InputText id="username" aria-describedby="username-help" />

                    </div>

                    <div className="flex flex-column my-2 gap-2">
                        <label htmlFor="username">Vendor</label>
                        <Dropdown value={selectedVendor} onChange={(e) => setSelectedVendor(e.value)} options={vendor} optionLabel="name"
                                  placeholder="Vendor" className="w-full" />

                    </div>

                    <div className="flex flex-column gap-2">
                        <label htmlFor="username">collection</label>
                        <Dropdown value={selectedCollection} onChange={(e) => setSelectedCollection(e.value)} options={collection} optionLabel="name"
                                  placeholder="Collection" className="w-full" />

                    </div>

                    <div className="flex flex-column gap-2 my-2">
                        <label htmlFor="username">Tags</label>
                        <InputText id="username" aria-describedby="username-help" />
                    </div>
                </div>
            </div>
        </div>
            <div >
                <div className={"card my-8 w-full "}>
                    <h4 className={"text-gray-600 my-3"}>Media</h4>
                    <div className={" flex  justify-content-evenly "}>
                        <div>
                            <Image src={pic} height={200} width={300} />
                        </div>
                        <div>
                            <div className="card flex bg-gray-100 align-items-center justify-content-center">
                                <Toast ref={toast}></Toast>
                                <FileUpload mode="basic" name="demo[]" url="/api/upload" multiple  accept="image/*" maxFileSize={1000000} onUpload={onUpload} />
                            </div>
                            {/*<div className={"card flex justify-content-center bg-gray-100"}>*/}
                            {/*    <h5 className={"p-0 m-0"}>Select existing</h5>*/}
                            {/*</div>*/}

                        </div>
                    </div>


                </div>
            </div>

            <div className={"flex justify-content-end align-items-end"}>
               <div>
                   <Button onClick={() => setVisible(true)} className={"m-2"} style={{ backgroundColor: 'white', color: 'black' }} primary>
                       Archive
                   </Button>
                   <Button onClick={() => setVisiblebox(true)} className={"m-2"} style={{ backgroundColor: 'red', color: 'white' }} >
                       Delete
                   </Button>
                   <Button onClick={showSuccess} className={"m-2"} style={{ backgroundColor: 'gray', color: 'white' }} >
                       Save
                   </Button>
               </div>
            </div>
        </>
    );
};

export default Page;
