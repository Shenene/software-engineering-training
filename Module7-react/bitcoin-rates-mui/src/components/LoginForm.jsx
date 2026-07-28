import { Alert, Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

function LoginForm() {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [submitResult, setSubmitResult] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    if (userPassword.length < 8) {
      setSubmitResult("Password must be at least 8 characters long.");
    } else {
      setSubmitResult("Successful login.");
    }
  }

  const loginSuccessful = submitResult === "Successful login.";

  return (
    <Stack component="form" spacing={3} onSubmit={handleSubmit}>
      <TextField id="userEmail" name="userEmail" label="Email address" type="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} required fullWidth />
      <TextField id="userPassword" name="userPassword" label="Password" type="password" value={userPassword} onChange={(event) => setUserPassword(event.target.value)} required fullWidth />
      <Button type="submit" variant="contained">
        Log In
      </Button>
      {submitResult && <Alert severity={loginSuccessful ? "success" : "error"}>{submitResult}</Alert>}
    </Stack>
  );
}

export default LoginForm;
