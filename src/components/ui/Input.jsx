export default function Input({
    type = "text",
    placeholder = "",
    value,
    onChange,
    name,
    className = ""
}){
    return(
        <input
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
            className={`w-full border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`}
        />
    )
}