import { useEffect, useState } from "react";
import { Topbar } from "../Components/Topbar";
import axios from 'axios';
import { Shortened } from "../Components/Shortened";

export function Dashboard() {
    const [inputLink, setInputLink] = useState("");
    const [shortUrl , setShortUrl] = useState("");

    const handleChange = (e) => {
        setInputLink(e.target.value);
    };

    const handleClick = async () => {
        const inputBody = {
            "url": inputLink
        };

        try {
            const res = await axios.post("http://localhost:3000/shorten", inputBody);
            setShortUrl(res.data.shortUrl); // Assuming the server returns { shortUrl }
            console.log(res.data.shortUrl);
        } catch (error) {
            console.error("Error:", error);
        }
    };

    return (
        <div>
            <Topbar />
            <div className="flex justify-center items-center p-12">
                <input type="text" placeholder="Enter link" value={inputLink} onChange={handleChange} className="p-2 m-2 border-2 flex-grow h-12" />
                <button onClick={handleClick} className="bg-fuchsia-300 rounded-md m-2 p-2 text-white">Shorten URL</button>
            </div>
            <Shortened url={shortUrl}/>
        </div>
    );
}
