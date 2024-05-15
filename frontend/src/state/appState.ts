import {create} from "zustand";

interface JpegSettings {
    lossless: boolean,
    quality: number,
    dimensions: {
        width?: number,
        height?: number
    }
}

interface PngSettings {
    compression: number,
    lossless: boolean,
    dimensions: {
        width?: number,
        height?: number
    }
}

interface PdfSettings {
    quality: "screen" | "ebook" | "prepress" | "printer",
}

interface AppState {
    isDarkMode: boolean;
    toggleDarkMode: () => void;
    imageSettings: {
        jpeg: {
            lossless: boolean,
            quality: number,
        },
        png: {
            compression: number,
            lossless: boolean
        }
    }
}