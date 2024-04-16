"use client";

import { RemixiconComponentType, RiAddFill, RiAddLine, RiCrossFill, RiDeleteBinLine, RiDownload2Line, RiFullscreenExitLine, RiSettings4Fill } from '@remixicon/react';
import Image from 'next/image';
import { CSSProperties } from 'react';
import { IsDarkMode } from '../switch/ThemeSwitcher';

type UploaderButtonProps = {
    text: string,
    icon: RemixiconComponentType,
    style?: CSSProperties,
    textStyle?: CSSProperties,
    iconStyle?: CSSProperties
}

const selectedManipulationButtons: UploaderButtonProps[] = [{
    text: "Add File",
    icon: RiAddLine
}, {
    text: "Compress",
    icon: RiFullscreenExitLine
}, {
    text: "Delete",
    icon: RiDeleteBinLine
}]

const globalButtons: UploaderButtonProps[] = [ {
    text: "Download All",
    icon: RiDownload2Line
}, {
    text: "Compress All",
    icon: RiFullscreenExitLine,
    style: {
        backgroundColor: "#0040D3",
    },
    textStyle: {
        color: "white"
    },
    iconStyle: {
        fill: "white"
    }
}]

function ProgressBar({ width, background, color}: { width: string, color: string, background: string}) {
    return (
        <div className="w-20 rounded-full h-2.5" style={{background}}>
            <div className="h-2.5 rounded-full" style={{ width, background: color }}></div>
        </div>
    )
}

export default function Uploader() {
    return (
        <div className="flex justify-center">
            <div className="flex flex-col justify-start mt-20 w-full max-w-screen-2xl h-[50vh] max-h-screen text-center border rounded-md uploader-border-color">
                <div className="flex justify-between border-b w-full uploader-border-color">
                    <div className="flex flex-initial self-center" >
                        {selectedManipulationButtons.map((button, index) => (
                            <div className="flex px-3 py-3">
                                <div className="clickable btn-info rounded-md flex-initial self-center" style={{...(button.style ?? {})}}>
                                    <p className="flex m-3 text-info" style={{...(button.textStyle ?? {})}}>
                                        <button.icon 
                                            size={18}
                                            className="mx-auto flex-initial self-center mr-2"
                                            style={{...(button.iconStyle ?? {})}}
                                        />
                                        {button.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="flex items-right justify-between">
                        {globalButtons.map((button, index) => (
                            <div className="flex px-3 py-3">
                                <div className="clickable btn-info rounded-md flex-initial self-center" style={{...(button.style ?? {})}}>
                                    <p className="flex m-3 text-info" style={{...(button.textStyle ?? {})}}>
                                        <button.icon 
                                            size={18}
                                            className="mx-auto flex-initial self-center mr-2"
                                            style={{...(button.iconStyle ?? {})}}
                                        />
                                        {button.text}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="self-center items-center w-full">
                    <table className="border-collapse table-auto pt-2 w-full h-20 max-h-20 uploader-table overflow-scroll">
                        <thead className="font-normal border-b uploader-border-color pb-20 text-info">
                            <tr>
                                <th style={{width: "2%"}}><input type="checkbox"></input></th>
                                <th style={{width: "20%"}}>File Name</th>
                                <th style={{width: "10%"}}>Size</th>
                                <th style={{width: "20%"}}>Current Status</th>
                                <th style={{width: "10%"}}>Size Reduction</th>
                                <th style={{width: "10%"}}>Compression Ratio</th>
                                <th style={{width: "15%", textAlign: "center"}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-dark">
                            <tr className="border-b uploader-border-color">
                                <td><input type="checkbox"></input></td>
                                <td >file.pdf</td>
                                <td>1.2MB</td>
                                <td>
                                    <div className="flex items-center self-center">
                                        Uploading...60% &nbsp;&nbsp;&nbsp;<ProgressBar background="#D9D9D9" color="#0A84FF" width="10%"/>
                                    </div>
                                </td>
                                <td>1.1MB</td>
                                <td>10%</td>
                                <td>
                                    <div className="flex items-center self-center justify-center">
                                        <RiCrossFill className="border border-black"/>
                                        <RiCrossFill className="border border-black"/>
                                    </div>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}