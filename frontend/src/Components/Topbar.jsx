import { Link } from "react-router-dom"
import { Dashboard } from "../Pages/Dashboard"
export function Topbar(){
    return(
        <div className="flex justify-around p-4  border-2 ">
            <div className="">
                <Link className="font-bold text-3xl p-3 " to={"/"}>SnapBit</Link>
                <Link className="p-3 text-xl">Features</Link>
                <Link className="p-3 text-xl">Pricing</Link>
                <Link className="p-3 text-xl">Resources</Link>
            </div>
            <div>
                <Link className="p-3 text-xl ">Login</Link>
                <Link className="p-3 text-xl text-white rounded-md bg-fuchsia-300">Signup</Link>
            </div>
        </div>
    )
}