"use client";

import NavBar from "@/components/NavBar";
import EmptyUploader from "@/components/uploader/EmptyUploader";

function UploadFileSectionEmpty(){

}

export default function Home() {
    return (
        <><NavBar /><EmptyUploader /></>
    );
}
