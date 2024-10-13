import React from "react";
import Banner from '../components/Banner';
import Header from '../components/Header';


export default function Home(){
    return(
        <>
            <div className="parallax">
                <div className="stars"></div>
                <Banner />
                {/* <Header /> */}
            </div>
        </>
    );
}
