function InputFeild({type="text",value,onChange,placeholder,className=""}){

    return (
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            className={`w-full p-2 border rounded-md bg-transparent focus:outline-none placeholder:text-white  text-white ${className}`}
        />
    );
}

export default InputFeild;