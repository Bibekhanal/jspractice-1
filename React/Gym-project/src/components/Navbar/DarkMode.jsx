
import { useEffect, useState } from "react";
import { BiSolidSun,BiSolidMoon  } from "react-icons/bi";
const DarkMode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    useEffect(() => {
        const element = document.documentElement;
        if (theme === "dark") {
            element.classList.add("dark");
            localStorage.setItem("theme", "dark");
        }
        else{
            element.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [theme]);
    return (
        <div>
            {theme ==="dark" ? (
            <BiSolidMoon  className="text-2xl" onClick={() => setTheme("light")} />
            ) : (
            <BiSolidSun  className="text-2xl" onClick={() => setTheme("dark")} />
            )}
        
</div>
    );
};

export default DarkMode;
