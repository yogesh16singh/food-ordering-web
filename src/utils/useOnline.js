import { useState, useEffect } from "react"
const useOnline = () => {

    const [isNetConnected, setIsNetConnected] = useState(true);

    const handleOnline = () => {
        setIsNetConnected(true)
    }
    const handleOffline = () => {
        setIsNetConnected(false)
    }
    useEffect(() => {
        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        return () => {
            window.removeEventListener("online", handleOnline);
            window.removeEventListener("offline", handleOffline);
        }


    }, [])


    return isNetConnected;
}
export default useOnline;