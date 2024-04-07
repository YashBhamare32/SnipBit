import { Link } from "react-router-dom";

export function Topbar() {
    const navLinks = [
        { to: "/", text: "SnapBit", className: "font-bold text-3xl p-3" },
        { to: "/features", text: "Features", className: "p-3 text-xl" },
        { to: "/pricing", text: "Pricing", className: "p-3 text-xl" },
        { to: "/resources", text: "Resources", className: "p-3 text-xl" }
    ];

    return (
        <div className="flex justify-between items-center p-4 border-2 px-8">
            <div>
                {navLinks.map((link, index) => (
                    <Link key={index} to={link.to} className={link.className}>{link.text}</Link>
                ))}
            </div>
            <div>
                <Link to="/login" className="p-3 text-xl">Login</Link>
                <Link to="/signup" className="p-3 text-xl text-white rounded-md bg-fuchsia-300">Signup</Link>
            </div>
        </div>
    );
}
