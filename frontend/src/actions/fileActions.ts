import { CompressionJob } from '@/state/jobState';
import crypto from 'crypto';

export function DeleteFile(fileId: string) {

}

export function StartCompression(fileId: string) {

}

export function DownloadFile(fileId: string){
    
}

export function StartUpload(fileId: string) {

}

export function CreateFileCompressionTask(file: File) {
    // Use file lastModified, name, and size to create a unique ID for this file via SHA256
    const fileId = Buffer.from(`${file.lastModified}${file.name}${file.size}`).toString('base64');

    // Now turn this into a CompressionJob
    const job: CompressionJob = {
        file: {
            name: file.name,
            size: file.size,
            type: file.type
        },
        status: "Waiting",
        progress: 0,
        id: fileId
    }

    return job;
}