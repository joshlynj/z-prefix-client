import React from 'react';
import './pages.css';

//Components Import
import '../components/button.css';

//Pages Import

export default function Home (){
    return(
        <div className = 'overall-home'>
            <div className='home-page'>
                <img src ="https://mountainvieweyes.com/wp-content/uploads/2017/11/slider2.jpg" alt = "mountain" />
            </div>
            <div class = 'text-on-background'>
                <h3> A Blog of Our Own </h3>
            </div>
        </div>
    )
};