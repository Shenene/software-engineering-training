import { Button, Paper, Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function PageNotFound() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Stack spacing={3}>
        <Typography coponent="h1" variant="h3">
          Page Not Found
        </Typography>

        <Typography>This page does not exist</Typography>

        <Button component={Link} to="/" variant="contained" sx={{ alignSelf: "flex-start" }}>
          Return to Home
        </Button>
      </Stack>
    </Paper>
  );
}

export default PageNotFound;
