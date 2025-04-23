import { useState, useEffect } from 'react'
import { InputBox } from './components'
import useCurrencyinfo from './hooks/useCurrencyinfo'
import './App.css'

function App() {
  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTO] = useState("pkr")
  const [convertedAmount, setConvertedAmount] = useState(0)

  const Currencyinfo = useCurrencyinfo(from)

  const options = Object.keys(Currencyinfo)

  const swap = () => {
    setFrom(to)
    setTO(from)
    setAmount(convertedAmount)
    setConvertedAmount(amount)
  }

  const convert = () => {
    setConvertedAmount(amount * Currencyinfo[to])
  }

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://img.freepik.com/free-vector/stock-market-chart-technology-vector-blue-background_53876-112168.jpg?t=st=1745408631~exp=1745412231~hmac=ed4bbc768ad2bb1726d93342ea8171abe98fdf3dd64ac7bde180a6ecb0d3aa4a&w=740')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert()
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onAmountChange={(amount) => setAmount(amount)}
                onCurrencyChange={(currency) => setFrom(currency)}
                selectCurrency={from}
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="to"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTO(currency)}
                selectCurrency={to}
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {from.toUpperCase()} to {to.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App
