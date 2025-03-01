import { useState } from "react"
import "./Card_Donations.css"
import { RiBankCardFill, RiBankFill } from "react-icons/ri"
import { FaRegCircle, FaCheckSquare } from "react-icons/fa"
import { IoLogoPaypal } from "react-icons/io5"
import DonationPopup from "../../Components/Donation_popup/DonationPopup"

const Card_Donation = () => {
  const [selectedPayment, setSelectedPayment] = useState("credit-card")
  const [coverFees, setCoverFees] = useState(true)
  const [donationPopup, setDonationPopup]= useState(false) 
  

  const handleDonationpopup=()=>{
    setDonationPopup(true)
}

  return (
    <div className="card_Donation_body">
      <div className="card_Donation_wrapper">
        <div className="card_Donation_wrapperHeader">
          <RiBankCardFill style={{ color: "gold", fontSize: "24px" }} />
          <h3 className="wrapper_texts">Donate with Credit Card</h3>
        </div>
        <div className="wrapper_content">
          <div className="credit_cardContainer">
            <div className="content_header">
              <div className="header_title">
                <RiBankCardFill />
                <h4>Credit Card</h4>
              </div>
              <FaRegCircle
                style={{ color: selectedPayment === "credit-card" ? "#38995D" : "", fontSize: "15px" }}
                onClick={() => setSelectedPayment("credit-card")}
              />
            </div>
            <input type="text" className="card_number" placeholder="Card number" />
            <div className="credit_card_details">
              <div className="expiry">
               
                <input type="text" placeholder="Exp Date" className="expiry"/>
              </div>
              <div className="cvv">
                
                <input type="text" placeholder="CVV" className="cvv"/>
              </div>
              <div className="billing_zip">
                <input type="text" placeholder="billing Zip" className="billing_zip"/>
              </div>
            </div>
          </div>
          <div className="creditCard_option">
            <div className="header_title">
              <RiBankFill />
              <h4>Bank Transfer</h4>
            </div>
            <FaRegCircle
              style={{ color: selectedPayment === "bank" ? "#38995D" : "", fontSize: "15px" }}
              onClick={() => setSelectedPayment("bank")}
            />
          </div>
          <div className="creditCard_option">
            <div className="header_title">
              <IoLogoPaypal />
              <h4>Paypal</h4>
            </div>
            <FaRegCircle
              style={{ color: selectedPayment === "paypal" ? "#38995D" : "", fontSize: "15px" }}
              onClick={() => setSelectedPayment("paypal")}
            />
          </div>
          <div className="creditCard_option1" onClick={() => setCoverFees(!coverFees)}>
            <FaCheckSquare style={{ color: coverFees ? "#38995D" : "" }} />
            <h4>Cover processing fees of $12.92</h4>
          </div>
          <button className="credit_btn" onClick={handleDonationpopup}>Donate now</button>
        </div>
        <DonationPopup open={donationPopup} onClose={()=> setDonationPopup(false)}/>
      </div>
    </div>
  )
}

export default Card_Donation

