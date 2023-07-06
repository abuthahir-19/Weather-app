import React from "react";
import Humidity from '../icons/chance-of-rain.svg'
const HumidityCont = () => {
    return (
        <div className="p-5 bg-white w-[27%] m-5 rounded-3xl">
            <div className="flex justify-between items-center">
                <p>Humidity</p>
                <div className="h-8 w-8 flex justify-center items-center bg-sky-500 rounded-xl">
                    <img src={Humidity} alt="Humidity Img" />
                </div>
            </div>
            <div className="flex justify-center items-end mt-3">
                <h3 className="font-bold text-3xl">82%</h3>
                <p className="ml-3 font-normal text-md">bad</p>
            </div>
            <div className="flex items-center justify-around w-full mt-3">
                <div className="w-1/4">
                    <p className="font-normal text-gray-800">good</p>
                    <div className="bg-slate-400 rounded-full">
                        <div className=" bg-sky-500  rounded-full w-full p-1"></div>
                    </div>
                </div>
                <div className="w-1/4">
                    <p className="font-normal text-gray-800">good</p>
                    <div className="bg-slate-400 rounded-full">
                        <div className=" bg-sky-500  rounded-full w-full p-1"></div>
                    </div>
                </div>
                <div className="w-1/4">
                    <p className="font-normal text-gray-800">bad</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className=" bg-sky-500  rounded-full w-1/3 p-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HumidityCont;