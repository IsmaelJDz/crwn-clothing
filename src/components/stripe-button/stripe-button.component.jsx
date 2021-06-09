import React from 'react';
import { withRouter } from 'react-router-dom';

import StripeCheckout from 'react-stripe-checkout';

import { useDispatch } from 'react-redux';
import { clearCart } from '../../redux/cart/cart.actions';

import logo from '../../assets/crown.svg';

const StripeCheckoutButton = ({ price, history }) => {
  const dispatch = useDispatch();

  const priceForStripe = price * 100;
  const publishedKey =
    'pk_test_51J0HxKJ9seavLxProPyzPkbBMkKoJfiXA1CCq48HMTP6uNUtcdZJTUSwt9FDRe3AqZDi7OqV2vyXMV6O8xcpUlha007pQWqcpP';
  const onToken = token => {
    alert('Payment Successful');

    if (token) {
      dispatch(clearCart());
      history.push('/');
    }
  };

  return (
    <StripeCheckout
      label="Pay Now"
      name="CRWN Clothing Ltd."
      billingAddress
      shippingAddress
      image={logo}
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishedKey}
    />
  );
};

export default withRouter(StripeCheckoutButton);
