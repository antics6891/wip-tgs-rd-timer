import {
  Alert,
  Box,
  Button,
  Grid,
  Snackbar,
  TextField,
  Typography,
} from "@mui/material";
import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState, useEffect } from "react";
import { auth } from "../fbase";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [disabled, setDisabled] = useState(false);
  const [error, setError] = useState({ code: "", message: "" });

  useEffect(() => {
    setDisabled(email.length === 0 || password.length === 0);
  }, [email, password]);

  const test = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((creds) => {
        const user = creds.user;
        console.log(user);
      })
      .catch((err) => {
        setError({
          code: err.code,
          message: err.message,
        });
      });
  };

  const hideAlert = () => {
    setEmail("");
    setPassword("");
    setError({ code: "", message: "" });
  };

  return (
    <Box
      display={"flex"}
      justifyContent="center"
      alignItems={"center"}
      minHeight="100vh"
    >
      <Grid spacing={2} container justifyContent={"center"}>
        <Grid item xs={8}>
          <Typography variant="h3" textAlign={"center"}>
            LOGIN
          </Typography>
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField
            variant="outlined"
            label="email"
            type="email"
            autoComplete="current-email"
            required
            fullWidth
            onChange={(e) => setEmail(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={8} md={6}>
          <TextField
            label="password"
            type="password"
            autoComplete="current-password"
            required
            fullWidth
            onChange={(e) => setPassword(e.target.value)}
          ></TextField>
        </Grid>
        <Grid item xs={8} md={6}>
          <Button
            disabled={disabled}
            variant="contained"
            fullWidth
            size="large"
            onClick={test}
          >
            LETS GO
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Login;
