import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const onToken = token=>{
    console.log(token);
    alert('Payment Successful')
}

const StripCheckoutButton = ({price})=>{
    const priceForStripe = price*100;
    const publishableKey = 'pk_test_51JCYwTBxUOu6Q8ESIUVxyVRKP8HYBBBcRzVdZE1mBQrwvXGtxTSCRLfvS2SSObSfWH8WV7oI74pHcbKzONFhSvne00jTAaD7Xf'

    return(
        <StripeCheckout
            label='Pay Now'
            name ='Amr Clothing Ltd.'
            billingAddress
            shippingAddress
            image='https://svgshare.com/i/CUz.svg'
            description={`Your total is $${price} `}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
            
        />
    )
}


export default StripCheckoutButton;