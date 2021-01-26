import './Projects.scss';
import React from "react";
import SectionTitle from "../SectionTitle";
function Projects(props){
    //const {title, className, viewBox, x} =props;
    return(
        <section className='projects' id='Projects'>
            <SectionTitle title = {'Projects'} viewBox ={"0 0 1440 320"} x ={"600"}/>
            <div className='projects-tank'>
                <a href ='https://datagrid-virtualization-localstorage.netlify.app/' className='projects-tank__link' target='_blank' rel="noreferrer">
                    <span className='projects-tank__link_text_one' >
                        React+Redux
                    </span>
                    <div className='projects-tank__fish_one'/>
                </a>
                <a href ='https://musing-cray-b5e1fc.netlify.app' className='projects-tank__link' target='_blank' rel="noreferrer">
                    <span className='projects-tank__link_text_two' >
                        Group project+Git
                    </span>
                    <div className='projects-tank__fish_two'/>
                </a>
                <a href ='https://kytinstudio.netlify.app' className='projects-tank__link' target='_blank' rel="noreferrer">
                    <span className='projects-tank__link_text_three' >
                        Mobile games site
                    </span>
                    <div className='projects-tank__fish_three'/>
                </a>

                <a href ='https://kytinwebstudio.netlify.app' className='projects-tank__link' target='_blank' rel="noreferrer">
                    <span className='projects-tank__link_text_four' >
                        SCSS+HTML
                    </span>
                <div className='projects-tank__fish_four'></div>
                </a>
            </div>

        </section>
    )
}

export default Projects;
