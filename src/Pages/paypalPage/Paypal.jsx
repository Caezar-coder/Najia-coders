import React, { useState } from 'react';
import { IoMdClose } from "react-icons/io";
import { FaCircleCheck } from "react-icons/fa6";
import './paypal.css';
import { useNavigate } from 'react-router-dom';
import DonationPopup from '../../Components/Donation_popup/DonationPopup';

const Paypal = () => {
    const [selectedAmount, setSelectedAmount] = useState(null);
    const [donationType, setDonationType] = useState("one-time");
    const [donationPopup, setDonationPopup]= useState(false) 
    const navigate = useNavigate();

    const amounts = [50, 100, 200, 500, 1000, 2000];
    const handleDonationpopup=()=>{
        setDonationPopup(true)
    }
    return (
        <div className='paypalWrapper'>
            <IoMdClose className='closePaypayPageIcon' onClick={() => navigate('/Get_Involved')} />

            <div className="paypalCArdAndHeadingWRapper">
                <div className="paypayHeading">
                    <img src="/paypal.png" alt="Paypal Logo" className='PaypalLogo' />
                    <p>Donate with Paypal</p>
                </div>

                <div className="paypalCard">
                    <div className="secureDonationWrapperCArd">
                        <p>Make a secure donation with Paypal</p>
                        <div className="oneTimeAndMonthHolder">
                            <p>
                                ONE TIME 
                                <input 
                                    type="checkbox" 
                                    checked={donationType === "one-time"} 
                                    onChange={() => setDonationType("one-time")} 
                                />
                            </p>
                            <p>
                                MONTHLY 
                                <input 
                                    type="checkbox" 
                                    checked={donationType === "monthly"} 
                                    onChange={() => setDonationType("monthly")} 
                                />
                            </p>
                        </div>
                    </div>

                    <div className="paypalPaymentWrapper">
                        <div className="amountWrapper">
                            {amounts.map((amount) => (
                                <div 
                                    key={amount} 
                                    className={`amountCard ${selectedAmount === amount ? 'selected' : ''}`}
                                    onClick={() => setSelectedAmount(amount)}
                                >
                                    <span>
                                        ${amount} {selectedAmount === amount && <FaCircleCheck size={13} color='#38995d'/>}
                                    </span>
                                </div>
                            ))}
                        </div>

                        <div className="amountOutput">
                            <h2>${selectedAmount || "0"}</h2> <p>USD</p>
                        </div>

                        <input name="comment" placeholder='Leave a comment' />
                    </div>
                    <button className="paypalDonateBtn" onClick={handleDonationpopup}>
                        DONATE ${selectedAmount}
                    </button>
                    <DonationPopup open={donationPopup}  onClose={()=> setDonationPopup(false)}/>
                </div>
            </div>
        </div>
    );
};

export default Paypal;
