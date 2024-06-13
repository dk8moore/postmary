/// <reference types="node" />
import React, { useState } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements, useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import axios from 'axios';

const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY!);

const CheckoutForm: React.FC = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [errorMessage, setErrorMessage] = useState<string>('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not yet loaded.
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: elements.getElement(CardElement)!,
        });

        if (error) {
            setErrorMessage(error.message || 'An error occurred');
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
                    setErrorMessage(stripeError.message || 'An error occurred');
                }
            }
        } catch (error: any) {
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

const Checkout: React.FC = () => (
    <Elements stripe={stripePromise}>
        <CheckoutForm />
    </Elements>
);

export default Checkout;
