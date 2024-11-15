/** @jsxImportSource @emotion/react */
import React, { useState } from "react";
import { css, Theme, useTheme } from "@emotion/react";

const toggleWrapperStyle = css({
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
});

const toggleContainerStyle = (isToggled: boolean, theme: Theme) =>
  css({
    width: "36px",
    height: "20px",
    backgroundColor: isToggled ? theme.colors.primary : "#ede9e9",
    borderRadius: "15px",
    border: `1px solid ${theme.colors.secondary}`,
    position: "relative",
    cursor: "pointer",
    transition: "background-color 0.3s ease",
  });

const toggleCircleStyle = (isToggled: boolean, theme: Theme) =>
  css({
    width: "12px",
    height: "12px",
    backgroundColor: "#fff",
    borderRadius: "50%",
    position: "absolute",
    top: "50%",
    left: isToggled ? "calc(100% - 16px)" : "4px",
    transform: "translateY(-50%)",
    transition: "left 0.3s ease",
    boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
  });

type ToggleProps = {
  isToggled: boolean;
  onToggle: () => void;
  label: string;
};

const Toggle: React.FC<ToggleProps> = ({ isToggled, onToggle, label }) => {
  const theme = useTheme();
  return (
    <div css={{ display: "flex", alignItems: "center", gap: 8 }}>
      <div css={toggleWrapperStyle}>
        <div
          css={toggleContainerStyle(isToggled, theme)}
          role="switch"
          aria-checked={isToggled}
          aria-labelledby="toggle-label"
          tabIndex={0}
          onClick={onToggle}
          onKeyDown={(e) => {
            if (e.key === " " || e.key === "Enter") {
              e.preventDefault();
              onToggle();
            }
          }}
        >
          <div css={toggleCircleStyle(isToggled, theme)} />
        </div>
      </div>
      <label id="toggle-label" css={{ fontSize: 12 }}>
        {label}
      </label>
    </div>
  );
};

export default Toggle;
