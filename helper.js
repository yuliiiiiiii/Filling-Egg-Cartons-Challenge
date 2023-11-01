const random = function() {
  const prices = [25, 30, 35, 40, 45, 50];
  const index = math.floor(math.random() * prices.length);
  return prices[index];
}

module.exports = { random };