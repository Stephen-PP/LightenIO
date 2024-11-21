import { useEffect, useState } from "react";
import { RiSunFill, RiMoonFill } from '@remixicon/react'
import { useAppPreferencesState } from "@/state/appState";

export default function ThemeSwitcher(options: {id: string}) {
    const {isDarkMode, toggleDarkMode} = useAppPreferencesState();

    // Update local storage every time switched is changed
    useEffect(() => {
        if (isDarkMode) {
            document.body.classList.add('dark');
            document.body.classList.remove('light');

            document.getElementById("theme-toggle-sun")?.classList.add("no-display");
            document.getElementById("theme-toggle-moon")?.classList.remove("no-display");
        } else {
            document.body.classList.add('light');
            document.body.classList.remove('dark');

            document.getElementById("theme-toggle-sun")?.classList.remove("no-display");
            document.getElementById("theme-toggle-moon")?.classList.add("no-display");
        }
    }, [isDarkMode]);

    return (
        <div className="border theme-toggle" onClick={toggleDarkMode}>
            <div className="theme-toggle-switch rounded-full flex" {...{switched:isDarkMode.toString()}}>
                <RiMoonFill
                    id="theme-toggle-moon"
                    size={18}
                    color={"white"}
                    className="no-display mx-auto flex-initial self-center" // add custom class name
                />
                <RiSunFill
                    id="theme-toggle-sun"
                    size={18}
                    className="mx-auto flex-initial self-center" // add custom class name
                />
            </div>
        </div>
    )
}