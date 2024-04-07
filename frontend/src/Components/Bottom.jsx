import { Link } from "react-router-dom";

export function Bottom(){
    return(
        <div className="bg-slate-950 text-white p-12 flex justify-around">
            <Link className="text-2xl font-bold p-3" to="/">SnipBit</Link>
            <div className="flex justify-between p-3 text-xl">
                <Link to={"https://www.youtube.com/@kiranbhamray2509"} className="mx-3">Youtube</Link>
                <Link to={"https://www.instagram.com/yash.bhamare32/"} className="mx-3">Instagram</Link>
                <Link to={"https://twitter.com/YashBhamare2003"} className="mx-3">X</Link>
            </div>
        </div>
    )
}