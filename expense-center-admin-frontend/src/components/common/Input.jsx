
function Input({ label, type = 'text', value, onChange, placeholder }) {
    return (
        <div>
            <label htmlFor="name">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={(event) => onChange(event)}
                placeholder={placeholder} />
        </div>
    )
}

export default Input