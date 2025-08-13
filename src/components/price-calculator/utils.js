export const getPercentage = (type, weight) => {
  let discountPercentage = 0;
  switch (type) {
    case "standard":
      discountPercentage = 6;
      break;
    case "seasonal":
      discountPercentage = 12;
      break;
    case "weight":
      if (weight <= 10) {
        discountPercentage = 6;
      } else {
        discountPercentage = 18;
      }
      break;

    default:
      break;
  }
  return discountPercentage;
};

export const getDiscountedPrice = (formData) => {
  if (!formData.type || !formData.weight || !formData.totalPrice) return 0;
  const discountPercentage = getPercentage(formData.type, formData.weight);
  const discPrice =
    formData.totalPrice - formData.totalPrice * (discountPercentage * 0.01);
  return discPrice;
};
