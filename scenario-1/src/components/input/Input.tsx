import { TextField, TextFieldProps } from "@mui/material";
import React from "react";

export const Input: React.FC<TextFieldProps> = (props) => {
  return <TextField fullWidth variant="outlined" {...props}/>;
};
