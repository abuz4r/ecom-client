export const formatCurrency = (amount) => {
  return new Intl.NumberFormat("USD", {
    style: "currency",
    currency: "USD",
  }).format(amount);
};
