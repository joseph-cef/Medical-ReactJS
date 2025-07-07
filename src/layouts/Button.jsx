const Button = ({ title, onClick, className = "", type = "button" }) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`bg-orange-500 text-white px-4 py-2 rounded hover:bg-orange-400 duration-300 ease-in-out ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
