import calculateTimeAgo from "../../utility/calculateTimeAgo";
import { useState, useEffect } from 'react';


function TimeAgo({date}: {date: Date}) {
    const [timeAgo, setTimeAgo] = useState(calculateTimeAgo(date));

    useEffect(()=> {
        const interval = setInterval(()=>{
            setTimeAgo(calculateTimeAgo(date));
        },60000)
        return ()=> clearInterval(interval);
    },[date]);


    return <span>{timeAgo}</span>;
       
}
export default TimeAgo;