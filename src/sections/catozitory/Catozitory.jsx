import './Catozitory.scss';
import React from "react";
import SectionTitle from "../SectionTitle";
function Catozitory(props){
    //const {title, className, viewBox, x} =props;
    return(
        <section className='catository'>
            <SectionTitle title = {'Catository'} viewBox ={"0 0 1440 320"} x ={"550"}/>
            <div className='catository-tank'>
                <div className='catository-tank__fish_one'>

                </div>
                <div className='catository-tank__fish_two'>

                </div>
                <div className='catository-tank__fish_three'>

                </div>
            </div>

        </section>
    )
}

export default Catozitory;
