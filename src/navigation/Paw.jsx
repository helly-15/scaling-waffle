import './Paw.scss';
import paw from '../assets/CatPaw.png'
import React from "react";
function Paw(props){
    const {className, text} =props;
    return(

        <li className={ `${className} navigation-paw`}>
            {/*<svg  className={ `${className} navigation-paw__description`}>*/}
            {/*    <path id="curve" d="M6,150C49.63,93,105.79,36.65,156.2,47.55,207.89,58.74,213,131.91,264,150c40.67,14.43,108.57-6.91,229-145" />*/}
            {/*    <text x="25">*/}
            {/*        <textPath href="#curve">*/}
            {/*            Dangerous Curves Ahead*/}
            {/*        </textPath>*/}
            {/*    </text>*/}
            {/*</svg>*/}

            <svg className={ 'navigation-paw__text'} viewBox="50 0 200 200">
                <path id="curve" d="M73.2,148.6c4-6.1,65.5-96.8,178.6-95.6c111.3,1.2,170.8,90.3,175.1,97" />
                <text >
                    <textPath href="#curve">
                        Dangerous Curves Ahead
                    </textPath>
                </text>
            </svg>
            <div>
                <img className={ 'navigation-paw__img'} src={paw}/>
            </div>

        </li>
    )
}

export default Paw;



