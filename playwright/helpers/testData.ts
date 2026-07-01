export interface PaymentDetails {
  cardNumber: string;
  expiryDate: string;
  cvc: string;
  zip: string;
}

export interface BookingDetails {
  planName: string;
  location: string;
  payment: PaymentDetails;
}

export const bookingData: BookingDetails = {
  planName: "Lungs CT Scan",
  location: "Park Ave",
  payment: {
    cardNumber: "4242424242424242",
    expiryDate: "12/34",
    cvc: "123",
    zip: "583101",
  },
};

export const declinedPaymentBookingData: BookingDetails = {
  planName: "Lungs CT Scan",
  location: "Park Ave",
  payment: {
    cardNumber: "4000000000000002", // Stripe decline card
    expiryDate: "12/34",
    cvc: "123",
    zip: "583101",
  },
};
