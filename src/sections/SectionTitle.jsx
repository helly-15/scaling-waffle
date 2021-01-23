import './SectionTitle.scss';
import React from "react";
function SectionTitle(props){
    const {title} =props;
    return(
        <svg viewBox="0 0 1440 320">
            <path id="curve" fill="#0099ff" fill-opacity="1" d="M0,160L48,181.3C96,203,192,245,288,229.3C384,213,480,139,576,106.7C672,75,768,85,864,106.7C960,128,1056,160,1152,192C1248,224,1344,256,1392,272L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
            <text x="550">
                <textPath href="#curve">
                    { title }
                </textPath>
            </text>
        </svg>
    )
}

export default SectionTitle;
