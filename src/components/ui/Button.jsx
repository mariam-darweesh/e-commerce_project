export default function Button({
    childern,
    type="button",
    onClick,
    className="",
    disabled = false
}) {
    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`rounded-2xl px-4 py-2 font-semibold transition
            ${disabled ? "cursor-not-allowed bg-gray-300 text-gray-500" : "bg-blue-600 text-white hover:bg-blue-700 "}
            ${className}`}>
            {childern}
        </button>
    )
}