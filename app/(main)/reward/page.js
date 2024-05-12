"use client"
import React, {useState} from 'react';
import { Knob } from "primereact/knob";
import {Button} from "primereact/button";
const Page = () => {
    const [knobValue, setKnobValue] = useState(70);
    return (
       <div>
        <div>
            <h3 className={"text-2xl text-orange-400 my-4 p-4 "}>Customer Loyalty Points</h3>
            <div className={"flex justify-content-evenly  my-2" } >
                <div className={"card p-8 bg-orange-400 text-white rounded "} style={{width: "500px" , margin: "0px"}}>
                    <h1 className={"text-7xl text-center"}>2509</h1>
                    <p className={"text-center text-xl"}>Yours Points</p>
                </div>
                <div className={"flex  justify-content-center rounded card"} style={{width: "500px" ,flexDirection: "column" , alignItems: "center"}}>
                    <div>
                        <Knob
                            value={knobValue}
                            valueTemplate={"{value}%"}
                            onChange={(e) => setKnobValue(e.value)}
                            step={10}
                            min={-50}
                            max={50}
                            width={200}
                            className="custom-knob"
                        />
                    </div>
                    <div className={"text-center text-xl"}>you need 700 more points to react <br/> next reward </div>
                </div>


        </div>

            <div className={"card mx-4 mt-8 align-items-center flex justify-content-between"}>
                <h4 style={{margin: "0px"}} className={"text-orange-500"}>5% Off Coupon</h4>
                <h4>500 Points</h4>
                <div>
                    <Button style={{ backgroundColor: '#ffa15f', border: "none", color: 'white',  margin:"2px" }} primary>
                        Get Reward
                    </Button>
                </div>
            </div>
            <div className={"card mx-4  align-items-center flex justify-content-between"}>
                <h4 style={{margin: "0px"}} className={"text-orange-500"}>5% Off Coupon</h4>
                <h4>500 Points</h4>
                <div>
                    <Button style={{ backgroundColor: '#ffa15f', border: "none", color: 'white',  margin:"2px" }} primary>
                        Get Reward
                    </Button>
                </div>
            </div>
            <div className={"card mx-4  align-items-center flex justify-content-between"}>
                <h4 style={{margin: "0px"}} className={"text-orange-500"}>5% Off Coupon</h4>
                <h4>500 Points</h4>
                <div>
                    <Button style={{ backgroundColor: '#ffa15f', border: "none", color: 'white',  margin:"2px" }} primary>
                        Get Reward
                    </Button>
                </div>
            </div>
        </div>
</div>
    );
};

export default Page;
