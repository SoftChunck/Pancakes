import './Expired_Card.css'
import {AiOutlinePlayCircle} from 'react-icons/ai'
import React from 'react';
const Expired_Card = (props) => {
    React.useEffect(()=>{
    })
    return ( 
        <div className='Expired-Card br-1 bg-white col-2'>
            <div className='exp-header text-disable d-flex flex-row justify-content-between px-3 py-1'>
                <div className='d-flex flex-row'>
                    <svg viewBox="0 0 24 24" width="21px" color="textDisabled" className='svg-disable' xmlns="http://www.w3.org/2000/svg"><path d="M12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22ZM12 4C16.42 4 20 7.58 20 12C20 13.85 19.37 15.55 18.31 16.9L7.1 5.69C8.45 4.63 10.15 4 12 4ZM5.69 7.1L16.9 18.31C15.55 19.37 13.85 20 12 20C7.58 20 4 16.42 4 12C4 10.15 4.63 8.45 5.69 7.1Z"></path></svg>
                    <h3 className='font_kB fs-4 ps-2 m-0'>Expired</h3>
                </div>
                <p className='px-4 py-1 m-0'>#1234</p>
            </div>
            <div className='exp-body justify-content-center row m-0 py-3'>
                <div className='position-relative col-10'>
                    <svg height="65px" width="240px" viewBox="0 0 240 65" color="text" xmlns="http://www.w3.org/2000/svg"><g filter="url(#filter0_i)"><path d="M10.0001 49.2757L10.0003 64H234L234 49.2753C234 42.5136 229.749 36.4819 223.381 34.2077L138.48 3.8859C127.823 0.0796983 116.177 0.0796931 105.519 3.8859L20.6188 34.2076C14.2508 36.4819 10.0001 42.5138 10.0001 49.2757Z" fill="#31D0AA"></path></g><defs><filter id="filter0_i" x="10.0001" y="1.03125" width="224" height="62.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                    <div className='text-center up-text text-white'>
                        <h5 className='m-0 p-0' >UP</h5>
                        <p>1.55x Payout</p>
                    </div>
                </div>
                <div className='exp-inner-body col-10 p-3'>
                    <p>LAST PRICE</p>
                    <div className='d-flex flex-row align-items-ceneter justify-content-between'>
                        <h4>${props.last_price}</h4>
                        <div className='bid-expired d-flex flex-row align-items-center justify-content-center col-4 px-1'>
                            <h5 className='text-white m-0 ps-2'>${props.final_price}</h5>
                        </div>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center px-2 mt-4'>
                        <h5>Locked Price</h5>
                        <h6>${props.last_price}</h6>
                    </div>
                    <div className='d-flex flex-row justify-content-between align-items-center px-2'>
                        <h5><b>Prize Pool</b></h5>
                        <h5><b>32.571 Cake</b></h5>
                    </div>
                </div>
                <div className='position-relative col-10'>
                    <svg height="65px" width="240px" viewBox="0 0 240 65" xmlns="http://www.w3.org/2000/svg" ><g filter="url(#filter0_i)"><path d="M10.0001 15.7243L10.0003 1H234L234 15.7247C234 22.4864 229.749 28.5181 223.381 30.7923L138.48 61.1141C127.823 64.9203 116.177 64.9203 105.519 61.1141L20.6188 30.7924C14.2508 28.5181 10.0001 22.4862 10.0001 15.7243Z" fill="#EFF4F5"></path></g><defs><filter id="filter0_i" x="10.0001" y="1" width="224" height="62.9688" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood><feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"></feColorMatrix><feOffset></feOffset><feGaussianBlur stdDeviation="1"></feGaussianBlur><feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"></feComposite><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.15 0"></feColorMatrix><feBlend mode="normal" in2="shape" result="effect1_innerShadow"></feBlend></filter></defs></svg>
                    <div className='text-center down-text text-dark text-bottom'>
                        <p className='m-0 p-0'>1.55x Payout</p>
                        <h5 className='m-0 p-0'>DOWN</h5>
                    </div>
                </div>
            </div>
        </div>
     );
}
 
export default Expired_Card;