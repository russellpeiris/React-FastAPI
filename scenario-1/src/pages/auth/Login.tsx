import { Container, FormControl, FormHelperText } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../../components";

export const Login = () => {
  const [username, setUsername] = useState("");
  const [error, setError] = useState<string>("");
  const navigate = useNavigate();

  const handleLogin = () => {
    if (username.trim()) {
      localStorage.setItem("username", username);
      navigate("/todo");
    } else {
      setError("Username cannot be empty");
    }
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: "20px" }}>
      <FormControl fullWidth error={!!error}>
        <Input
          label="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        {error && <FormHelperText>{error}</FormHelperText>}
      </FormControl>
      <Button buttonText="Login" onClick={handleLogin} />
    </Container>
  );
};
