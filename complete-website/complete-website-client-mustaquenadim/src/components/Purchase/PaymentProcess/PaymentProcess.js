import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51IgRFKEvsruORewbiEfYGy0dG4v61lLUtkhUjZ4rpIeRwuuicieovTC8aH6NFX9CYMg8NTeU16lLzlbfuQStEGnn00rR98RkHk');

const PaymentProcess = ({setPayment}) => {
    return (
        <Elements stripe={stripePromise}>
            <CheckoutForm setPayment={setPayment}></CheckoutForm>
        </Elements>
    );
};

export default PaymentProcess;
