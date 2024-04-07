import { useState } from "react";
import { Shortened } from "./Shortened";
import axios from 'axios';
export function InputLink(){
    const [inputLink, setInputLink] = useState("");
    const [shortUrl , setShortUrl] = useState("");

    const handleChange = (e) => {
        setInputLink(e.target.value);
    };

    const handleClick = async () => {
        const encodedParams = new URLSearchParams();
        encodedParams.set('url', inputLink);

        const options = {
        method: 'POST',
        url: 'https://url-shortener-service.p.rapidapi.com/shorten',
        headers: {
            'content-type': 'application/x-www-form-urlencoded',
            'X-RapidAPI-Key': '7d061289a7msh20b950ecefa532bp1a0884jsn33af8ba4bb44',
            'X-RapidAPI-Host': 'url-shortener-service.p.rapidapi.com'
        },
        data: encodedParams,
        };
        try {
            const res = await axios.request(options);
            setShortUrl(res.data.result_url); 
            console.log(res.data.result_url);
        } catch (error) {
            console.error("Error:", error);
        }
    };
    return(
        <div>
            <div className="flex justify-center items-center p-12 mx-12 bg-[url('/background.jpg')]">
                <input type="text" placeholder="Enter link" value={inputLink} onChange={handleChange} className="p-2 mx-2 border-2 flex-grow h-16 rounded-md text-xl" />
                <button onClick={handleClick} className="bg-teal-200 rounded-md mx-2 p-2 px-4">Shorten it!</button>
            </div>
            <Shortened url={shortUrl}/>
        </div>
    )
}