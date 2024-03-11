function calculateRentalCost(days) {
  const PRICE_PER_DAY = 40;

  if (days >= 3 && days < 7) {
    return days * PRICE_PER_DAY - 20;
  } else if (days >= 7) {
    return days * PRICE_PER_DAY - 50;
  } else {
    return days * PRICE_PER_DAY;
  }
}

module.exports = calculateRentalCost;
