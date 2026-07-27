import { useContext, useState } from "react";
import { EmojiContext } from "../context/EmojiContext";
import { useData } from "../hooks/useData";

// ----------------- //

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  const { emoji } = useContext(EmojiContext);

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

  const data = useData(url);

  const bitcoinPrice = data ? data.bitcoin[currency.toLowerCase()] : null;

  const options = currencies.map((curr) => (
    <option value={curr} key={curr}>
      {curr}
    </option>
  ));

  return (
    <div className="BitcoinRates componentBox">
      <h3>Bitcoin Exchange Rate {emoji}</h3>

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

// ----------------- //

export default BitcoinRates;
