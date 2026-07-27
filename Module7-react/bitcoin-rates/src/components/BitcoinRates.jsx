import { useEffect, useState } from "react";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);
  const [bitcoinPrice, setBitcoinPrice] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    async function fetchBitcoinPrice() {
      const response = await fetch(`https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`, {
        signal: controller.signal,
      });

      const data = await response.json();

      setBitcoinPrice(data.bitcoin[currency.toLowerCase()]);
    }

    fetchBitcoinPrice();

    return () => {
      controller.abort();
    };
  }, [currency]);

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate</h3>

      <label>
        Choose currency:
        <select value={currency} onChange={(e) => setCurrency(e.target.value)}>
          {options}
        </select>
      </label>

      {bitcoinPrice !== null && (
        <p>
          1 Bitcoin = {bitcoinPrice} {currency}
        </p>
      )}
    </div>
  );
}

export default BitcoinRates;
