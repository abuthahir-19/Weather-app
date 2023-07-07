import React from "react";
import nextIcon from '../icons/nextBlack.svg';
import sunnyIcon from '../icons/BlackSunny.svg';
import cloud from '../icons/cloud.svg';

const ChartData = () => {
    return (
        <div className="p-3 m-3 bg-white rounded-2xl">
            <div className="flex justify-between items-center">
                <div>
                    <h3 className=" font-semibold">Upcomming hours</h3>
                </div>
                <div className="flex justify-evenly items-center w-[40%]">
                    <div className="flex justify-between bg-slate-300 rounded-md py-1 px-3 cursor-pointer">
                        <p className="font-normal text-md text-slate-500">Rain Precipitation</p>
                        <img className="text-slate-500 rotate-90" src={ nextIcon} alt="DropDownIcon" />
                    </div>
                    <div className="flex items-center px-3 py-1 bg-slate-300 rounded-md cursor-pointer">
                        <p>Next days</p>
                        <img src={ nextIcon } alt="nextIcon" />
                    </div>
                </div>
            </div>

            <div className="flex justify-evenly mt-4 font-normal text-slate-700">
                <p>Now</p>
                <p>11:00</p>
                <p>12:00</p>
                <p>13:00</p>
                <p>14:00</p>
                <p>15:00</p>
                <p>16:00</p>
                <p>17:00</p>
            </div>

            <div className="flex justify-evenly mt-3">
                <img src={ sunnyIcon } alt="Sunny" />
                <img src={ sunnyIcon } alt="Sunny" />
                <img src={ cloud } alt="Cloud" />
                <img src={ cloud } alt="Cloud" />
                <img src={ sunnyIcon } alt="Sunny" />
                <img src={ cloud } alt="Cloud" />
                <img src={ cloud } alt="Cloud" />
                <img src={ sunnyIcon } alt="Sunny" />
            </div>

            <div className="flex justify-evenly mt-4 font-normal text-slate-700">
                <p>{`${27}\u00b0`}</p>
                <p>{`${28}\u00b0`}</p>
                <p>{`${28}\u00b0`}</p>
                <p>{`${29}\u00b0`}</p>
                <p>{`${30}\u00b0`}</p>
                <p>{`${29}\u00b0`}</p>
                <p>{`${29}\u00b0`}</p>
                <p>{`${28}\u00b0`}</p>
            </div>

            <div className="flex justify-evenly mt-2">
                <hr className=" h-24 w-[2px] bg-slate-700" />
                <hr className=" h-24 w-[2px] bg-slate-700" />
                <hr className=" h-24 w-[2px] bg-slate-700" />
                <hr className=" h-24 w-[2px] bg-slate-700" />
                <hr className=" h-24 w-[2px] bg-slate-700" />
                <hr className=" h-24 w-[2px] bg-slate-700" />
                <hr className=" h-24 w-[2px] bg-slate-700" />
                <hr className=" h-24 w-[2px] bg-slate-700" />
            </div>

            <div className="flex justify-evenly mt-4 font-normal text-slate-500">
                <p>23%</p>
                <p>29%</p>
                <p>58%</p>
                <p>75%</p>
                <p>33%</p>
                <p>20%</p>
                <p>73%</p>
                <p>49%</p>
            </div>
        </div>
    );
}

export default ChartData;