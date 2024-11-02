
import React, { useId } from 'react'

function InputBox({
    label,
    amount,
    onAmountChange,
    onCurrencyChange,
    currencyOptions = [],
    selectCurrency = "usd",
    amountDisabled = false,
    currencyDisabled = false,
}) {

    const labelId = useId()

  return (
    <>
        <div className="currency-info-card">
            <div className="form-group amount-input">
                <label htmlFor={labelId} >{label}</label>
                <input className="form-control" type="number" placeholder='0.00' id={labelId}
                    disabled={amountDisabled}
                    value={amount}
                    onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
                />
            </div>
            <div className="form-group select-currency">
                <label>Currency Type</label>
                <select className="form-control"
                    disabled={currencyDisabled}
                    value={selectCurrency}
                    onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
                >
                    
                    {
                        currencyOptions.map( (currency) =>  (
                            <option key={currency}
                                value={currency}
                            >
                                {currency}
                            </option>
                        ))
                    }

                </select>
            </div>
        </div>
    </>
  )
}

export default InputBox