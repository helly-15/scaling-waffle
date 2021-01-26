import './Catozitory.scss';
import React from "react";
import SectionTitle from "../SectionTitle";
function Catozitory(props){
    //const {title, className, viewBox, x} =props;
    return(
        <section className='catository'>
            <SectionTitle title = {'Projects'} viewBox ={"0 0 1440 320"} x ={"600"}/>
            <div className='catository-tank'>
                <a href ='https://datagrid-virtualization-localstorage.netlify.app/' className='catository-tank__link' target='_blank' rel="noreferrer">
                    <span className='catository-tank__link_text_one' >
                        React+Redux
                    </span>
                    <div className='catository-tank__fish_one'></div>
                </a>
                <a href ='https://musing-cray-b5e1fc.netlify.app' className='projects-text__link' target='_blank' rel="noreferrer">
                    <span className='catository-tank__link_text_two' >
                        Group project+Git
                    </span>
                    <div className='catository-tank__fish_two'></div>
                </a>
                <a href ='https://kytinstudio.netlify.app' className='projects-text' target='_blank' rel="noreferrer">
                    <span className='catository-tank__link_text_three' >
                        Mobile games site
                    </span>
                    <div className='catository-tank__fish_three'></div>
                </a>

                <a href ='https://kytinwebstudio.netlify.app' className='projects-text' target='_blank' rel="noreferrer">
                    <span className='catository-tank__link_text_four' >
                        SCSS+HTML
                    </span>
                <div className='catository-tank__fish_four'></div>
                </a>
            </div>

        </section>
    )
}

export default Catozitory;
