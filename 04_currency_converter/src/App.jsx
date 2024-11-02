import { useState } from "react";
import { InputBox } from './components/index.js'
import  useCurrencyInfo  from './hooks/useCurrencyInfo.js'
import { MdSwapVerticalCircle } from "react-icons/md";
import { Button } from "react-bootstrap";
import './App.css'


function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo] = useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo = useCurrencyInfo(from)

  const currencyOpt = Object.keys(currencyInfo)

  const swapCurrency = () => {
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convertCurrency = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  const image = 'https://img.freepik.com/free-vector/currency-exchange-service-monetary-transfer-changing-dollar-euro-buying-selling-foreign-money-golden-coins-with-eu-us-currency-symbols-vector-isolated-concept-metaphor-illustration_335657-2818.jpg?t=st=1730568835~exp=1730572435~hmac=89b9168fdf36b487e4d5c16641f5b0a0f2c16dc5389cd39612517a82f1a7dc97&w=740'

  return (
    <>
      <div className="container currency-container">
        <div className="row align-items-center">

          <div className="col-xl-12 text-center mb-3">
            <h1>Currency Converter</h1>
          </div>

          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
            <form
              onSubmit={(e) => {
                e.preventDefault()
                convertCurrency()
              }}
            >
              <div className="currency-form-container">
                <InputBox
                  label="From"
                  amount={amount}
                  currencyOptions={currencyOpt}
                  onCurrencyChange={(currency) => setAmount(amount)}
                  selectCurrency={from}
                  onAmountChange={(amount) => setAmount(amount)}
                />
                <MdSwapVerticalCircle className="swap-btn" onClick={swapCurrency} />
                <InputBox
                  label="To"
                  amount={convertedAmount}
                  currencyOptions={currencyOpt}
                  onCurrencyChange={(currency) => setTo(currency)}
                  selectCurrency={to}
                  amountDisabled
                />

                <Button className="convert-btn btn-block" type="submit">Convert</Button>

              </div>
            </form>
          </div>
          <div className="col-xl-6 col-lg-6 col-md-6 col-xs-12 col-sm-12">
              <div className="image-container" style={{overflow: 'hidden'}}>
                <img src={image} alt="Image" width="100%" height={500} style={{objectFit: 'contain'}}/>
              </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
