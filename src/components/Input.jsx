import React from "react";

const Input = ({
  onHover,
  onFocus,
  error,
  disabled,
  helperText,
  startIcon,
  endIcon,
  value,
  size,
  fullWidth,
  multiline,
  row,
  column,
}) => {
  return (
    <>
      {/* start of startIcon */}
      {startIcon && (
        <span class="material-symbols-outlined icon start-icon">
          {startIcon}
        </span>
      )}
      {/* end of startIcon */}
      {/* start input */}
      {multiline ? (
        <textarea
          name="default"
          id="default"
          cols={column || "30"}
          rows={row || "4"}
          className="input textarea"
          placeholder="Placeholder"
        ></textarea>
      ) : (
        <input
          id="default"
          name="default"
          type="text"
          placeholder="Placeholder"
          disabled={disabled}
          value={value}
          className={`input ${onHover && "hover"} ${onFocus && "focus"} ${
            error && "error"
          } ${disabled && "disabled"} ${
            (startIcon && "input-with-start-icon") ||
            (endIcon && "input-with-icon")
          } ${size === "sm" && "small-input"} ${size === "md" && "medium-input"}
        ${fullWidth && "full-width"}`}
        ></input>
      )}
      {/* end of input */}
      {/* start of endIcon */}
      {endIcon && (
        <span class="material-symbols-outlined icon end-icon">{endIcon}</span>
      )}
      {/* end of endIcon */}
      <label
        className={`label ${onHover && "hover"} ${onFocus && "focus"} ${
          error && "label-error"
        }    ${helperText && "label-when-helper-text"} ${
          (startIcon && "label-with-icon") || (endIcon && "label-with-icon")
        }
        ${multiline && "multiline-label"}`}
        htmlFor="default"
      >
        Label
      </label>
      {helperText && (
        <p className={`helperText ${error && "error-helper-text"}`}>
          {helperText}
        </p>
      )}
    </>
  );
};

export default Input;
