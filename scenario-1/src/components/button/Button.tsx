import {
  ButtonProps as MuiButtonProps,
  Button as MuiButton,
} from "@mui/material";
import React from "react";

interface ButtonProps extends MuiButtonProps {
  buttonText: string;
}
export const Button: React.FC<ButtonProps> = (props) => {
  const { buttonText, ...rest } = props;

  return (
    <MuiButton
      variant="contained"
      color="primary"
      style={{ marginTop: "10px" }}
      {...rest}
    >
      {buttonText}
    </MuiButton>
  );
};
