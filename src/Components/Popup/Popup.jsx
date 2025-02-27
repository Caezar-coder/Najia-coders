import { MdCancel } from "react-icons/md"
import { RiBankCardFill } from "react-icons/ri";
import { IoLogoPaypal } from "react-icons/io5";
import { RiBankFill } from "react-icons/ri";

import "./Popup.css"
import { useNavigate } from "react-router-dom";

const Popup = ({ open, onClose}) => {
    const nav = useNavigate()

    const handleCardDonation =()=>{
        nav("/card_donation")
    }
    const handlePaypal =()=>{
        nav("/paypal")
    }
  if (!open) return null;
  return (
    <div className="popupBody">
      <div className="popupContent">
        <MdCancel className="closeIcon" onClick={onClose} />
         <h1>Donation Options</h1>
         <h3>Kindly use any of the payment options to make your donation.</h3>
         <div className="card_box">
            <div className="bank_card" onClick={handleCardDonation}>
                <RiBankCardFill style={{color: "gold", fontSize: "24px"}} />
                <h4 className="donation_text">Card Donation</h4>
            </div>
            <div className="bank_card" onClick={handlePaypal}>
                <IoLogoPaypal style={{color: "navy", fontSize: "24px"}} />
                <h4 className="donation_text">Donate with paypal</h4>
    
            </div>
            <div className="bank_card">
            <RiBankFill style={{color: "black", fontSize: "24px"}} />
            <h4 className="donation_text">Bank Transfer</h4>
            </div>
         </div>
      </div>
    </div>
  )
}

export default Popup

