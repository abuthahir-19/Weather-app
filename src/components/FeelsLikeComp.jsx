import React from "react";
import TempIcon from '../icons/Feels-like.svg';

const FeelsLikeComp = () => {
    return (
        <div className="p-5 bg-white w-[27%] m-5 rounded-3xl">
            <div className="flex justify-between items-center">
                <p>Feels Like</p>
                <div className="h-8 w-8 flex justify-center items-center bg-sky-500 rounded-xl">
                    <img src={ TempIcon } alt="Humidity Img" />
                </div>
            </div>
            <div className="flex justify-center items-end mt-3">
                <h3 className="font-bold text-3xl">{`${30}\u00b0`}</h3>
                {/* <p className="ml-3 font-normal text-md">bad</p> */}
            </div>
            <div className="flex items-center justify-around w-full mt-3">
                <div className="w-full">
                    <div className="flex justify-between">
                        <p>{`${0}\u00b0`}</p>
                        <p>{`${25}\u00b0`}</p>
                        <p>{`${50}\u00b0`}</p>
                    </div>
                    <div className="w-[100%] bg-slate-400 rounded-full">
                        <div className=" bg-sky-500  rounded-full w-[60%] p-1"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeelsLikeComp;