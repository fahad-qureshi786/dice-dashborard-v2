"use client"
import {Chips} from "primereact/chips"
import React, { useState } from "react";
import { Dropdown } from 'primereact/dropdown';

const Page = () => {

    const [selectedCity, setSelectedCity] = useState(null);
    const cities = [
        { name: 'New York', code: 'NY' },
        { name: 'Rome', code: 'RM' },
        { name: 'London', code: 'LDN' },
        { name: 'Istanbul', code: 'IST' },
        { name: 'Paris', code: 'PRS' }
    ];

    return (
        <div>

           <div >

               <div className={"card p-4 m-4"}>
                   <div className={"flex align-items-center justify-content-between"}>
                       <h3 className={""} >Discount code</h3>
                       <h6><a href={"#"}>Generate Code</a></h6>
                   </div>
                   <Chips placeholder={"Search"} style={{width: "40%"}} />
                   <div className={"my-2"}>Customer will add this discount at checkout</div>
               </div>

               <div className={"card py-4 m-4"}>
                   <h3 className={"my-4"} >Options</h3>
                   <div className={"flex align-items-center justify-content-between"}>

                       {/*<h6><a href={"#"}>Generate Code</a></h6>*/}
                       <div className={"flex justify-content-evenly"}>
                           <div className={"w-full flex justify-content-evenly mr-2"}>

                               <div className=" flex w-full justify-content-center">
                                   <Dropdown value={selectedCity} onChange={(e) => setSelectedCity(e.value)} options={cities} optionLabel="name"
                                             placeholder="Select a City" className="w-full md:w-14rem" checkmark={true} highlightOnSelect={false} />
                               </div>
                               <Chips placeholder={"Discount value"} style={{width: "100%"}} />
                           </div>
                           <div className={"w-1/2"}>

                           </div>

                       </div>



                   </div>
               </div>

               <div className={"card py-4 m-4"}>
                   <h3 className={"my-4"} >Applied to</h3>
                   <div className={"p-4"}>

                       <div className="field-checkbox">
                           <input type="checkbox" id="city1"></input>
                           <label htmlFor="city1">Entire Order</label>
                       </div>
                       <div className="field-checkbox">
                           <input type="checkbox" id="city2"></input>
                           <label htmlFor="city2">Specific Collection</label>
                       </div>
                       <div className="field-checkbox">
                           <input type="checkbox" id="city2"></input>
                           <label htmlFor="city2">Specific Products</label>
                       </div>


                   </div>
               </div>
           </div>
        </div>
    );
};

export default Page;
