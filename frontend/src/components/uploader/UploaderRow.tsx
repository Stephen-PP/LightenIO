import { CompressionJob } from "@/state/jobState"
import { RiDownload2Line, RiDeleteBinLine, RiFileUploadLine, RiUpload2Line, RiCollapseDiagonal2Line } from "@remixicon/react"

function ProgressBar({ width, background, color}: { width: string, color: string, background: string}) {
    return (
        <div className="w-20 rounded-full h-2.5" style={{background}}>
            <div className="h-2.5 rounded-full" style={{ width, background: color }}></div>
        </div>
    )
}

export type UploadStatuses = "Uploading" | "Compressed" | "Compressing" | "Failed" | "Uploaded" | "Waiting"

export default function UploaderRow({ job }: { job: CompressionJob }) {
    // We need to render the row based off the job status
    switch (job.status) {
        case "Uploading":
            return <UploadingRow job={job} />
        case "Compressed":
            return <CompressedRow job={job} />
        case "Compressing":
            return <CompressingRow job={job} />
        case "Failed":
            return <FailedRow job={job} />
        case "Uploaded":
            return <UploadedRow job={job} />
        case "Waiting":
            return <WaitingRow job={job} />
        default:
            return <></>
    }
}

function CompressedRow({job}: {job: CompressionJob}) {
    return (
        <tr className="border-b uploader-border-color">
            <td className="uploader-table-checkbox"><input type="checkbox"></input></td>
            <td >{job.file.name}</td>
            <td>{humanFileSize(job.file.size)}</td>
            <td>
                <div className="flex items-center self-center">
                    Compressed!
                </div>
            </td>
            <td>{humanFileSize(job.compressedSize ?? 0)}</td>
            <td>{((job.file.size / (job.compressedSize ?? Number.MAX_SAFE_INTEGER)) * 100).toFixed(2)}%</td>
            <td>
                <div className="flex items-center self-center justify-center space-x-4">
                    <RiDownload2Line size={18}/>
                    <RiDeleteBinLine size={18}/>
                </div>
            </td>
        </tr>
    )
}

function CompressingRow({job}: {job: CompressionJob}) {
    return (
        <tr className="border-b uploader-border-color">
            <td className="uploader-table-checkbox"><input type="checkbox"></input></td>
            <td >{job.file.name}</td>
            <td>{humanFileSize(job.file.size)}</td>
            <td>
                <div className="flex items-center self-center">
                    Processing...
                </div>
            </td>
            <td>N/A</td>
            <td>-%</td>
            <td>
                <div className="flex items-center self-center justify-center space-x-4">
                    <RiDeleteBinLine size={18}/>
                </div>
            </td>
        </tr>
    )
}

function FailedRow({job}: {job: CompressionJob}) {
    return (
        <tr className="border-b uploader-border-color">
            <td className="uploader-table-checkbox"><input type="checkbox"></input></td>
            <td >{job.file.name}</td>
            <td>{humanFileSize(job.file.size)}</td>
            <td>
                <div className="flex items-center self-center">
                    Failed - check console
                </div>
            </td>
            <td>N/A</td>
            <td>-%</td>
            <td>
                <div className="flex items-center self-center justify-center space-x-4">
                    <RiDeleteBinLine size={18}/>
                </div>
            </td>
        </tr>
    )
}

function UploadingRow({job}: {job: CompressionJob}) {
    return (
        <tr className="border-b uploader-border-color">
            <td className="uploader-table-checkbox"><input type="checkbox"></input></td>
            <td >{job.file.name}</td>
            <td>{humanFileSize(job.file.size)}</td>
            <td>
                <div className="flex items-center self-center">
                    Uploading... {job.progress}% &nbsp;&nbsp;&nbsp;<ProgressBar background="#D9D9D9" color="#0A84FF" width={`${job.progress}%`}/>
                </div>
            </td>
            <td>N/A</td>
            <td>-%</td>
            <td>
                <div className="flex items-center self-center justify-center space-x-4">
                    <RiDeleteBinLine size={18}/>
                </div>
            </td>
        </tr>
    )
}

function UploadedRow({job}: {job: CompressionJob}) {
    return (
        <tr className="border-b uploader-border-color">
            <td className="uploader-table-checkbox"><input type="checkbox"></input></td>
            <td >{job.file.name}</td>
            <td>{humanFileSize(job.file.size)}</td>
            <td>
                <div className="flex items-center self-center">
                    Starting compression...
                </div>
            </td>
            <td>N/A</td>
            <td>-%</td>
            <td>
                <div className="flex items-center self-center justify-center space-x-4">
                    <RiDeleteBinLine size={18}/>
                </div>
            </td>
        </tr>
    )
}

function WaitingRow({job}: {job: CompressionJob}) {
    return (
        <tr className="border-b uploader-border-color">
            <td className="uploader-table-checkbox"><input type="checkbox"></input></td>
            <td >{job.file.name}</td>
            <td>{humanFileSize(job.file.size)}</td>
            <td>
                <div className="flex items-center self-center">
                    Ready to compress...
                </div>
            </td>
            <td>N/A</td>
            <td>-%</td>
            <td>
                <div className="flex items-center self-center justify-center space-x-4">
                    <RiCollapseDiagonal2Line size={18} className="cursor-pointer hover:opacity-80"/>
                    <RiDeleteBinLine size={18} className="cursor-pointer hover:opacity-80"/>
                </div>
            </td>
        </tr>
    )
}

function humanFileSize(size: number) {
    var i = size == 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
    return +((size / Math.pow(1024, i)).toFixed(2)) * 1 + ' ' + ['B', 'kB', 'MB', 'GB', 'TB'][i];
}