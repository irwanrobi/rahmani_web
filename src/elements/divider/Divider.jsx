import React from "react";
import "./divider.scss";

const Divider = ({isTitle}) => {
    const styleDivider = {
        width: isTitle === "true" ? "100px" : "150px",
        marginTop: isTitle === "true" ? "20px" : "40px"
    }
    return <div className="divider" style={styleDivider}></div>;
};

export default Divider;
