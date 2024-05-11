import React from 'react';
import {InputText} from "primereact/inputtext";
import {Password} from "primereact/password";
import {Checkbox} from "primereact/checkbox";
import {Button} from "primereact/button";

const Page = () => {
    return (
        <div >
            <div className="flex flex-column align-items-center justify-content-center">
                <img src={`/layout/images/logo.png`} alt="logo" className="mb-5 w-6rem flex-shrink-0" />
                <div
                    style={{
                        borderRadius: '56px',
                        padding: '0.3rem',
                        background: 'linear-gradient(180deg, #ff8138 10%, rgba(33, 150, 243, 0) 30%)'
                    }}
                >
                    <div className="w-full surface-card py-8 px-5 sm:px-8" style={{ borderRadius: '53px' }}>
                        <div className="text-center mb-5">
                            {/*<img src="/demo/images/login/avatar.png" alt="Image" height="50" className="mb-3" />*/}
                            <div className="text-900 text-3xl font-medium mb-3">Add your new password</div>
                            <span className="text-600 font-medium">Sign in to continue</span>
                        </div>

                        <div>
                            <label htmlFor="email1" className="block text-900 text-xl font-medium mb-2">
                                Email
                            </label>
                            <InputText id="email1" type="text"   placeholder="Email address" className="w-full md:w-30rem mb-5" style={{ padding: '1rem' }} />

                            {/*<label htmlFor="password1" className="block text-900 font-medium text-xl mb-2">*/}
                            {/*    Password*/}
                            {/*</label>*/}
                            {/*<Password inputId="password1" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" toggleMask className="w-full mb-5" inputClassName="w-full p-3 md:w-30rem"></Password>*/}

                            <div className="flex align-items-center justify-content-between mb-5 gap-5">
                                {/*<div className="flex align-items-center">*/}
                                {/*    <Checkbox inputId="rememberme1" checked={checked} onChange={(e) => setChecked(e.checked ?? false)} className="mr-2"></Checkbox>*/}
                                {/*    <label htmlFor="rememberme1">Remember me</label>*/}
                                {/*</div>*/}
                                {/*<a href={"/auth/forgetpassword"} className="font-medium no-underline ml-2 text-right cursor-pointer" style={{ color: 'var(--primary-color)' }}>*/}
                                {/*    Forgot password?*/}
                                {/*</a>*/}
                            </div>
                            <Button label="Submit" className="w-full p-3   text-xl" style={{backgroundColor: "#ff8138"}}



                            ></Button>

                            <span className="text-600 font-medium">we'll send you a opt</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page;
