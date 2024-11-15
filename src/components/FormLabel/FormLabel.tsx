/** @jsxImportSource @emotion/react */
import { css, useTheme } from "@emotion/react";

type FormLabelProps = {
  htmlFor: string;
  label: string;
};

export const FormLabel: React.FC<FormLabelProps> = ({ htmlFor, label }) => {
  const theme = useTheme();

  const labelStyle = css({
    fontSize: "25px",
    fontWeight: "bold",
    display: "block",
    color: theme.colors.secondary,
  });

  return (
    <label htmlFor={htmlFor} css={labelStyle}>
      {label}
    </label>
  );
};
