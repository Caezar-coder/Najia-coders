import React from 'react'
import { MdCancel } from 'react-icons/md'

const Aplication_Popup = ({open, onClose}) => {

    if(!open) return null
  return (
     <div className="popupBody">
              <div className="popupContent1">
                        <MdCancel className="closeIcon1" onClick={onClose} />
                        <h1>Applicstion Successful</h1>
                        <img src="/public/transactionPopup.png" alt="" />
              </div>
            </div>
  )
}

export default Aplication_Popup
