
const calcButton = document.getElementById('calculateButton')

calcButton.addEventListener('click', getValuation)

function getValuation(){
  const calcContainer = document.getElementById('calcContainer')
  const percentage = document.getElementById('percentage').value
  const askingAmount = document.getElementById('askingAmount').value
  let valuation = ((100 / Number(percentage)) * Number(askingAmount))

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  })


  calcContainer.innerHTML = `<h1>${formatter.format(valuation)}</h1>`
}