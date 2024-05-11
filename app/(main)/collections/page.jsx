"use client"
import React, { useEffect, useState } from 'react';
import Link from "next/link";
import {  Button } from 'primereact/button';
import  pic from "../../../public/myimages/image.jpg";
import Image from 'next/image';

const App = () => {
    const [initLoading, setInitLoading] = useState(true);
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState([]);
    const [list, setList] = useState([]);
    const [visible, setVisible] = useState(false);
    const [text, setText] = useState('');
    const count = 3;
    const fakeDataUrl = `https://randomuser.me/api/?results=${count}&inc=name,gender,email,nat,picture&noinfo`;

    useEffect(() => {
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                setInitLoading(false);
                setData(res.results);
                setList(res.results);
            });
    }, []);

    const onLoadMore = () => {
        setLoading(true);
        setList(
            data.concat(
                [...new Array(count)].map(() => ({
                    loading: true,
                    name: {},
                    picture: {},
                }))
            )
        );
        fetch(fakeDataUrl)
            .then((res) => res.json())
            .then((res) => {
                const newData = data.concat(res.results);
                setData(newData);
                setList(newData);
                setLoading(false);
                window.dispatchEvent(new Event('resize'));
            });
    };

    const loadMore = !initLoading && !loading ? (
        <div style={{ textAlign: 'center', marginTop: 12, height: 32, lineHeight: '32px' }}>
            <Button onClick={onLoadMore}>Load more</Button>
        </div>
    ) : null;

    return (
        <div>
            <div className={"flex justify-content-between m-4"}>
                <h3 className={"my-2 font-bold text-4xl"}>Collection</h3>
                <Link href={"/addtocollection"}>
                    <Button onClick={() => setVisible(true)} style={{ backgroundColor: '#FF8A38', border: "none", color: 'white',  margin:"2px" }} primary>
                        Add Collection
                    </Button>

                </Link>
            </div>


            <div className="flex flex-col justify-center h-full">
                {/* Table */}
                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                    <header className="px-5 py-4 border-b border-gray-100">
                        <h2 className="font-semibold text-gray-800"></h2>
                    </header>
                    <div className="p-3">
                        <div className="overflow-x-auto">
                            <table className="table-auto w-full">
                                <thead
                                    className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">
                                            {/* Add a label for the checkboxes */}
                                            <input type="checkbox" id="select-all"/>
                                        </div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Image</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Title</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Products</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-center">Product Condiation</div>
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="text-sm divide-y divide-gray-100">
                                {/* Each row should start with a checkbox cell */}
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                      <Image src={pic} alt={"image"} width={35} height={30}/>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">Piza</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-center font-medium text-green-500">
                                            3
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Conditions</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <Image src={pic} alt={"image"} width={35} height={30}/>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">Piza</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-center font-medium text-green-500">
                                            3
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Conditions</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td className="p-2 whitespace-nowrap">
                                        <input type="checkbox"/>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <Image src={pic} alt={"image"} width={35} height={30}/>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-left">Piza</div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-center font-medium text-green-500">
                                            3
                                        </div>
                                    </td>
                                    <td className="p-2 whitespace-nowrap">
                                        <div className="text-lg text-center">Conditions</div>
                                    </td>
                                </tr>

                                </tbody>
                            </table>
                        </div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default App;
