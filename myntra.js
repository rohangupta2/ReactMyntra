import React from "react";
import ReactDom from "react-dom/client"



function Greet(props){
    return <h1>ram ram ji {props.name}</h1>

}
const element1 = <Greet name="ram"/>


ReactDom.createRoot(document.getElementById("root")).render(element1);


