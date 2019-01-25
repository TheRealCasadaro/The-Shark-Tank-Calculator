
class Valuation {
  constructor(percent, askingAmount) {
  this.percent = percent
  this.amount = askingAmount
  this.result = function () {
    return this.formatter((100 / this.percent) * this.amount)
  }
}


formatter (int) {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })
  let value = formatter.format(int)
  return value
}

}


let businessOne = new Valuation(25, 250000)

console.log(businessOne.result())