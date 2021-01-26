import './Paw.scss';
import paw from '../assets/CatPaw.png'
import React from "react";
function Paw(props){
    const {className, text} =props;
    return(

        <li className={ `${className} navigation-paw`} onAnimationEnd={(e)=>{e.target.style.opacity = '1'}} onClick={(e)=>{window.location = `#${text}`}}>
                    <img className={ 'navigation-paw__img'} src={paw} alt='a cat paw'/>

            <span className={'navigation-paw__text'}>
                {text}
            </span>

        </li>
    )
}

export default Paw;



