// Best time to buy and sell stock - Med

/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  for(i=1; i<prices.length;i++)
   if(prices[i]>prices[i-1]){
    maxProfit += prices[i] - prices[i-1]
   }
   return maxProfit;
};