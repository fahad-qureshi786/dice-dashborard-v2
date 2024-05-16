"use client"
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { Rating } from 'primereact/rating';
import { Tag } from 'primereact/tag';
import { classNames } from 'primereact/utils';

const Page = () => {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});
    const [products, setProducts] = useState([]);

    // for chats
    useEffect(() => {
        const data = {
            labels: ['Q1', 'Q2', 'Q3', 'Q4'],
            datasets: [
                {
                    label: 'Sales',
                    data: [540, 325, 702, 620],
                    backgroundColor: [
                        'rgba(255, 159, 64, 0.2)',
                        'rgba(75, 192, 192, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(153, 102, 255, 0.2)'
                    ],
                    borderColor: [
                        'rgb(255, 159, 64)',
                        'rgb(75, 192, 192)',
                        'rgb(54, 162, 235)',
                        'rgb(153, 102, 255)'
                    ],
                    borderWidth: 1
                }
            ]
        };
        const options = {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        };

        setChartData(data);
        setChartOptions(options);

        const productData = [
            {
                id: '1000',
                name: 'Pizza',
                category: 'Food',
                image: 'data:image/jpeg;base64,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',
                price: 12,
                rating: 5,
                inventoryStatus: 'INSTOCK'
            },
            {
                id: '1001',
                name: 'Burger',
                category: 'Food',
                image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDJ8fGJ1cmdlcnxlbnwwfHx8fDE2ODY3MzY5ODQ&ixlib=rb-1.2.1&q=80&w=400',
                price: 8,
                rating: 4,
                inventoryStatus: 'LOWSTOCK'
            }
        ];

        setProducts(productData);
    }, []);

    const getSeverity = (product) => {
        switch (product.inventoryStatus) {
            case 'INSTOCK':
                return 'success';
            case 'LOWSTOCK':
                return 'warning';
            case 'OUTOFSTOCK':
                return 'danger';
            default:
                return null;
        }
    };

    const itemTemplate = (product, index) => {
        return (
            <div className="col-12" key={product.id}>
                <div className={classNames('flex flex-column xl:flex-row xl:align-items-start p-4 gap-4', { 'border-top-1 surface-border': index !== 0 })}>
                    <img className="w-9 sm:w-16rem xl:w-10rem shadow-2 block xl:block mx-auto border-round" src={product.image} alt={product.name} />
                    <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
                        <div className="flex flex-column align-items-center sm:align-items-start gap-3">
                            <div className="text-2xl font-bold text-900">{product.name}</div>
                            <Rating value={product.rating} readOnly starColor="orange" cancel={false}></Rating>
                            <div className="flex align-items-center gap-3">
                                <span className="flex align-items-center gap-2">
                                    <i className="pi pi-tag"></i>
                                    <span className="font-semibold">{product.category}</span>
                                </span>
                                <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag>
                            </div>
                        </div>
                        <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
                            <span className="text-2xl font-semibold">${product.price}</span>
                            <Button icon="pi pi-shopping-cart" className="p-button-rounded" disabled={product.inventoryStatus === 'OUTOFSTOCK'}></Button>
                        </div>
                    </div>
                </div>
            </div>
        );
    };

    return (
        <div className={"px-4"}>
            <h3 className={"text-3xl text-gray-800"}>Reports</h3>
            <div>
                <h4 className={"my-6 "}>Sales Summary</h4>
                <div className={"card"}>
                    <Chart type="bar" style={{ width: "80%" }} data={chartData} options={chartOptions} />
                </div>
            </div>

            <div>
                <h4 className={"my-6"}>Top Selling Products</h4>
                <div className={"card"}>
                    <DataView value={products} itemTemplate={itemTemplate} />
                </div>
            </div>

            <h4 className={"my-6 "}>Customer Activity Report</h4>
            <div className={"grid"}>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">New Customer</span>
                                <div className="text-900 font-medium text-xl">566+</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-blue-100 border-round"
                                 style={{width: '2.5rem', height: '2.5rem'}}>
                                <i className="pi pi-user text-blue-500 text-xl"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Customer Retention Rate</span>
                                <div className="text-900 font-medium text-xl">65%</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-orange-100 border-round"
                                 style={{width: '2.5rem', height: '2.5rem'}}>
                                <i className="pi pi-refresh text-orange-500 text-xl"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Frequency of Purchases</span>
                                <div className="text-900 font-medium text-xl">55%</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-cyan-100 border-round"
                                 style={{width: '2.5rem', height: '2.5rem'}}>
                                <i className="pi pi-repeat text-cyan-500 text-xl"/>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-12 lg:col-6 xl:col-3">
                    <div className="card mb-0">
                        <div className="flex justify-content-between mb-3">
                            <div>
                                <span className="block text-500 font-medium mb-3">Average Spend per Customer</span>
                                <div className="text-900 font-medium text-xl">10%</div>
                            </div>
                            <div className="flex align-items-center justify-content-center bg-purple-100 border-round"
                                 style={{width: '2.5rem', height: '2.5rem'}}>
                                <i className="pi pi-dollar text-purple-500 text-xl"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );


};

export default Page;
