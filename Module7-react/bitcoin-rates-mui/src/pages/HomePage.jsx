import { Paper, Stack, Typography } from "@mui/material";

function HomePage() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Stack spacing={2}>
        <Typography component="h1" variant="h3">
          Home
        </Typography>

        <Typography>Welcome to my MUI page</Typography>

        <Typography>Use the navigation menu to open the Login or Bitcoin Rates page.</Typography>
      </Stack>
    </Paper>
  );
}

export default HomePage;
