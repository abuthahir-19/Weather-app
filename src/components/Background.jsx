import React from "react";
import WeatherImg from '../images/pexels-johannes-plenio-1118873.jpg';
import LeftPane from "./LeftPane";
import RightPane from "./RightPane";

const Background = () => {
    return (
        <div className="object-cover h-[0] w-full relative">
            <img src= { WeatherImg } alt="Weather Imag" />
            <div className="flex ">
                <LeftPane />
                <RightPane />
            </div>
        </div>
    )
}

export default Background;