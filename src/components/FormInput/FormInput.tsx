/** @jsxImportSource @emotion/react */
import React from "react";
import { css, useTheme } from "@emotion/react";

type FormFieldProps = {
  name: string;
  label: string;
  register: any;
  type?: "text" | "textarea";
  placeholder?: string;
  disabled?: boolean;
  error?: string;
  maxLength?: number;
  charCount?: number;
};

const FormInput: React.FC<FormFieldProps> = ({
  name,
  label,
  register,
  type = "text",
  placeholder = "",
  disabled = false,
  error,
  maxLength,
  charCount,
}) => {
  const theme = useTheme();

  const inputStyle = css({
    width: "100%",
    padding: "8px",
    border: `1px solid ${error ? theme.colors.error : theme.colors.helper}`,
    borderRadius: "4px",
    resize: type === "textarea" ? "none" : "initial",
    minHeight: type === "textarea" ? 140 : "",
  });

  return (
    <div css={{ display: "flex", flexDirection: "column", gap: 8 }}>
      {type === "textarea" ? (
        <textarea
          id={name}
          {...register}
          placeholder={placeholder}
          css={inputStyle}
          maxLength={maxLength}
        />
      ) : (
        <input
          id={name}
          {...register}
          type={type}
          placeholder={placeholder}
          css={inputStyle}
          maxLength={maxLength}
          disabled={disabled}
        />
      )}
      <div
        css={{
          display: "flex",
        }}
      >
        {error && (
          <p
            css={{
              color: theme.colors.error,
              fontSize: "12px",
            }}
          >
            {error}
          </p>
        )}
        {maxLength && (
          <p
            css={{
              fontSize: "12px",
              marginLeft: "auto",
              color: theme.colors.helper,
            }}
          >
            {charCount || 0} / {maxLength} Zeichen
          </p>
        )}
      </div>
    </div>
  );
};

export default FormInput;
