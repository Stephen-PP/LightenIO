import { UploadStatuses } from "@/components/uploader/UploaderRow";
import {create} from "zustand";
import { persist } from "zustand/middleware";

// interface JpegSettings {
//     lossless: boolean,
//     quality: number,
//     dimensions: {
//         width?: number,
//         height?: number
//     }
// }

// interface PngSettings {
//     compression: number,
//     lossless: boolean,
//     dimensions: {
//         width?: number,
//         height?: number
//     }
// }

// interface PdfSettings {
//     quality: "screen" | "ebook" | "prepress" | "printer",
// }

export interface AppPreferences {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    // imageSettings: {
    //     jpeg: {
    //         lossless: boolean,
    //         quality: number,
    //     },
    //     png: {
    //         compression: number,
    //         lossless: boolean
    //     }
    // },
}

export const useAppPreferencesState = create<AppPreferences>()(
    persist((set) => ({
        isDarkMode: false,
        toggleDarkMode: () => set((state) => ({isDarkMode: !state.isDarkMode}))
    }), {name: "app-preferences"})
)