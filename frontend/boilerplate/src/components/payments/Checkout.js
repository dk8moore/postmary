// Checkout.js
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement),
        });

        if (error) {
            setErrorMessage(error.message);
            return;
        }

        try {
            const response = await axios.post(process.env.REACT_APP_API_URL + '/core/create-checkout-session/', {
                payment_method_id: paymentMethod.id,
            });

            if (response.data.error) {
                setErrorMessage(response.data.error);
            } else {
                const { id: sessionId } = response.data;
                const { error: stripeError } = await stripe.redirectToCheckout({ sessionId });
                if (stripeError) {
                    setErrorMessage(stripeError.message);
                }
            }
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <CardElement />
            <button type="submit" disabled={!stripe}>Pay</button>
            {errorMessage && <div>{errorMessage}</div>}
        </form>
    );
};

const Checkout = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default Checkout;
