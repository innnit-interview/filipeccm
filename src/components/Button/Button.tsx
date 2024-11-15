/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";

type ButtonProps = {
  variant: "primary" | "secondary" | "outline";
  onClick?: () => void;
  disabled?: boolean;
  label: string;
};

const Button: React.FC<ButtonProps> = ({
  variant,
  onClick,
  disabled,
  label,
}) => {
  const theme = useTheme();

  const styles = {
    base: css({
      width: "fit-content",
      fontSize: theme.fontSizes.default,
      padding: "12px 24px",
      borderRadius: "100px",
      cursor: "pointer",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.3s ease",
      border: "none",
      "&:disabled": {
        cursor: "not-allowed",
        opacity: 0.6,
      },
      "@media (max-width: 480px)": {
        width: "100%",
      },
    }),
    primary: css({
      backgroundColor: theme.colors.primary,
      color: "white",
      "&:hover": {
        backgroundColor: theme.colors.primaryHover,
      },
    }),
    secondary: css({
      backgroundColor: theme.colors.secondary,
      color: "white",
      "&:hover": {
        backgroundColor: theme.colors.secondaryHover,
      },
    }),
    outline: css({
      backgroundColor: "transparent",
      color: theme.colors.secondary,
      border: `1px solid ${theme.colors.primary}`,
      "&:hover": {
        backgroundColor: "rgba(148, 102, 242, 0.15)",
      },
    }),
  };

  const buttonStyle = [styles.base, styles[variant]];

  return (
    <button css={buttonStyle} onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;
