import { Paper, Stack, Typography } from "@mui/material";
import BitcoinRates from "../components/BitcoinRates";

function BitcoinRatesPage() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Stack spacing={3}>
        <Typography component="h1" variant="h3">
          Bitcoin Rates
        </Typography>

        <BitcoinRates />
      </Stack>
    </Paper>
  );
}

export default BitcoinRatesPage;
