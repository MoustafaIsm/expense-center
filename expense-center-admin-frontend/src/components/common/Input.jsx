
function Input({ label, type = 'text', value, onChange, placeholder }) {
    return (
        <div className="flex flex-col">
            <label htmlFor="name" className="mb-2">
                {label}
            </label>
            <input
                type={type}
                value={value}
                onChange={(event) => onChange(event.target.value)}
                placeholder={placeholder}
                className="border-2 border-primary-blue rounded-xl p-5 text-lg focus:border-2 focus:border-secondary-blue focus:outline-none" />
        </div>
    )
}

export default Input