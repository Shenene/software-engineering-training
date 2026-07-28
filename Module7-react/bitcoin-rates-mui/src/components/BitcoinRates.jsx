import { Alert, FormControl, InputLabel, MenuItem, Select, Stack, Typography } from "@mui/material";
import { useState } from "react";
import { useData } from "../hooks/useData";

const currencies = ["USD", "AUD", "NZD", "GBP", "EUR", "SGD"];

function BitcoinRates() {
  const [currency, setCurrency] = useState(currencies[0]);

  const url = `https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=${currency}`;

  const data = useData(url);

  const bitcoinPrice = data ? data.bitcoin[currency.toLowerCase()] : null;

  const options = currencies.map((curr) => (
    <MenuItem value={curr} key={curr}>
      {curr}
    </MenuItem>
  ));

  return (
    <Stack spacing={3}>
      <Typography component="h2" variant="h5">
        Bitcoin Exchange Rate
      </Typography>

      <FormControl fullWidth>
        <InputLabel id="currency-label">Choose currency</InputLabel>

        <Select labelId="currency-label" id="currency" value={currency} label="Choose currency" onChange={(event) => setCurrency(event.target.value)}>
          {options}
        </Select>
      </FormControl>

      {bitcoinPrice === null ? (
        <Alert severity="info">Loading Bitcoin price...</Alert>
      ) : (
        <Alert severity="success">
          1 Bitcoin = {bitcoinPrice} {currency}
        </Alert>
      )}
    </Stack>
  );
}

export default BitcoinRates;
