import { useEffect, useState } from "react";
import { RiSunFill, RiMoonFill } from '@remixicon/react'

export function IsDarkMode() {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem("switch-theme") === "true";
    } else {
        return false;
    }
}

export function IsLightMode() {
    if (typeof window !== 'undefined') {
        return window.localStorage.getItem("switch-theme") === "false";
    } else {
        return false;
    }
}

export default function ThemeSwitcher(options: {id: string}) {
    const [switched, setSwitched] = useState<boolean>(() => {
        if (typeof window !== 'undefined') {
            const item = window.localStorage.getItem(`switch-${options.id}`);

            return item ? (item === "true" ? true : false) : false;
        }else{
            return false;
        }
    });

    // Update local storage every time switched is changed
    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem(`switch-${options.id}`, switched.toString());

            if (switched) {
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
        }
    }, [switched]);

    return (
        <div className="border theme-toggle" onClick={() => {setSwitched(!switched)}}>
            <div className="theme-toggle-switch rounded-full flex" {...{switched:switched.toString()}}>
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