'use client';
import React, {useEffect, useRef, useState} from 'react';
import { Calendar } from 'primereact/calendar';
import { useSessionStorage } from 'primereact/hooks';
import {Button} from "primereact/button";
import {Menu} from "primereact/menu";



const Dashboard = () => {
    const menu2 = useRef<Menu>(null);    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});

    useEffect(() => {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    tension: 0.4
                },
                {
                    label: 'Second Dataset',
                    data: [28, 48, 40, 19, 86, 27, 90],
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--pink-500'),
                    tension: 0.4
                }
            ]
        };
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.6,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };

        setChartData(data);
        setChartOptions(options);
    }, []);


    // State and hooks
    const [date, setDate] = useState(null);
    const [events, setEvents] = useState([]);
    const [storedPassword, setStoredPassword] = useSessionStorage('password', '');

    // Function to handle date change in the Calendar
    const handleDateChange = (e) => {
        setDate(e.target.value);
    };

    // Function to handle event addition when a date is clicked in the Calendar
    const handleEventAddition = (e) => {
        const title = prompt('Enter event title:');
        if (title) {
            const newEvent = {
                title,
                date: e.value,
            };
            setEvents((prevEvents) => [...prevEvents, newEvent]);
        }
    };

    // JSX for the Dashboard component
    return (
        <>
            <div className="flex flex-wrap justify-content-evenly items-start space-y-4 sm:space-y-0 sm:space-x-4 p-4">
                {/* First box */}

                <div className={"box text-center"}>
                    <p className="font-bold text-5xl">19200</p>
                    <span className="block text-xl mt-2 px-6">Total Sales</span>
                </div>
                {/* Second box */}
                <div className={"box text-center"}>
                    <p className="font-bold text-5xl">19200</p>
                    <span className="block text-xl mt-2 px-6">Total Sales</span>
                </div>

            </div>
            <h2 className="text-4xl lg:ml-20 p-2 font-bold text-gray-600">Upcoming Orders</h2>
            <div className="flex w-full  items-start space-x-4 p-4">

                {/* Calendar on the left */}
                <div className=" h-[400px] p-6 bg-gray-50 border-2 border-orange-500 rounded shadow-md" style={{width: "65%"}}>
                    <Calendar value={date} onChange={handleDateChange} inline showWeek onSelect={handleEventAddition} />
                </div>

                {/* Box to display events on the right */}
                <div className=" h-[400px] p-4 mx-4 bg-gray-50 border-2 border-orange-500 rounded " style={{width: "35%"}}>
                    <h3 className="text-xl font-bold mb-4">Events</h3>
                    {/* Render the list of events */}
                    <div className="  overflow-y-auto max-h-[300px]">
                        {events.length > 0 ? (
                            <ul>
                                {events.map((event, index) => (
                                    <li key={index} className="px-2">
                                        <p className="font-semibold ">{event.title}</p>
                                        <p className="text-sm text-gray-500">{event.date && event.date.toLocaleDateString()}</p>
                                    </li>
                                ))}
                            </ul>
                        ) : (
                            <p>No events to display</p>
                        )}
                    </div>
                </div>
            </div>
            <div>
                <h2 className={"text-5xl my-6 "}>New Feedbacks</h2>
                <>
                    {/* component */}
                    <section className="antialiased bg-gray-100 text-gray-600  px-4">
                        <div className="flex flex-col justify-center h-full">
                            {/* Table */}
                            <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">

                                <div className="p-3">
                                    <div className="overflow-x-auto">
                                        <table className="table-auto w-full">
                                            <thead className="text-xs font-semibold uppercase text-gray-400 bg-gray-50">
                                            <tr>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-left">Name</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-left">Email</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-left">Spent</div>
                                                </th>
                                                <th className="p-2 whitespace-nowrap">
                                                    <div className="font-semibold text-center">Country</div>
                                                </th>
                                            </tr>
                                            </thead>
                                            <tbody className="text-sm divide-y divide-gray-100">
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                            <img
                                                                className="rounded-full"
                                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-05.jpg"
                                                                width={40}
                                                                height={40}
                                                                alt="Alex Shatov"
                                                            />
                                                        </div>
                                                        <div className="font-medium text-gray-800">
                                                            Alex Shatov
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">alexshatov@gmail.com</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">
                                                        $2,890.66
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">🇺🇸</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                            <img
                                                                className="rounded-full"
                                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-06.jpg"
                                                                width={40}
                                                                height={40}
                                                                alt="Philip Harbach"
                                                            />
                                                        </div>
                                                        <div className="font-medium text-gray-800">
                                                            Philip Harbach
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">philip.h@gmail.com</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">
                                                        $2,767.04
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">🇩🇪</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                            <img
                                                                className="rounded-full"
                                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-07.jpg"
                                                                width={40}
                                                                height={40}
                                                                alt="Mirko Fisuk"
                                                            />
                                                        </div>
                                                        <div className="font-medium text-gray-800">
                                                            Mirko Fisuk
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">mirkofisuk@gmail.com</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">
                                                        $2,996.00
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">🇫🇷</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                            <img
                                                                className="rounded-full"
                                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-08.jpg"
                                                                width={40}
                                                                height={40}
                                                                alt="Olga Semklo"
                                                            />
                                                        </div>
                                                        <div className="font-medium text-gray-800">
                                                            Olga Semklo
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">olga.s@cool.design</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">
                                                        $1,220.66
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">🇮🇹</div>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="flex items-center">
                                                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                            <img
                                                                className="rounded-full"
                                                                src="https://raw.githubusercontent.com/cruip/vuejs-admin-dashboard-template/main/src/images/user-36-09.jpg"
                                                                width={40}
                                                                height={40}
                                                                alt="Burak Long"
                                                            />
                                                        </div>
                                                        <div className="font-medium text-gray-800">
                                                            Burak Long
                                                        </div>
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left">longburak@gmail.com</div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-left font-medium text-green-500">
                                                        $1,890.66
                                                    </div>
                                                </td>
                                                <td className="p-2 whitespace-nowrap">
                                                    <div className="text-lg text-center">🇬🇧</div>
                                                </td>
                                            </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </>

                <p>This even clanedar </p>



            </div>
            <div className={"flex my-8 justify-content-evenly w-full"} style={{alignItems: "center"}}>

                <div className={"w-[60%] bg-white mx-4  card"} style={{width: "75%"}}>

                        <section className="antialiased bg-gray-100 text-gray-600 ">
                            <div className="flex flex-col justify-center ">
                                <div className="w-full max-w-2xl mx-auto bg-white shadow-lg rounded-sm border border-gray-200">
                                    <header className="px-5 py-4 border-b border-gray-100">
                                        <h2 className="font-semibold text-gray-800">Reminders</h2>
                                    </header>
                                    <div className="p-2">
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
                                                        <div className="font-semibold text-left">Email</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-left">Price</div>
                                                    </th>
                                                    <th className="p-2 whitespace-nowrap">
                                                        <div className="font-semibold text-center">Country</div>
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
                                                        <div className="text-left">alexshatov@gmail.com</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-green-500">
                                                            $2,890.66
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-lg text-center">🇺🇸</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <input type="checkbox"/>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">philip.h@gmail.com</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-green-500">
                                                            $2,767.04
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-lg text-center">🇩🇪</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <input type="checkbox"/>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">mirkofisuk@gmail.com</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-green-500">
                                                            $2,996.00
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-lg text-center">🇫🇷</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <input type="checkbox"/>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">olga.s@cool.design</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-green-500">
                                                            $1,220.66
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-lg text-center">🇮🇹</div>
                                                    </td>
                                                </tr>
                                                <tr>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <input type="checkbox"/>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left">longburak@gmail.com</div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-left font-medium text-green-500">
                                                            $1,890.66
                                                        </div>
                                                    </td>
                                                    <td className="p-2 whitespace-nowrap">
                                                        <div className="text-lg text-center">🇬🇧</div>
                                                    </td>
                                                </tr>
                                                </tbody>
                                            </table>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </section>
                                    </div>
                <div className=" w-[40%] card">
                    <div className="flex align-items-center justify-content-between ">
                        <h5>Notifications</h5>
                        <div>
                            <Button type="button" icon="pi pi-ellipsis-v" rounded text className="p-button-plain" onClick={(event) => menu2.current?.toggle(event)} />
                            <Menu
                                ref={menu2}
                                popup
                                model={[
                                    { label: 'Add New', icon: 'pi pi-fw pi-plus' },
                                    { label: 'Remove', icon: 'pi pi-fw pi-minus' }
                                ]}
                            />
                        </div>
                    </div>

                    <span className="block text-600 font-medium mb-3">TODAY</span>
                    <ul className="p-0 mx-0 mt-0 mb-4 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-dollar text-xl text-blue-500" />
                            </div>
                            <span className="text-900 line-height-3">
                                Richard Jones
                                <span className="text-700">
                                    {' '}
                                    has purchased a blue t-shirt for <span className="text-blue-500">79$</span>
                                </span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-orange-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-download text-xl text-orange-500" />
                            </div>
                            <span className="text-700 line-height-3">
                                Your request for withdrawal of <span className="text-blue-500 font-medium">2500$</span> has been initiated.
                            </span>
                        </li>
                    </ul>

                    <span className="block text-600 font-medium mb-3">YESTERDAY</span>
                    <ul className="p-0 m-0 list-none">
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-blue-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-dollar text-xl text-blue-500" />
                            </div>
                            <span className="text-900 line-height-3">
                                Keyser Wick
                                <span className="text-700">
                                    {' '}
                                    has purchased a black jacket for <span className="text-blue-500">59$</span>
                                </span>
                            </span>
                        </li>
                        <li className="flex align-items-center py-2 border-bottom-1 surface-border">
                            <div className="w-3rem h-3rem flex align-items-center justify-content-center bg-pink-100 border-circle mr-3 flex-shrink-0">
                                <i className="pi pi-question text-xl text-pink-500" />
                            </div>
                            <span className="text-900 line-height-3">
                                Jane Davis
                                <span className="text-700"> has posted a new questions about your product.</span>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>



        </>
    );
};

export default Dashboard;
