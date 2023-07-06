import React from "react";
import Sunny from '../icons/sunny.svg';

const UVIndex = () => {
    return (
        <div className="p-5 bg-white w-[27%] m-5 rounded-3xl">
            <div className="flex justify-between items-center">
                <p>UV Index</p>
                <div className="h-8 w-8 flex justify-center items-center bg-sky-500 rounded-xl">
                    <img src={Sunny} alt="Humidity Img" />
                </div>
            </div>
            <div className="flex justify-center items-end mt-3">
                <h3 className="font-bold text-3xl">4</h3>
                <p className="ml-3 font-normal text-md">medium</p>
            </div>
            <div className="flex items-center justify-around w-full mt-3">
                <div className="w-1/6">
                    <p className="font-normal text-gray-800">0-2</p>
                    <div className="bg-slate-200 rounded-full">
                        <div className=" bg-sky-500  rounded-full w-full p-1"></div>
                    </div>
                </div>
                <div className="w-1/6">
                    <p className="font-normal text-gray-800">3-5</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className=" bg-sky-500  rounded-full w-[40%] p-1"></div>
                    </div>
                </div>
                <div className="w-1/6">
                    <p className="font-normal text-gray-800">6-7</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full p-1"></div>
                    </div>
                </div>
                <div className="w-1/6">
                    <p className="font-normal text-gray-800">8-10</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full p-1"></div>
                    </div>
                </div>
                <div className="w-1/6">
                    <p className="font-normal text-gray-800">11+</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full p-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default UVIndex;