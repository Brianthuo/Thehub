import React from 'react'
import './CheckoutPage.scss'

const CheckoutPage = () => {
  return (
    <div className='CheckoutPage'>
        <div className="CustomerInfo">
        <h1>Checkout</h1>
            <div className="PersonalInfo">
          <h2>Personal Info</h2>
                
                <div className="Datainfo">
                    <label htmlFor="">Name</label>
                    <input type="text" />
                </div>
                <div className="Datainfo">
                    <label htmlFor="">Email</label>
                    <input type="email" />
                </div>
                <div className="Datainfo">
                    <label htmlFor="">Phone Number</label>
                    <input type="Number" />
                </div>
                <div className="Datainfo">
                    <label htmlFor="">Recidential address</label>
                    <input type="text" />
                </div>
            </div>
            <div className="PaymentMethod">
                    <h2>Payment Method</h2>
                <div className="mainPaymanetTypes">
                    <div className="paymenttype">
                        <input type="radio" />
                        <label htmlFor="">Debit Card</label>
                    </div>
                    <div className="paymenttype">
                        <input type="radio" />
                        <label htmlFor="">M-pesa</label>
                    </div>
                </div>
                <div className="paymentInfo">
                    <input type="Number" placeholder='Phone Number'/>
                </div>
            </div>
            <div className="amount">
                 <h1>Billing Amount</h1>
                <h2>Subtotal:  KES 90,000/=</h2>
                <h2>Discount: KES 2,000/=</h2>
                <h1>Total: KES 87,000/= </h1>
            <button>Checkout</button>
            </div>
        </div>
    </div>
  )
}

export default CheckoutPage