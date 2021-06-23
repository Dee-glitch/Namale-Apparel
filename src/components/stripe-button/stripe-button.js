import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    'pk_test_51J5R7qLdB6NHD1cxRjDovnKyYQmSDtQHIdcrs244ePhhT7R7TzgYgXewFv80cQ7OWVYxMJVe2yCf4n5zBn4qY8H000R1td4Vtk';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      lable="Pay Now"
      name="Namale Apparel"
      billingAddress
      shippingAddress
      image="https://svgshare.com/i/CUz.svg"
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;
