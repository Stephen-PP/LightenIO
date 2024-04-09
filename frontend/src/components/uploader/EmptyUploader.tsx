"use client";

import Image from 'next/image';

export default function EmptyUploader() {
    return (
        <div className="flex justify-center">
            <div className="flex justify-center mt-44 w-full max-w-screen-2xl h-[50vh] max-h-screen text-center border border-black border-dashed rounded-md" style={{borderColor: "#D1D1D6"}}>
                <div className="self-center items-center">
                    <div>
                        <Image className="mx-auto" src="upload.svg" width={40} height={40} alt="Upload" />
                    </div>
                    <div className="mt-4">
                        <span className="text-xl text-neutral">Drag & Drop or <span className="text-logo text-primary">Browse Files</span> to Compress</span>
                    </div>
                    <div className="mt-4">
                        <span className="text-info">Supported File Formats: PDF, PNG, JPG</span>
                    </div>
                </div>
            </div>
        </div>
    )
}