import './Catository.scss'
import React from "react";
import SectionTitle from "../SectionTitle";
import gitHub from '../../assets/github.svg'
function Catository(props){
    //const {className, text} =props;
    return(

     <section className='catository' id='Catository' >
         <SectionTitle title = {'Catository'} viewBox ={"0 0 1440 320"} x ={"550"}/>
         <a href ='https://github.com/helly-15' className='catository-link' target='_blank' rel="noreferrer">
             <img src={ gitHub } alt='github link' className='catository-github'/>
         </a>

     </section>
    )
}

export default Catository;
