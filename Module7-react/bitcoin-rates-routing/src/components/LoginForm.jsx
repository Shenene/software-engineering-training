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
      setSubmitResult("Login Successful.");
    }
  }

  return (
    <div className="LoginForm">
      <form onSubmit={handleSubmit}>
        <div className="formRow">
          <label htmlFor="userEmail">Email Address</label>

          <input id="userEmail" name="userEmail" type="email" value={userEmail} onChange={(event) => setUserEmail(event.target.value)} required />
        </div>

        <div className="formRow">
          <label htmlFor="userPassword">Password</label>

          <input id="userPassword" name="userPassword" type="password" value={userPassword} onChange={(event) => setUserPassword(event.target.value)} required />
        </div>

        <button type="submit">Log In</button>

        <p>{submitResult}</p>
      </form>
    </div>
  );
}

export default LoginForm;
