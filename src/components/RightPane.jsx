import React from "react";
import optionsIcon from '../icons/option.svg';
import Profile from '../images/IMG_5926.jpg';
import HumidityCont from "./HumidityCont";
import WindComp from "./WindComp";
import Precipitation from './PrecipComp';
import UVIndex from "./UVIndex";
import FeelsLikeComp from "./FeelsLikeComp";
import RainChange from "./RainChance";
import ChartData from "./ChartData";


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
            <div>
                <ChartData />
            </div>
            <h3 className="font-medium text-2xl p-6">More details of today's weather</h3>
            <section className="flex items-center justify-evenly flex-wrap">
                <HumidityCont />
                <WindComp />
                <Precipitation />
                <UVIndex />
                <FeelsLikeComp />
                <RainChange />
            </section>
            
        </div>
    )
};

export default RightPane;