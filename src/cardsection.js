
import React from 'react';
import './CardSectionStyles.css'
import {ElementsConsumer, CardElement} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';



const CARD_ELEMENT_OPTIONS = {
  style: {
    base: {
      color: "#32325d",
      fontFamily: '"Helvetica Neue", Helvetica, sans-serif',
      fontSmoothing: "antialiased",
      fontSize: "16px",
      "::placeholder": {
        color: "#aab7c4",
      },
    },
    invalid: {
      color: "#fa755a",
      iconColor: "#fa755a",
    },
  },
};

function CardSection() {
  return (
    <form > 
    <label>
      Card details
      <CardElement options={CARD_ELEMENT_OPTIONS} />
    </label>
   </form>
  );
};



export default CardSection;
