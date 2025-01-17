/* eslint-disable @next/next/no-img-element */
'use client';
import {useRouter} from 'next/navigation';
import React, {useContext, useEffect, useState} from 'react';
import {Checkbox} from 'primereact/checkbox';
import {Button} from 'primereact/button';
import {Password} from 'primereact/password';
import {LayoutContext} from '../../../../layout/context/layoutcontext';
import {InputText} from 'primereact/inputtext';
import {classNames} from 'primereact/utils';


const LoginPage = () => {
    const [checked, setChecked] = useState(false);
    const {layoutConfig} = useContext(LayoutContext);
    const [userDetail, setUserDetails] = useState({
        username: '',
        password: ''
    })
    const router = useRouter();
    const containerClassName = classNames('surface-ground flex align-items-center justify-content-center min-h-screen min-w-screen overflow-hidden', {'p-input-filled': layoutConfig.inputStyle === 'filled'});

    const login = () => {
        if (!userDetail.username || !userDetail.password) {
            alert("Please enter username or email and password")
        } else {
            if (userDetail.username === "admin" && userDetail.password === 'admin') {
                sessionStorage.setItem("user", JSON.stringify(userDetail))
                router.push("/");
            }
        }
    };
    useEffect(()=> {
        sessionStorage.removeItem("user")
    }, [])

    return (
        <div className={containerClassName}>
            <div className="flex flex-column align-items-center justify-content-center">
                <img src={`/layout/images/logo.png`} alt="logo" className="mb-5 w-6rem flex-shrink-0"/>

                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, #ff8138 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{borderRadius: '53px'}}>
                        <div className="text-center mb-5">
                            <img src="/demo/images/login/avatar.png" alt="Image" height="50" className="mb-3"/>
                            <div className="text-900 text-3xl font-medium mb-3">Welcome, Dice!</div>
                            <span className="text-600 font-medium">Sign in to continue</span>
                        </div>

                        <div>
                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                Email or Username
                            </label>
                            <InputText id="email1" type="text" value={userDetail.username}
                                       onChange={(e) => setUserDetails({...userDetail, username: e.target.value})}
                                       placeholder="Email address" className="w-full md:w-30rem mb-5"
                                       style={{padding: '1rem'}}/>

                            <label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">
                                Password
                            </label>
                            <Password inputId="password1" value={userDetail.password} onChange={(e) => setUserDetails({...userDetail, password: e.target.value})} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"/>
                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                <div className="flex align-items-center">
                                    <Checkbox inputId="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked ?? false)} className="mr-2"></Checkbox>
                                    <label htmlFor="rememberme1">Remember me</label>
                                </div>
                                <a href={"/auth/forgetpassword"} className="font-medium no-underline ml-2 text-right cursor-pointer" style={{color: 'var(--primary-color)'}}>
                                    Forgot password?
                                </a>
                            </div>
                            <Button label="Sign In" className="w-full p-3   text-xl" style={{backgroundColor: "#ff8138", marginBottom: "12px"}} onClick={login}></Button>
                            <a href={"/auth/registration"} className="font-medium no-underline ml-2 text-right cursor-pointer" style={{marginTop: "12px", color: 'var(--primary-color)'}}>
                                Already have account
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
