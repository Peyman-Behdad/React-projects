function MessagesBox({ src, className }) {
  return (
    <img
      src={src}
      alt=""
      className={`hidden lg:block absolute xl:w-80 w-70 ${className}`}
    />
  );
}

export default MessagesBox;
