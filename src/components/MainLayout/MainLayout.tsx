import React,{ReactNode} from "react";
import "./MainLayout.css"
import {M} from "vite/dist/node/types.d-jgA8ss1A";
const MainLayout=(props:{children:ReactNode})=>{
    return (
        <div className={"ml_container"}>
            {props.children}
        </div>
    )
}
export default MainLayout;