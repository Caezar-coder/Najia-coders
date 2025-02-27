import React from 'react'
import "./DonationPopup.css"
import { MdCancel } from 'react-icons/md';

const DonationPopup = ({ open, onClose}) => {


  if (!open) return null;

  return (
     <div className="popupBody">
          <div className="popupContent1">
                    <MdCancel className="closeIcon1" onClick={onClose} />
                    <h1>Transaction Successful</h1>
                    <img src="/public/transactionPopup.png" alt="" />
          </div>
        </div>
  )
}

export default DonationPopup

