"use client"

import React, { useEffect, useState } from 'react';
import Link from "next/link";
import { Button } from 'primereact/button';
import { Paginator } from 'primereact/paginator';
import { SplitButton } from 'primereact/splitbutton';
import pic from "../../../public/myimages/image.jpg";
import {Dialog} from  "primereact/dialog";
import  {InputText} from "primereact/inputtext";
import { InputTextarea } from "primereact/inputtextarea";
const App = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const [first, setFirst] = useState(0);
    const [rows, setRows] = useState(3);
    const [edit, setEdit] = useState(false);
    const fakeDataUrl = `https://randomuser.me/api/?results=12&inc=name,gender,email,nat,picture&noinfo`;

    const items = [
        { label: 'Active' },
        { label: 'Draft' }
    ];

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);

    const onPageChange = (event) => {
        setFirst(event.first);
        setRows(event.rows);
    };

    return (
        <div>
            <div className="flex justify-content-between m-4">
                <h3 className="my-2 font-bold text-4xl">Collection</h3>
                <div>
                    <Link href="/addtocollection">
                        <Button
                            onClick={() => setVisible(true)}
                            className="mx-4"
                            style={{ backgroundColor: '#FF8A38', border: "none", color: 'white' }}
                            primary
                        >
                            Add Collection
                        </Button>
                    </Link>
                    {/*<SplitButton label="More action" model={items} severity="secondary"></SplitButton>*/}
                </div>
            </div>

            <div className="flex flex-col justify-center h-full">
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800"></h2>
                    </header>
                    <div>
                        <table className="table-auto w-full">
                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">
                                        <input type="checkbox" id="select-all" />
                                    </div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Collection Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Number of Products</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Products Conditions</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Products Edit</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Products Delete</div>
                                </th>
                            </tr>
                            </thead>
                            <tbody className="text-sm divide-y divide-gray-100">
                            {list.slice(first, first + rows).map((item, index) => (
                                <tr key={index}>
                                    <td className="p-2 whitespace-nowrap">
                                        <input type="checkbox" />
                                    </td>
                                    <td className="flex d-flex justify-between align-items-center">
                                        <img style={{ borderRadius: '10px', marginRight: '2rem' }} height={40} width={40} src={pic.src} alt="" />
                                        <h5 className="ms-2">{item.name.first}</h5>
                                    </td>
                                    <td className="text-start font-medium text-green-500">
                                        <h4 style={{ marginLeft: '2rem' }}>3</h4>
                                    </td>
                                    <td className="p-2 text-sm text-start whitespace-nowrap">
                                        Products Condition
                                    </td>
                                    <td className="p-2 text-sm text-start whitespace-nowrap">
                                        <span className={"pointer"} style={{cursor: "pointer"}} onClick={() => setEdit(true)}>
                                            Edit
                                        </span>
                                    </td>
                                    <td className="p-2 text-sm text-start whitespace-nowrap">
                                        <span className={"text-red-300"}>
                                            Delete
                                        </span>

                                    </td>
                                </tr>
                            ))}
                            </tbody>
                        </table>
                    </div>
                    <Paginator first={first} rows={rows} totalRecords={list.length} rowsPerPageOptions={[3, 5, 10]} onPageChange={onPageChange} />
                </div>
            </div>

            <Dialog header="Edit" visible={edit} style={{ width: '50vw' }} onHide={() => setEdit(false)}>

                <div className=" p-4">
                    <h4>Title</h4>
                    <InputText  placeholder={"Add Title"} className={"w-full"} />

                    <h4>Description</h4>
                <div className="">
                <InputTextarea  rows={5} cols={30} className={"w-full"} />
                </div>
                </div>


            </Dialog>
        </div>
    );
};

export default App;
