"use client";

import { RiSettings4Fill } from '@remixicon/react'
import ThemeSwitcher from "./switch/ThemeSwitcher";
import { useState } from 'react';
import SettingsModal from './settings/SettingsModal';

export default function NavBar() {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="flex justify-center">
            <div className="mt-5 flex justify-between w-full max-w-screen-2xl">
                <div className="ml-4 flex-initial self-center">
                    <span className=" font-bold text-2xl text-logo clickable">Lighten</span>
                </div>
                <div className="flex mr-4 items-right justify-between">
                    <div className="flex py-3">
                        <a href="https://github.com/Stephen-PP/LightenIO" target="_blank" className="text-info clickable">Github</a>
                    </div>
                    <div className="flex px-3">
                        <div className="flex-initial self-center">
                            <ThemeSwitcher id="theme"/>
                        </div>
                    </div>
                    {/* <div className="flex px-3">
                        <div className="clickable btn-info rounded-md flex-initial self-center" onClick={() => setShowModal(true)}>
                            <p className="flex m-3 text-info">
                                <RiSettings4Fill 
                                    size={18}
                                    className="mx-auto flex-initial self-center mr-2 "
                                />
                                Settings</p>
                        </div>
                    </div> */}
                </div>
            </div>

            <SettingsModal isOpen={showModal} onClose={() => setShowModal(false)}/>
        </div>
    )
}