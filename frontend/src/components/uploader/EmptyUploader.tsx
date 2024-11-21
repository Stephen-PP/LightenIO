"use client";

import Image from 'next/image';
import { useState } from 'react';

interface EmptyUploaderProps {
  onFileSelect: (files: File[]) => void;
}

export default function EmptyUploader({ onFileSelect }: EmptyUploaderProps) {
    const [isDragging, setIsDragging] = useState(false);

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = (e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    };

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
        
        if (validFiles.length > 0) {
            onFileSelect(validFiles);
        }
    };

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            const files = Array.from(e.target.files);
            onFileSelect(files);
        }
    };

    return (
        <div className="flex justify-center">
            <div 
                className={`flex justify-center mt-20 w-full max-w-screen-2xl h-[50vh] max-h-screen 
                           text-center border border-dashed rounded-md transition-colors empty-uploader-border-color`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
            >
                <div className="self-center items-center">
                    <div>
                        <Image className="mx-auto" src="upload.svg" width={40} height={40} alt="Upload" />
                    </div>
                    <div className="mt-4">
                        <label className="text-xl text-neutral clickable">
                            Drag & Drop or {' '}
                            <span className="text-logo text-primary cursor-pointer">
                                <input
                                    type="file"
                                    className="hidden"
                                    accept=".pdf,.png,.jpg,.jpeg"
                                    multiple
                                    onChange={handleFileInput}
                                />
                                Browse Files
                            </span>
                            {' '}to Compress
                        </label>
                    </div>
                    <div className="mt-4">
                        <span className="text-info">Supported File Formats: PDF, PNG, JPG</span>
                    </div>
                </div>
            </div>
        </div>
    );
}