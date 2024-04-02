"use client";

import Image from "next/image";
import { Icon } from '@iconify/react';

function NavBar() {
    return (
        <div className="mt-5  flex justify-between w-full max-w-screen-2xl">
            <div className="flex-initial self-center">
                <Image src="/logo-light.svg" alt="Logo" width={100} height={100} />
            </div>
            <div className="flex items-right justify-between">
                <div className="flex px-6 py-3">
                <p className="font-inter font-semibold">GitHub</p>
                </div>
                <div className="flex border border-black rounded px-6 py-3 ml-6">
                    <Icon className="h-5 w-5 self-center " style={{color: "black"}} icon="ph:moon-fill"/>
                </div>
                <div className="flex border border-black rounded px-6 py-3 ml-6">
                    <Icon className="h-5 w-5 self-center mr-2" icon="solar:settings-linear"/>
                    <p className="font-inter font-semibold">Global Settings</p>
                </div>
            </div>
        </div>
    )
}

export default function Home() {
    return (
        <div className="flex justify-center">
            <NavBar />
        </div>
    );
}
