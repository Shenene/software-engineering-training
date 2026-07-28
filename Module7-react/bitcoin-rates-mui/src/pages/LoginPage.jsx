import { Paper, Stack, Typography } from "@mui/material";
import LoginForm from "../components/LoginForm";

function LoginPage() {
  return (
    <Paper elevation={3} sx={{ p: 4 }}>
      <Stack spacing={3}>
        <Typography component="h1" variatn="h3">
          Login
        </Typography>

        <LoginForm />
      </Stack>
    </Paper>
  );
}

export default LoginPage;
