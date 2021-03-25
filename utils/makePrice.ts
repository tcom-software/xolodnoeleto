const makePrice = (price: number | string) =>
  String(price)
    .split("")
    .reverse()
    .reduceRight((acc, num, i) => acc + (i % 3 ? num : `${num}.`), "")
    .slice(0, -1) + " руб.";

export default makePrice;
