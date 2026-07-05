import express from "express";

// ⁡⁣⁢⁣Server 1⁡
const app1 = express();
const port1 = 3000;

app1.get("/", (req, res) => {
  res.send("Server 1 on port 3000");
});

app1.listen(port1, () => {
  console.log(`Server 1 is running at http://localhost: ${port1}`);
});

// -----------------------------------------------------------------

// ⁡⁣⁢⁣Server 2⁡
const app2 = express();
const port2 = 3001;

app1.get("/", (req, res) => {
  res.send("Server 2 on port 3001");
});

app1.listen(port1, () => {
  console.log(`Server 2 is running at http://localhost: ${port2}`);
});

// -----------------------------------------------------------------

// ⁡⁣⁢⁣Server 3⁡
const app3 = express();
const port3 = 3002;

app3.get("/", (req, res) => {
  res.send("Server on port 3002");
});

app3.listen(port3, () => {
  console.log(`Server 3 is running at http://localhost: ${port3}`);
});
