{
  interface IntPrice {
    price: number,
    discount: number,
    months: number
  }
  
  const fnGetPricePerMonth = ({ price, discount, months }: IntPrice): number => {
    const numTotalPriceWithDiscount: number = (price * (100 - discount)) / 100;
    const numPricePerMonth: number = numTotalPriceWithDiscount / months;
    return numPricePerMonth;
  }
  
  const objPrice = {
    price: 100000,
    discount: 25,
    months: 12
  }
  const numPrice: number = fnGetPricePerMonth(objPrice);
  console.log(numPrice);
}