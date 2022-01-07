import React, { useEffect, useState } from "react"
import { BannerSection } from "./styles.js";
import icon from "../../../data/assets/play_icon.svg";
import banner from "../../../data/assets/banner.png";

const Banner = () =>
{
    const [ toggle, setToggle ] = useState( 1 )

    const data = [
        {
            "id": 1,
            "title": "SpotCare",
            "tm": "™",
            "title2": "Klinik - in -a - Kiosk",
            "description": " Full - fledged Virtual Outpatient Clinic allowing diagnostic consultations",
        },
        {
            "id": 2,
            "title": " Provide Inclusive Healthcare ",
            "description": " Make Healthcare accessible, affordable and available to all",
        },
        {
            "id": 3,
            "title": " Provide Integrated Health Services",
            "description": "Connected Pharmacies and Labarotories can deliver home services",
        },
        {
            "id": 4,
            "title": "Supports remote Medical Camps",
            "description": "Vitals only mode allow patients to obtain master health checkup, with optional teleconsultation thereafter",
        },
    ]



    return (
        <BannerSection >
            <div id="banner_section" >
                <div id="matter" >
                    <div id="dots">
                        { data && data.map( datass =>
                            <div id="dot" className={ toggle === ( datass.id ) ? "active" : "notactive" } onClick={ () => setToggle( datass.id ) }></div>
                        ) }
                    </div>
                    { data && data.map( ( datas, i ) =>
                        <>
                            {
                                toggle === ( datas.id ) ?
                                    <div>
                                        <h1>{ datas.title } <span>{ datas.tm }</span> { datas.title2 }</h1>
                                        <h2>{ datas.description } </h2>
                                    </div>
                                    :
                                    ""
                            }
                        </>
                    ) }
                </div >

                <div id="button" >
                    <button>Dowload App</button>
                    <button><img src={ icon } alt="img" id='icon' /> Watch Video </button>
                </div>
            </div>
            <div id="banner_image" >
                <img src={ banner } alt="banner" />
            </div>
        </BannerSection>
    );
};

export default Banner;