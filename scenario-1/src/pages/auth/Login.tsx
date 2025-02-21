import { Container, TextField, Button } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const [username, setUsername] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("username", username);
      navigate("/todo");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <TextField
        fullWidth
        label="Username"
        variant="outlined"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <Button variant="contained" color="primary" onClick={handleLogin} style={{ marginTop: "10px" }}>
        Login
      </Button>
    </Container>
  );
};