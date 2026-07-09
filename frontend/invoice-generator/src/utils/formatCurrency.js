// frontend/src/utils/formatCurrency.js

export const formatCurrency = (amount, currencyCode = 'INR') => {
  try {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: currencyCode,
    }).format(amount);
  } catch (error) {
    // Fallback just in case an invalid code is passed
    return `₹${amount.toFixed(2)}`;
  }
};