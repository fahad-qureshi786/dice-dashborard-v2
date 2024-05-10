"use client"
import React, {useState} from 'react';
import {Dialog} from "primereact/dialog";
import {InputText} from "primereact/inputtext";
import {Editor} from "primereact/editor";
import {Button} from "antd";

const Page = () => {

    const [text, setText] = useState('');
    return (
        <div>

                <h3>Title</h3>
                <InputText type="text" placeholder="Add Title " className={"w-full my-2 "} />
                <h4 className={"text-gray-600"}>Descripation</h4>
                <div className="">
                    <Editor value={text} onTextChange={(e) => setText(e.htmlValue)} style={{ height: '320px' }}  className={"border border-2 border-gray-500 rounded-md"}/>
                </div>
                <Button onClick={() => setVisible(true)} style={{ backgroundColor: 'black', color: 'white', float: "right", margin: "6px" }} primary>
                    Add Collection
                </Button>


        </div>
    );
};

export default Page;
