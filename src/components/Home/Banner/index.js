import React, { useState } from "react"
import { BannerSection } from "./styles.js";
import icon from "../../../data/assets/play_icon.svg";
import banner from "../../../data/assets/banner.png";
import { CloseOutlined } from '@ant-design/icons';
import { Carousel, Modal } from 'antd';
import App from "../Popup/app";
import Video from "../Popup/Video";

const Banner = () =>
{
    const [ toggle, setToggle ] = useState()
    const [ videoPop, setVideoPop ] = useState()

    const data = [
        {
            "title": "SpotCare",
            "tm": "™",
            "title2": "Klinik - in -a - Kiosk",
            "description": " Full - fledged Virtual Outpatient Clinic allowing diagnostic consultations",
        },
        {
            "title": " Provide Inclusive Healthcare ",
            "description": " Make Healthcare accessible, affordable and available to all",
        },
        {
            "title": "Provide Inclusive Healthcare ",
            "description": "Make Healthcare accessible, affordable and available to all",
        },
        {
            "title": "Provide Integrated Health Services",
            "description": "Connected Pharmacies and Labarotories can deliver home services",
        },
        {
            "title": "Supports remote Medical Camps",
            "description": "Vitals only mode allow patients to obtain master health checkup, with optional teleconsultation there after",
        },
        {
            "title": "Configurable and Immediately Deployable",
            "description": "SpotCare platform is designed to be configurable by location, and readily deployable at various locations",
        },
        {
            "title": "A SaaS Health Tech Platform",
            "description": "SpotCare App is a licensed product offered on a Software-as-a-Service model",
        },
        {
            "title": "HD Quality Video Consultation, one-touch connect",
            "description": "Patients at our SpotCare Kiosk gets instantly connected to a doctor with a one-touch operation",
        },
        {
            "title": "Assured Patient Privacy and Data Security",
            "description": "Built-in patient data security and privacy as per the government standards and regulations",
        },
        {
            "title": "Grow Hospital FootPrint ",
            "description": "Extends Hospitals network through deployment to Outreach centers & facilitating local communities with ease of access to a hospital network",
        },
        {
            "title": "A boon for the Elderly ",
            "description": "Provides round-the-clock healthcare support to old-age homes and elderly societies",
        },
        {
            "title": "Community-centric health facility, benefits societies at large ",
            "description": "",
        },
    ]




    return (
        <>
            <BannerSection >
                <div id="banner_section" >
                    <div id="matter" >
                        <Carousel autoplay>
                            { data && data.map( ( content, i ) =>
                                <div key={ i }>
                                    <h1>{ content.title }</h1>
                                    <h2>{ content.description }</h2>
                                </div>
                            ) }
                        </Carousel>
                    </div >

                    <div id="button" >
                        <button onClick={ () => setToggle( true ) }>Dowload App</button>
                        <button onClick={() => setVideoPop(true)}><img src={ icon } alt="img" id='icon' /> Watch Video </button>
                    </div>
                </div>
                <div id="banner_image" >
                    <img src={ banner } alt="banner" />
                </div>
                <Modal
                    centered
                    visible={ toggle }
                    width={ 1000 }
                    footer={ null }
                    closeIcon={ <CloseOutlined style={ { color: `white` } } /> }
                    okButtonProps={ { style: { display: 'none' } } }
                    cancelButtonProps={ { style: { display: 'none' } } }
                    onCancel={ () => setToggle( false ) }
                    bodyStyle={ { backgroundColor: `white`, height: `100%`, padding: `0` } }
                    style={ { backgroundColor: `white`, height: `100%`, padding: `0` } }
                    maskStyle={ { backgroundColor: `white`, height: `fit-content`, padding: `0` } }
                >
                    <App />
                </Modal>
                <Modal
                    centered
                    visible={ videoPop }
                    width={ 1000 }
                    footer={ null }
                    closeIcon={ <CloseOutlined style={ { color: `white` } } /> }
                    okButtonProps={ { style: { display: 'none' } } }
                    cancelButtonProps={ { style: { display: 'none' } } }
                    onCancel={ () => setVideoPop(false) }
                    bodyStyle={ { backgroundColor: `white`, height: `100%`, padding: `0` } }
                    style={ { backgroundColor: `white`, height: `100%`, padding: `0` } }
                    maskStyle={ { backgroundColor: `white`, height: `fit-content`, padding: `0` } }
                >
                    <Video />
                </Modal>
            </BannerSection>


        </>
    );
};

export default Banner;