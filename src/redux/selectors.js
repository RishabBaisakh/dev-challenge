export const getAllSymbols = (store) => {
  let symbolsArray = [];
  if (store.stocks.data !== null) {
    store.stocks.data.forEach((item) => {
      symbolsArray.push(item.symbol);
    });
  }
  return symbolsArray;
};
