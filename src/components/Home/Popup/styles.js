import styled from "styled-components"
import * as palette from "../../../styles/variables"

export const AppSection = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: black;
display: flex;
justify-content: center;
align-items: center;
 #qr_conatiner {
    width: 64.875vw;
    background: #ffffff;
    border-radius: 1vw;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    position: relative;
    padding: 7.1875vw 3.5vw;
  }
   #qr_conatiner_block1 {
    width: 27.6875vw;
    display: flex;
    height: fit-content;
  }
   #ql_container_matter_container {
    height: fit-content;
    margin-top: auto;
  }
   #ql_container_matter h1 {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: bold;
    font-size: 2.5vw;
    line-height: 3.3125vw;
    color: #ff4081;
    margin: 0;
    position: relative;
    text-align: left;
  }
   #rate2 {
    width: 1vw;
    margin: 0;
    position: absolute;
    top: 0.5vw;
  }
   #ql_container_matter p {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 0.9375vw;
    line-height: 1.5vw;
    text-align: justify;
    color: rgba(0, 0, 0, 0.7);
    margin: 0;
    margin-top: 1.1875vw;
    width: 25.375vw;
    text-align: left;
  }
   #qr_container_input_block {
    margin-top: 3.75vw;
  }
   #qr_container_input_block h1 {
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 1.25vw;
    line-height: 1.5vw;
    color: #000000;
    margin: 0;
    text-align: left;
  }
   #qr_container_input_block_container {
    display: grid;
    grid-template-columns: 16.6875vw 10vw;
    gap: 0.9375vw;
    grid-template-rows: 3vw;
    margin-top: 1.625vw;
  }
   #qr_container_input_block_container_container {
    border: 1px solid #999999;
    box-sizing: border-box;
    border-radius: 0.5vw;
    position: relative;
    overflow: hidden;
  }
   #qr_container_input_block_container_container input {
    width: 12.8125vw;
    height: 100%;
    position: absolute;
    right: 0;
    border: none;
    outline: none;
    background: transparent;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 400;
    font-size: 1vw;
    color: rgba(33, 46, 52);
    padding-right: 0.625vw;
  }
   #qr_container_input_block_container_container p {
    margin: 0;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: normal;
    font-size: 1vw;
    line-height: 0;
    color: #000000;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 6%;
    text-align: left;
  }
   #qr_container_input_block button {
    left: 21.1875vw;
    top: 21.125vw;
    background: #ff4081;
    border-radius: 0.5vw;
    border: none;
    outline: none;
    font-family: Source Sans Pro;
    font-style: normal;
    font-weight: 600;
    font-size: 1vw;
    color: #ffffff;
    cursor: pointer;
  }
   #qr_conatiner_block2 {
    text-align: center;
  }
   #qrs {
    display: flex;
    flex-direction: column;
    width: fit-content;
    margin: auto;
    height: 100%;
  }
   #qu_image_container img {
    margin: 0;
    width: 15vw;
  }
   #qr_image_button {
    display: flex;
    align-items: center;
    margin-top: auto;
  }
   #qr_image_button button {
    width: 10.125vw;
    height: 3vw;
    background: #212e34;
    border-radius: 0.5vw;
    margin: 0;
    font-style: normal;
    font-weight: 600;
    font-size: 1.125vw;
    color: #ffffff;
    border: none;
    outline: none;
    cursor: pointer;
    margin-left: 2vw;
    display: flex;
    align-items: center;
  }
   #qr_image_button button:first-child {
    margin-left: 0;
  }
   #qr_image_button button img {
    margin: 0 1vw 0 0.5vw;
    width: 1.5vw;
  }
`


export const VideoSection = styled.div`
position: fixed;
top: 0;
left: 0;
height: 100%;
width: 100%;
background: black;
display: flex;
justify-content: center;
align-items: center;
#banner_pop_video {
  width: 64.875vw;
  height: 35vw;
  border-radius: 1vw;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  overflow: hidden;
}
#banner_pop_video #player {
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 2vw;
}
`