function Button({
  text,
  icon,
  className = "",
  iconClassName = "",
  type = "button",
}) {
  return (
    <button
      type={type}
      className={`${className} flex items-center justify-center gap-x-2 text-sm py-2.5 px-6 rounded-full cursor-pointer`}
    >
      {icon && <span className={iconClassName}>{icon}</span>}
      {text}
    </button>
  );
}

export default Button;
