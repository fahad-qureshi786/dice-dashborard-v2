"use client"
import React, {useState} from 'react';
import {InputText} from "primereact/inputtext";
import {Editor} from "primereact/editor";
import {Button} from "primereact/button";

const Page = () => {

    const [text, setText] = useState('');
    return (
        <div>

                <h3>Title</h3>
                <InputText type="text" placeholder="Add Title " className={"w-full my-2 "} />
                <h4 className={"text-gray-600"}>Description</h4>
                <div className="">
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }}  className={"border border-2 border-gray-500 rounded-md"}/>
                </div>
                <Button  style={{ backgroundColor: '#FF8A38', border: "none", color: 'white',  margin:"2px", float: "right" }} primary>
                    Add Collection
                </Button>


        </div>
    );
};

export default Page;
