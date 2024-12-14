import { useState, useEffect } from "react";
import { BACKEND_URL } from "../libs/const"

// サービスの動作状況・参加人数を取得する
function useServiceState() {
    const [ isServiceRunning, setIsServiceRunning ] = useState<boolean | undefined>(undefined);
    const [ playerNumber, setPlayerNumber ] = useState<number | null | undefined>(undefined);

    useEffect(() => {
        fetch(BACKEND_URL + "/api/serviceState").then(res => res.json()).then((json) => {
            setIsServiceRunning(json.isServiceRunning);
            setPlayerNumber(json.playerNumber);
        })
    }, []);
    
    return {
        isServiceRunning,
        playerNumber
    }
}

export default useServiceState;