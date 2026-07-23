import "./Button.css";

function Button({
  children,
  variant = "primary",
  size = "medium",
  type = "button",
  className = "",
  ...props
}) {
  const buttonClassName = [
    "button",
    `button--${variant}`,
    `button--${size}`,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={buttonClassName}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;