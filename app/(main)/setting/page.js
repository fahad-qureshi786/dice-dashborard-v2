"use client"
import React, { useState } from "react";
import { InputSwitch } from "primereact/inputswitch";
import { Button } from "primereact/button";
import { Dropdown } from 'primereact/dropdown';
import { Dialog } from 'primereact/dialog';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { FileUpload } from 'primereact/fileupload';

const Page = () => {
    const [notification, setNotification] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [selectedCity, setSelectedCity] = useState(null);
    const [masterToggle, setMasterToggle] = useState(false);
    const [visible, setVisible] = useState(false);

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [country, setCountry] = useState('');
    const [city, setCity] = useState('');
    const [role, setRole] = useState('');
    const [phone, setPhone] = useState('');
    const [address, setAddress] = useState('');
    const [image, setImage] = useState(null);

    const cities = [
        { name: 'Admin', code: 'NY' },
        { name: 'User', code: 'RM' }
    ];

    // Function to handle master toggle change
    const handleMasterToggleChange = (value) => {
        setMasterToggle(value);
        setNotification(value);
        setDarkMode(value);
    };

    const handleFormSubmit = () => {
        // Handle form submission logic here
        console.log({
            username,
            email,
            password,
            country,
            city,
            role,
            phone,
            address,
            image
        });
    };

    return (
        <div className="card px-8">
            <div className={"px-4 my-4 flex align-items-center justify-content-between"}>
                <div>
                    <div className=" flex justify-content-center">
                        <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name" placeholder="Select User" className="w-full md:w-14rem" />
                    </div>
                </div>
                <div>
                    <Button label="Add User" onClick={() => setVisible(true)} raised severity="warning" className={"sticky "} style={{ marginTop: "14px", backgroundColor: "#ff8a38" }} />
                </div>
            </div>
            <h3 className="text-5xl text-gray-800 flex align-items-center ">Settings <span className="w-full my-4 px-2 ">
                <InputSwitch id="masterToggle" checked={masterToggle} onChange={(e) => handleMasterToggleChange(e.value)} />
            </span></h3>

            <div className="w-full my-4 px-4 flex justify-content-between">
                <label htmlFor="notification" className="mr-2 text-2xl">Notifications</label>
                <InputSwitch id="notification" checked={notification} onChange={(e) => setNotification(e.value)} />
            </div>

            <div className="w-full flex my-4 px-4 justify-content-between">
                <label htmlFor="darkMode" className="mr-2 text-2xl">Dark Mode</label>
                <InputSwitch id="darkMode" className={""} checked={darkMode} onChange={(e) => setDarkMode(e.value)} />
            </div>

            {/* Dialog Box */}
            <Dialog header="Add User" visible={visible} style={{ width: '50vw' }} onHide={() => setVisible(false)}>
                <div className="p-fluid">
                    <div className="p-field mt-4">
                        <label htmlFor="username">Username</label>
                        <InputText id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
                    </div>
                    <div className="p-field mt-4">
                        <label htmlFor="email">Email</label>
                        <InputText id="email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>
                    <div className="p-field mt-4">
                        <label htmlFor="password">Password</label>
                        <Password id="password" value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                    <div className="p-field mt-4">
                        <label htmlFor="country">Country</label>
                        <InputText id="country" value={country} onChange={(e) => setCountry(e.target.value)} />
                    </div>
                    <div className="p-field mt-4">
                        <label htmlFor="city">City</label>
                        <InputText id="city" value={city} onChange={(e) => setCity(e.target.value)} />
                    </div>
                    <div className="p-field mt-4">
                        <label htmlFor="role">Role</label>
                        <Dropdown id="role" value={role} options={[{ label: 'Manager', value: 'Manager' }, { label: 'ADMIN', value: 'ADMIN' }, { label: 'Vender', value: 'Vender' }]} onChange={(e) => setRole(e.value)} placeholder="Select a role" />
                    </div>
                    <div className="p-field mt-4">
                        <label htmlFor="phone">Phone</label>
                        <InputText id="phone" value={phone} onChange={(e) => setPhone(e.target.value)} />
                    </div>
                    <div className="p-field mt-4">
                        <label htmlFor="address">Address</label>
                        <InputText id="address" value={address} onChange={(e) => setAddress(e.target.value)} />
                    </div>
                    <div className="p-field mt-4">
                        <label htmlFor="image" className={"my-4"}>Image</label>
                        <FileUpload id="image" className={"my-4"} mode="basic" accept="image/*" chooseLabel="Choose" uploadLabel="Upload" cancelLabel="Cancel" name="demo[]" url="./upload.php" />
                    </div>
                </div>
                <div className=" flex justify-content-center">
                    <Button label="Submit" onClick={handleFormSubmit} />
                </div>
            </Dialog>
        </div>
    );
};

export default Page;
