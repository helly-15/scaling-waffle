import './Catozitory.scss';
import React from "react";
import SectionTitle from "../SectionTitle";
function Catozitory(props){
    //const {title, className, viewBox, x} =props;
    return(
        <section className='catository'>
            <SectionTitle title = {'Projects'} viewBox ={"0 0 1440 320"} x ={"600"}/>
            <div className='catository-tank'>

                <div className='catository-tank__fish_one'>
                    <a href ='https://datagrid-virtualization-localstorage.netlify.app/' className='projects-text'>
                        React+Redux
                    </a>
                </div>
                <div className='catository-tank__fish_two'>
                    <a href ='https://musing-cray-b5e1fc.netlify.app' className='projects-text'>
                        Group project+Git
                    </a>
                </div>
                <div className='catository-tank__fish_three'>

                </div>
                <div className='catository-tank__fish_four'>

                </div>
            </div>

        </section>
    )
}

export default Catozitory;
