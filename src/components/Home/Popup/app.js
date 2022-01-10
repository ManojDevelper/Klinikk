import React, { useState } from "react"
import qr1 from "../../../data/assets/patentqr.png"
import playstorebtn from "../../../data/assets/playstore_btn.svg"
import appstorebtn from "../../../data/assets/appstore_btn.svg"
import video from "../../../data/assets/bannerpop.mp4";
import { API_ROOT } from "gatsby-env-variables";
import { AppSection } from "./styles";
import { CloseOutlined, SmileOutlined } from '@ant-design/icons';
import { message } from 'antd';

const App = ( ) =>
{

    /*==================Api calling for patient form====================*/
    const [errors, setErrors] = useState({});
    const [mobile_no, setMobile_no] = useState("")
    const [patFinal, setPatFinal] = useState("")
    const Patentvalidation = () => {
        let errors = {};
        if (!mobile_no) {
            errors.mobile_no = "**Enter your Mobile Number"
        } else {
            errors.mobile_no = ""
        } if (patFinal.status === true) {
            success()
            setMobile_no("")
        } else {
            error()
        }
        return errors;
    }
    const success = () => {
        message.success('Registered');
      };
      
      const error = () => {
        message.error('Error');
      };
      const warning = () => {
        message.warning('Enter your mobile number');
      };

    async function sendPat() {
        let item = { mobile_no }

        let patResult = await fetch(API_ROOT + "/api/Spotcare/getPatientLink", {
            method: "POST",
            body: JSON.stringify(item),
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json",
            },
        })
        patResult = await patResult.json()
        setErrors(Patentvalidation())
        setPatFinal(patResult)
        console.log(patFinal)
    }


    return (
        <AppSection >
            <div id="qr_conatiner">
                <div id="qr_conatiner_block1">
                    <div id="ql_container_matter_container">
                        <div id="ql_container_matter">
                            <h1>SpotCare® For Patients & General Public</h1>
                            <p>Adding value to the lives of patients, doctors, health workers, pharmacies, diagnostics and healthcare institutions with the help of new-age technology</p>
                        </div>
                        <div id="qr_container_input_block" style={ { position: `relative` } }>
                            <h1>Get the link to Download the App</h1>
                            <div id="qr_container_input_block_container">

                                <div id="qr_container_input_block_container_container">
                                    <p>+91</p>
                                    <input type="text" placeholder="Enter Mobile Number" value={ mobile_no } onChange={ ( e ) => setMobile_no( e.target.value || "" ) } maxLength={ 10 } minLength={ 10 } onKeyPress={ event => { if ( !/[0-9]/.test( event.key ) ) { event.preventDefault() } } }/>
                                </div>
                                { ( !mobile_no || mobile_no.length < 10 ) ? (
                                    <button onClick={warning} style={ { background: `gray` } }>Get App Link</button> ) : (
                                    <button onClick={sendPat}>Get App Link</button>
                                ) }
                            </div>
                            { errors.mobile_no && <p className="errors" style={ { fontSize: `1vw`, color: `orange`, position: `absolute`, margin: `0`, transition: `0.5s ease` } }>Mobile Number</p> }
                        </div>
                    </div>
                </div>
                <div id="qr_conatiner_block2">
                    <div id="qrs">
                        <div id="qu_image_container">
                            <img src={ qr1 } alt="qr" />
                        </div>
                        <div id="qr_image_button">
                            <button ><img src={ playstorebtn } alt="img" />Google Play</button>
                            <button ><img src={ appstorebtn } alt="img" />App Store</button>
                        </div>
                    </div>
                </div>
            </div>
        </AppSection>
    );
};

export default App;