"use client";

import { RemixiconComponentType, RiAddLine, RiFullscreenExitLine, RiDeleteBinLine, RiDownload2Line } from '@remixicon/react';
import React, { CSSProperties, useEffect, useState } from 'react';
import UploaderRow from './UploaderRow';
import { CompressionJob, useJobState } from '@/state/jobState';
import { CreateFileCompressionTask } from '@/actions/fileActions';

type UploaderButtonProps = {
    text: string,
    icon: RemixiconComponentType,
    id?: string,
    style?: CSSProperties,
    textStyle?: CSSProperties,
    iconStyle?: CSSProperties
}

const selectedManipulationButtons: UploaderButtonProps[] = [{
    text: "Add File",
    icon: RiAddLine,
    id: "add-file-btn"
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
    const {jobs, addJobs} = useJobState();
    const [isDragging, setIsDragging] = useState(false);

    // Create a hook so that if isDragging is active, add a blue border around the "Add File component"
    useEffect(() => {
        const addFileButton = document.getElementById('add-file-btn');
        if (addFileButton) {
            if (isDragging) {
                addFileButton.style.border = '2px solid #0040D3';
            } else {
                addFileButton.style.border = 'none';
            }
        }
    }, [isDragging]);
    
    // Function to handle if files are dropped
    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        const files = Array.from(e.dataTransfer.files);
        const validFiles = files.filter(file => {
            const type = file.type.toLowerCase();
            return type.includes('pdf') || 
                   type.includes('png') || 
                   type.includes('jpg') || 
                   type.includes('jpeg');
        });
        
        const convertedFiles: CompressionJob[] = [];

        for(let file of validFiles) {
            convertedFiles.push(CreateFileCompressionTask(file));
        }

        addJobs(...convertedFiles);
    };

    // Function to handle if files are dragged over
    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    // Function to handle when a dragged file leaves the drag area
    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }

    return (
        <div className="flex justify-center px-4">
            <div 
                className={`flex flex-col justify-start mt-20 w-full max-w-screen-2xl h-[50vh] max-h-screen text-center border rounded-md uploader-border-color`}
                onDrop={handleDrop}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
            >
                <div className="flex justify-between border-b w-full uploader-border-color">
                    <div className="flex flex-initial self-center" >
                        {selectedManipulationButtons.map((button, index) => (
                            <div className="flex px-3 py-3" key={index}>
                                <div id={button.id} className="clickable btn-info rounded-md flex-initial self-center" style={{...(button.style ?? {})}}>
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
                            <div className="flex px-3 py-3" key={index}>
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
                <div className="self-center items-center w-full overflow-y-scroll">
                    <table className="border-collapse table-auto pt-2 w-full h-20 max-h-20 uploader-table">
                        <thead className="font-normal border-b uploader-border-color pb-20 text-info sticky top-0 z-0 backdrop-blur-xl backdrop-brightness-20">
                            <tr>
                                <th className="uploader-table-checkbox" style={{width: "2%"}}><input type="checkbox"></input></th>
                                <th style={{width: "20%"}}>File Name</th>
                                <th style={{width: "10%"}}>Size</th>
                                <th style={{width: "20%"}}>Current Status</th>
                                <th style={{width: "10%"}}>Size Reduction</th>
                                <th style={{width: "10%"}}>Compression Ratio</th>
                                <th style={{width: "15%", textAlign: "center"}}>Actions</th>
                            </tr>
                        </thead>
                        <tbody className="text-dark">
                            <UploaderRow job={jobs[0]} />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
