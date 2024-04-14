"use client";

import { RemixiconComponentType, RiAddFill, RiAddLine, RiDeleteBinLine, RiDownload2Line, RiFullscreenExitLine, RiSettings4Fill } from '@remixicon/react';
import Image from 'next/image';
import { CSSProperties } from 'react';

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
                    <table className="table-auto">
                        <thead>
                            <tr>
                                <th>File Name</th>
                                <th>Size</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>file.pdf</td>
                                <td>1.2MB</td>
                                <td>
                                    <button className="btn-info">Compress</button>
                                    <button className="btn-danger">Delete</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}