import React from 'react'
import "./Card_Donations.css"
import { RiBankCardFill } from "react-icons/ri";
import { FaRegCircle } from "react-icons/fa";
import { IoLogoPaypal } from "react-icons/io5";
import { RiBankFill } from "react-icons/ri";
import { FaCheckSquare } from "react-icons/fa";


const Card_Donation = () => {
  return (
    <div className='card_Donation_body'>
      <div className="card_Donation_wrapper">
        <div className="card_Donation_wrapperHeader">
            <RiBankCardFill style={{color: "gold", fontSize: "24px"}}/>
            <h3 className='wrapper_texts'>Donate with Credit Card</h3>
        </div>
        <div className="wrapper_content">
            <div className="credit_cardContainer">
                <div className="content_header">
                    <div className="header_title">
                        <RiBankCardFill />
                        <h4>Credit Card</h4>
                    </div>
                    <FaRegCircle style={{color: "#38995D", fontSize: '15px'}}/>
                </div>
                <input type="text" className='card_number' placeholder='Card Card number'/>
                <div className="credit_card_details">
                    <div className="expiry">
                        <small>Exp Date</small>
                    </div>
                    <div className="cvv">
                    <small>CVV</small>

                    </div>
                    <div className="billing_zip">
                    <small>Billing Zip</small>
                    </div>
                </div>

            </div>
            <div className="creditCard_option">
            <div className="header_title">
                        <RiBankFill />
                        <h4>Bank Transfer</h4>
                    </div>
                    <FaRegCircle style={{ fontSize: '15px'}}/>
            </div>
            <div className="creditCard_option">
            <div className="header_title">
                        <IoLogoPaypal />
                        <h4>Paypal</h4>
                    </div>
                    <FaRegCircle style={{ fontSize: '15px'}}/>
            </div>
            <div className="creditCard_option1">
                <FaCheckSquare />
                <h4>Cover processing fees of $12.92</h4>
            </div>
            <button className='credit_btn'>Donate now</button>
        </div>
      </div>
    </div>
  )
}

export default Card_Donation
