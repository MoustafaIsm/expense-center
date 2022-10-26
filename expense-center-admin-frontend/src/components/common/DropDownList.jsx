
function DropDownList({ label, items, onChange, value }) {
    return (
        <div>
            <label htmlFor="items">{label}</label>
            <select name="items" onChange={onChange} value={value}>
                {
                    items.map((item, index) => {
                        return (
                            <option key={index} value={item}>{item}</option>
                        )
                    })
                }
            </select>
        </div>
    )
}

export default DropDownList