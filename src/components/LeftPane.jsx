import React from "react";
import Header from "./Header";
import SendIcon from '../icons/send.svg';
import sunSetIcon from '../icons/sunset.svg';
import sunRiseIcon from '../icons/sunrise.svg';
import Temperature from "./Temperature";

const LeftPane = () => {
    return (
        <div className="z-50 w-[25%] absolute top-0 text-white">
            <Header />
            <div className="p-7 flex justify-between items-center">
                <div>
                    <div className="flex justify-evenly items-center">
                        <img className="h-5 w-5" src={ SendIcon } alt="SentIcon" />
                        <h3 className="ml-3">New York, USA</h3>
                    </div>
                    <div>
                        <p>Today 28 Sept</p>
                    </div>
                </div>
                <div>
                    <div className="flex">
                        <img className="h-5 w-5" src={ sunRiseIcon } alt="sunRiseIcon" />
                        <p className="ml-3">07:19</p>
                    </div>
                    <div className="flex">
                        <img className="h-5 w-5" src={ sunSetIcon } alt="sunSetIcon" />
                        <p className="ml-3">19:32</p>
                    </div>
                </div>
            </div>
            <Temperature temp="27" />
        </div>
    )
};

export default LeftPane;