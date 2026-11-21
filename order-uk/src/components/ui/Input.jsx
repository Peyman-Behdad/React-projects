import Button from "./Button";

// A text field with a button attached on the right (search, subscribe...).
// `label` is read by screen readers, since the field has no visible label.
function Input({
  label,
  placeholder,
  buttonText,
  buttonClassName,
  type = "text",
}) {
  return (
    <div className="inline-flex border border-gray-300/80 rounded-full">
      <input
        className="outline-none text-sm px-4"
        type={type}
        placeholder={placeholder}
        aria-label={label}
      />
      <Button text={buttonText} className={buttonClassName} />
    </div>
  );
}

export default Input;
