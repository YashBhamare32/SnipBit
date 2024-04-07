import { useEffect, useState } from "react";
import { Topbar } from "../Components/Topbar";
import axios from 'axios';
export function Dashboard(){
    const [inputLink , setInputLink] = useState("");
    const handleChange = (e)=>{
        setInputLink(e.target.value);
    };
    const handleClick = async ()=>{
        const res = await axios.post("https://cleanuri.com/api/v1/shorten" , {
            "url" : inputLink
        });
        console.log(res);
    }
    return <div>
        <Topbar />
        <input type="text" placeholder="Enter link" value={inputLink} onChange={handleChange} className="border-2"/>
        <button onClick={handleClick}>Shorten URL</button>
    </div>
}