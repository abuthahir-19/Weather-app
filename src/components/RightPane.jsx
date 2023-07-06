import React from "react";
import optionsIcon from '../icons/option.svg';
import Profile from '../images/IMG_5926.jpg';
import Humidity from '../icons/chance-of-rain.svg';
import Air from '../icons/wind.svg';
import Sunny from '../icons/sunny.svg';
import temp from '../icons/Feels-like.svg';
import precipitation from '../icons/precipitation.svg';
import chanceOfRain from '../icons/chance-of-rain.svg';

const RightPane = () => {
    return (
        <div className=" bg-sky-100 w-[75%] absolute right-0 top-0">
            <div className="flex justify-between p-6">
                <div className="p-2">
                    <h2 className="font-medium text-2xl">Welcome back Isabella !</h2>
                    <p className="font-normal text-lg">Check out today's weather information </p>
                </div>
                <div className="flex items-center justify-evenly w-[15%]">
                    <img className="h-5 w-5 cursor-pointer" src={ optionsIcon } alt="optionsIcon" />
                    <img className="h-10 w-10 object-cover cursor-pointer rounded-lg" src={ Profile } alt="profileImg" />
                </div>
            </div>
            <h3 className="font-medium text-2xl p-6">More details of today's weather</h3>
            <div className="p-5 bg-white w-1/3 m-5 rounded-2xl">
                <div className="flex justify-between items-center">
                    <p>Humidity</p>
                    <div className="h-8 w-8 flex justify-center items-center bg-sky-500 rounded-xl">
                        <img src={ Humidity } alt="Humidity Img" />
                    </div>
                </div>
                <div className="flex justify-center items-end">
                    <h3 className="font-bold text-3xl">82%</h3>
                    <p className="ml-3 font-normal text-md">bad</p>
                </div>
                <div className="flex items-center justify-around w-full">
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
                        <div className="w-[25%] bg-slate-400 rounded-full">
                            <div className=" bg-sky-500  rounded-full w-full p-1"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default RightPane;