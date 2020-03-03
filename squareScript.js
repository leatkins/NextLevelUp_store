// ----- THE SQUAQRE SCRIPT ------

  // Create and initialize a payment form object
  const paymentForm = new SqPaymentForm({
    // Initialize the payment form elements

    //TODO: Replace with your sandbox application ID
    applicationId: "sq0idp-vtsYYsEt3hNRtv_m3GX9_A",
    inputClass: 'sq-input',
    autoBuild: false,
    // Customize the CSS for SqPaymentForm iframe elements
    inputStyles: [{
        fontSize: '16px',
        lineHeight: '24px',
        padding: '16px',
        placeholderColor: '#a0a0a0',
        backgroundColor: 'transparent',
    }],
    // Initialize the credit card placeholders
    cardNumber: {
        elementId: 'sq-card-number',
        placeholder: 'Card Number'
    },
    cvv: {
        elementId: 'sq-cvv',
        placeholder: 'CVV'
    },
    expirationDate: {
        elementId: 'sq-expiration-date',
        placeholder: 'MM/YY'
    },
    postalCode: {
        elementId: 'sq-postal-code',
        placeholder: 'Postal'
    },
    // SqPaymentForm callback functions
    callbacks: {
        /*
        * callback function: cardNonceResponseReceived
        * Triggered when: SqPaymentForm completes a card nonce request
        */
        cardNonceResponseReceived: function (errors, nonce, cardData) {
        if (errors) {
            // Log errors from nonce generation to the browser developer console.
            console.error('Encountered errors:');
            errors.forEach(function (error) {
                console.error('  ' + error.message);
            });
            alert('Encountered errors, check browser developer console for more details');
            return;
        }

           //TODO: Replace alert with code in step 2.1
           fetch('process-payment', {
method: 'POST',
headers: {
 'Accept': 'application/json',
 'Content-Type': 'application/json'
},
body: JSON.stringify({
 nonce: nonce , 
 amount: parseInt(document.getElementById("squareCode").value)
})
})
.catch(err => {
alert('Network error: ' + err);
})
.then(response => {
if (!response.ok) {
 return response.text().then(errorInfo => Promise.reject(errorInfo));
}
return response.text();
})
.then(data => {
console.log(JSON.stringify(data));
alert('Payment complete successfully!\nCheck browser developer console for more details');
window.location.replace('/order-confirm'); 
})
.catch(err => {
console.error(err);
alert('Payment failed to complete!\nCheck browser developer console for more details');
});

        }
    }
  });

  //TODO: paste code from step 1.1.4

  //TODO: paste code from step 1.1.5

  
  
// onGetCardNonce is triggered when the "Pay $1.00" button is clicked
function onGetCardNonce(event) {
// Don't submit the form until SqPaymentForm returns with a nonce
event.preventDefault();
// Request a nonce from the SqPaymentForm object
paymentForm.requestCardNonce();
}
