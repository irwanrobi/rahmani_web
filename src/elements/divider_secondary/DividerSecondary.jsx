import React from "react";
import "./divider_secondary.scss";

const Divider = ({isTitle}) => {
    const styleDivider = {
        width: isTitle === "true" ? "100px" : "150px",
        marginTop: isTitle === "true" ? "20px" : "40px"
    }
    return <div className="divider divider_secondary" style={styleDivider}></div>;
};

export default Divider;
