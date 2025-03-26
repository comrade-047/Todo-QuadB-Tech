function Button({ onClick, children, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-gray-100 border text-white border-white hover:bg-gray-100 rounded-md hover:text-black bg-transparent px-4 py-2 ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;