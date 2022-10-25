import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop(){
    const {pathname} = useLocation();
    useEffect(() => {
        console.log("farnco")
        window.scrollTo(0,0);
    });

    return null;
}