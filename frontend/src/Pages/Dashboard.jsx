import { useEffect, useState } from "react";
import { Topbar } from "../Components/Topbar";
import axios from 'axios';
import { Shortened } from "../Components/Shortened";
import { InputLink } from "../Components/InputLink";
import { Card } from "../Components/Card";
import { MoreInfo } from "../Components/MoreInfo";
import { Link } from "react-router-dom";
import { Bottom } from "../Components/Bottom";
import { Boost } from "../Components/Boost";


export function Dashboard() {
    

    return (
        <div className="bg-slate-200">
            <Topbar />
            <Card bold={"More than just shorter Links"} description={"Build your brand's recognition and get detailed insights on how your links are performing."}/>
            <InputLink />
            {/* <MoreInfo bold={"Advanced Statistics"} description={"Track how your links are performing accross the web with our advanced statistics dashboard"}/> */}
            <Boost />
            <Bottom />
        </div>
    );
}
