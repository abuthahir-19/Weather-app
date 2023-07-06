import React from "react";
import precip from '../icons/precipitation.svg';

const Precipitation = () => {
    return (
        <div className="p-5 bg-white w-[27%] m-5 rounded-3xl">
            <div className="flex justify-between items-center">
                <p>Precipitation</p>
                <div className="h-8 w-8 flex justify-center items-center bg-sky-500 rounded-xl">
                    <img src={precip} alt="Humidity Img" />
                </div>
            </div>
            <div className="flex justify-center items-end mt-3">
                <h3 className="font-bold text-3xl">1.4</h3>
                <p className="ml-3 font-bold text-3xl">cm</p>
            </div>
            <div className="flex items-center justify-around w-full mt-3">
                <div className="w-1/10">
                    <p className="font-normal text-gray-800">0</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className=" bg-sky-500  rounded-full w-full p-1"></div>
                    </div>
                </div>
                <div className="w-1/10">
                    <p className="font-normal text-gray-800">10</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className=" bg-sky-500  rounded-full w-[50%] p-1"></div>
                    </div>
                </div>
                <div className="w-1/10">
                    <p className="font-normal text-gray-800">20</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full w-0 p-1"></div>
                    </div>
                </div>
                <div className="w-1/10">
                    <p className="font-normal text-gray-800">30</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full w-0 p-1"></div>
                    </div>
                </div>
                <div className="w-1/10">
                    <p className="font-normal text-gray-800">40</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full w-0 p-1"></div>
                    </div>
                </div>
                <div className="w-1/10">
                    <p className="font-normal text-gray-800">50</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full w-0 p-1"></div>
                    </div>
                </div>
                <div className="w-1/10">
                    <p className="font-normal text-gray-800">60</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full w-0 p-1"></div>
                    </div>
                </div>
                <div className="w-1/10">
                    <p className="font-normal text-gray-800">70</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full w-0 p-1"></div>
                    </div>
                </div>
                <div className="w-1/10">
                    <p className="font-normal text-gray-800">80</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full w-0 p-1"></div>
                    </div>
                </div>
                <div className="w-1/10">
                    <p className="font-normal text-gray-800">90</p>
                    <div className="w-[100%] bg-slate-200 rounded-full">
                        <div className="rounded-full w-0 p-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Precipitation;