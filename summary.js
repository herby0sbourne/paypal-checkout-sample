const totalValue = document.querySelector('.total-cost');

export const total = (cartItems) => {
  const totalCost = cartItems.reduce((prevValue, cartItem) => {
    if (cartItem.itemTotal) {
      return prevValue + cartItem.itemTotal;
    }
    return prevValue + cartItem.price;
  }, 0);

  totalValue.textContent = totalCost.toFixed(2);

  // console.log(totalCost);
  // console.log(totalValue.textContent);
  return totalCost.toFixed(2);
};
