import { UploadStatuses } from "@/components/uploader/UploaderRow"
import { create } from "zustand"
import { persist } from "zustand/middleware"

export interface CompressionJobFile {
    name: string,
    size: number,
    type: string,
}

export interface CompressionJob {
    file: CompressionJobFile,
    status: UploadStatuses,
    progress: number,
    id: string,
    compressedSize?: number
}

export interface JobState {
    jobs: CompressionJob[],
    addJobs: (...jobs: CompressionJob[]) => void
}

export const useJobState = create<JobState>()(
    persist((set) => ({
        jobs: [],
        addJobs: (...jobs: CompressionJob[]) => set((state) => ({
            jobs: [
                ...state.jobs,
                ...jobs.filter(newJob => !state.jobs.some(existingJob => existingJob.id === newJob.id))
            ]
        })),
    }), {name: "job-store"})
)