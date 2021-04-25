import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

const CheckoutForm = ({setPayment}) => {
    const stripe = useStripe();
    const elements = useElements();

    const handleSubmit = async (event) => {
        // event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const cardElement = elements.getElement(CardElement);

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card: cardElement,
        });

        if (error) {
            console.log('[error]', error);
            setPayment({
                status: false,
                error: error.message
            })
        } else {
            console.log('[PaymentMethod]', paymentMethod);
            setPayment({
                status: true,
                paymentId: paymentMethod.id
            })
        }
    };

    return (
        <div>
            <CardElement />
            <button className="btn btn-danger my-3" onClick={handleSubmit} disabled={!stripe}>Pay</button>
        </div>
    );
};

export default CheckoutForm;